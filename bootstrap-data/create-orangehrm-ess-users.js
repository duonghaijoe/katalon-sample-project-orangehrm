async page => {
  const baseUrl = 'https://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };
  const defaultPassword = 'asdEDZ12#';

  const employees = [
    { employeeId: '0401', fullName: 'Amelia Rose Carter', username: 'ess0401' },
    { employeeId: '0402', fullName: 'Ethan James Brooks', username: 'ess0402' },
    { employeeId: '0403', fullName: 'Sophia Claire Bennett', username: 'ess0403' },
    { employeeId: '0404', fullName: 'Lucas Ryan Sullivan', username: 'ess0404' },
    { employeeId: '0405', fullName: 'Olivia Jane Hayes', username: 'ess0405' },
    { employeeId: '0406', fullName: 'Noah Daniel Murphy', username: 'ess0406' },
    { employeeId: '0407', fullName: 'Ava Nicole Foster', username: 'ess0407' },
    { employeeId: '0408', fullName: 'Mason Cole Collins', username: 'ess0408' },
    { employeeId: '0409', fullName: 'Isabella Grace Parker', username: 'ess0409' },
    { employeeId: '0410', fullName: 'Liam Alexander Reed', username: 'ess0410' },
    { employeeId: '0411', fullName: 'Charlotte Marie Morgan', username: 'ess0411' },
    { employeeId: '0412', fullName: 'Benjamin Scott Turner', username: 'ess0412' },
    { employeeId: '0413', fullName: 'Mia Lauren Lawson', username: 'ess0413' },
    { employeeId: '0414', fullName: 'Henry Thomas Walker', username: 'ess0414' },
    { employeeId: '0415', fullName: 'Harper Elise Price', username: 'ess0415' },
    { employeeId: '0416', fullName: 'Alexander Reid Hughes', username: 'ess0416' },
    { employeeId: '0417', fullName: 'Evelyn Kate Warren', username: 'ess0417' },
    { employeeId: '0418', fullName: 'Daniel Cole Griffin', username: 'ess0418' },
    { employeeId: '0419', fullName: 'Ella Brooke Spencer', username: 'ess0419' },
    { employeeId: '0420', fullName: 'Michael Dean Russell', username: 'ess0420' },
    { employeeId: '0421', fullName: 'Scarlett Paige Monroe', username: 'ess0421' },
    { employeeId: '0422', fullName: 'Jacob Miles Palmer', username: 'ess0422' },
  ];

  const pause = ms => page.waitForTimeout(ms);

  const ensureLoggedIn = async () => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if (page.url().includes('/auth/login')) {
      await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL(/dashboard|admin|pim/, { timeout: 20000 });
      await pause(400);
    }
  };

  const selectFromForm = async (form, index, text) => {
    const wrapper = form.locator('.oxd-select-wrapper').nth(index);
    await wrapper.click();
    const dropdown = page.locator('.oxd-select-dropdown').last();
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.locator('[role=option]').filter({ hasText: text }).first().click();
  };

  const getExistingUsernames = async () => {
    await page.goto(`${baseUrl}web/index.php/admin/viewSystemUsers`, { waitUntil: 'domcontentloaded' });
    await pause(1500);
    const rows = await page.locator('.oxd-table-card').evaluateAll(cards =>
      cards.map(card =>
        Array.from(card.querySelectorAll('.oxd-table-cell'))
          .map(cell => cell.textContent.replace(/\s+/g, ' ').trim())
          .filter(Boolean),
      ),
    );
    return new Set(rows.map(row => row[0]).filter(Boolean));
  };

  const waitForSavedToast = async () => {
    try {
      await page.getByText(/Successfully (Saved|Updated)/).waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore timing-only toast failures when save already succeeded.
    }
  };

  const createEssUser = async employee => {
    await page.goto(`${baseUrl}web/index.php/admin/saveSystemUser`, { waitUntil: 'domcontentloaded' });
    await pause(1200);

    const form = page.locator('form').first();
    await selectFromForm(form, 0, 'ESS');

    const employeeName = form.getByRole('textbox', { name: 'Type for hints...' });
    await employeeName.fill(employee.fullName);
    await pause(1200);

    const option = page.locator('.oxd-autocomplete-dropdown [role=option]').filter({ hasText: employee.fullName }).first();
    await option.waitFor({ state: 'visible', timeout: 10000 });
    await option.click();

    await selectFromForm(form, 1, 'Enabled');

    const inputs = form.locator('input');
    await inputs.nth(1).fill(employee.username);
    await inputs.nth(2).fill(defaultPassword);
    await inputs.nth(3).fill(defaultPassword);
    await form.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL(/viewSystemUsers/, { timeout: 15000 });
    await waitForSavedToast();
  };

  await ensureLoggedIn();

  const existing = await getExistingUsernames();
  const created = [];
  const skipped = [];
  const failed = [];

  for (const employee of employees) {
    if (existing.has(employee.username)) {
      skipped.push({ username: employee.username, employeeId: employee.employeeId, fullName: employee.fullName });
      continue;
    }

    try {
      await createEssUser(employee);
      created.push({ username: employee.username, employeeId: employee.employeeId, fullName: employee.fullName });
      existing.add(employee.username);
    } catch (error) {
      failed.push({
        username: employee.username,
        employeeId: employee.employeeId,
        fullName: employee.fullName,
        message: error.message,
        url: page.url(),
      });
    }
  }

  return { defaultPassword, created, skipped, failed };
}
