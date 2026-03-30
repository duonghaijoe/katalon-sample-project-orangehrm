async page => {
  const baseUrl = 'https://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };

  const customerName = 'Internal Shared Services';
  const projectName = 'QA Activity Catalog';
  const projectDescription = 'Shared project used to expose common QA and delivery activities in employee timesheets.';
  const activities = [
    'Test Planning',
    'Test Case Design',
    'Test Data Preparation',
    'Manual Functional Testing',
    'Regression Testing',
    'API Testing',
    'UI Automation',
    'Defect Verification',
    'Defect Triage',
    'Test Reporting',
    'Environment Setup',
    'Meeting and Coordination',
  ];

  const pause = ms => page.waitForTimeout(ms);

  const ensureLoggedIn = async () => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if (page.url().includes('/auth/login')) {
      await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL(/dashboard|admin|pim|time/, { timeout: 20000 });
      await pause(400);
    }
  };

  const waitForToast = async () => {
    try {
      await page.getByText(/Successfully (Saved|Updated)/).waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore toast timing failures when the page has already advanced.
    }
  };

  const gotoProjects = async () => {
    await page.goto(`${baseUrl}web/index.php/time/viewProjects`, { waitUntil: 'domcontentloaded' });
    await pause(1200);
  };

  const projectExists = async () => {
    await gotoProjects();
    const rows = await page.locator('.oxd-table-card').evaluateAll(cards =>
      cards.map(card =>
        Array.from(card.querySelectorAll('.oxd-table-cell'))
          .map(cell => cell.textContent.replace(/\s+/g, ' ').trim())
          .filter(Boolean),
      ),
    );
    return rows.find(row => row[0] === customerName && row[1] === projectName) || null;
  };

  const addCustomerFromProjectForm = async () => {
    await page.getByRole('button', { name: 'Add Customer' }).click();
    const dialog = page.getByRole('dialog');
    await dialog.waitFor({ state: 'visible', timeout: 5000 });
    const input = dialog.locator('input').first();
    await input.fill(customerName);
    const alreadyExists = dialog.getByText('Already exists');
    if (await alreadyExists.isVisible().catch(() => false)) {
      await dialog.getByRole('button', { name: 'Cancel' }).click();
      await dialog.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
      await pause(300);
      return { status: 'existing' };
    }
    await dialog.getByRole('button', { name: 'Save' }).click();
    await waitForToast();
    await dialog.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
    await pause(600);
    return { status: 'created' };
  };

  const selectCustomer = async form => {
    const customerField = form.getByRole('textbox', { name: 'Type for hints...' }).first();
    await customerField.fill(customerName);
    await pause(1200);

    let customerOption = page.locator('.oxd-autocomplete-dropdown [role=option]').filter({ hasText: customerName }).first();
    let foundExisting = true;
    try {
      await customerOption.waitFor({ state: 'visible', timeout: 5000 });
    } catch (error) {
      foundExisting = false;
    }

    if (!foundExisting) {
      await addCustomerFromProjectForm();
      await customerField.fill(customerName);
      await pause(1200);
      customerOption = page.locator('.oxd-autocomplete-dropdown [role=option]').filter({ hasText: customerName }).first();
      await customerOption.waitFor({ state: 'visible', timeout: 10000 });
    }
    await customerOption.click();
  };

  const ensureProjectCreated = async () => {
    if (await projectExists()) {
      return { status: 'existing' };
    }

    await page.goto(`${baseUrl}web/index.php/time/saveProject`, { waitUntil: 'domcontentloaded' });
    await pause(1200);

    const form = page.locator('form').first();
    const inputs = form.locator('input');
    await inputs.nth(0).fill(projectName);
    await selectCustomer(form);

    await form.getByRole('textbox', { name: 'Type description here' }).fill(projectDescription);
    await form.getByRole('button', { name: 'Save' }).click();
    await page.waitForLoadState('domcontentloaded');
    await pause(1500);

    return { status: 'created', url: page.url() };
  };

  const openProjectEditPage = async () => {
    await gotoProjects();
    const row = page.locator('.oxd-table-card').filter({ hasText: customerName }).filter({ hasText: projectName }).first();
    await row.waitFor({ state: 'visible', timeout: 10000 });
    const editButton = row.locator('button').last();
    await editButton.click();
    await page.waitForLoadState('domcontentloaded');
    await pause(1200);
  };

  const getExistingActivities = async () => {
    const rows = await page.locator('.oxd-table-row').evaluateAll(items =>
      items.map(item =>
        Array.from(item.querySelectorAll('.oxd-table-cell'))
          .map(cell => cell.textContent.replace(/\s+/g, ' ').trim())
          .filter(Boolean),
      ),
    );
    return new Set(rows.map(row => row[0]).filter(Boolean));
  };

  const addActivity = async name => {
    const addButtons = page.locator('button').filter({ hasText: 'Add' });
    await addButtons.last().click();
    const dialog = page.getByRole('dialog');
    await dialog.waitFor({ state: 'visible', timeout: 5000 });
    await dialog.locator('input').first().fill(name);
    await dialog.getByRole('button', { name: 'Save' }).click();
    await waitForToast();
    await dialog.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
    await pause(600);
  };

  await ensureLoggedIn();
  const projectResult = await ensureProjectCreated();
  await openProjectEditPage();

  const existingActivities = await getExistingActivities();
  const createdActivities = [];
  const skippedActivities = [];

  for (const activity of activities) {
    if (existingActivities.has(activity)) {
      skippedActivities.push(activity);
      continue;
    }
    await addActivity(activity);
    createdActivities.push(activity);
    existingActivities.add(activity);
  }

  const finalActivities = Array.from(await getExistingActivities()).filter(Boolean);

  return {
    customerName,
    projectName,
    projectResult,
    createdActivities,
    skippedActivities,
    finalActivities,
    url: page.url(),
  };
}
