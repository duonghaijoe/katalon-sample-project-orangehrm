async page => {
  const baseUrl = 'http://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };

  const leaveTypes = [
    { name: 'Annual Leave', situational: false },
    { name: 'Sick Leave', situational: false },
    { name: 'Personal Leave', situational: false },
    { name: 'Unpaid Leave', situational: false },
    { name: 'Maternity Leave', situational: true },
    { name: 'Paternity Leave', situational: true },
    { name: 'Bereavement Leave', situational: true },
    { name: 'Study Leave', situational: false },
  ];

  const pause = ms => page.waitForTimeout(ms);

  const ensureLoggedIn = async () => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if (page.url().includes('/auth/login')) {
      await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL(/dashboard|leave|admin|pim/, { timeout: 20000 });
      await pause(400);
    }
  };

  const gotoLeaveTypes = async () => {
    await page.goto(`${baseUrl}web/index.php/leave/leaveTypeList`, { waitUntil: 'domcontentloaded' });
    await pause(1200);
  };

  const getExistingLeaveTypes = async () => {
    await gotoLeaveTypes();
    const rows = await page.locator('.oxd-table-row').evaluateAll(items =>
      items.map(item =>
        Array.from(item.querySelectorAll('.oxd-table-cell'))
          .map(cell => cell.textContent.replace(/\s+/g, ' ').trim())
          .filter(Boolean),
      ),
    );
    return new Set(rows.map(row => row[0]).filter(Boolean));
  };

  const waitForToast = async () => {
    try {
      await page.getByText(/Successfully (Saved|Updated)/).waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore toast timing failures when navigation already succeeded.
    }
  };

  const createLeaveType = async leaveType => {
    await page.goto(`${baseUrl}web/index.php/leave/defineLeaveType`, { waitUntil: 'domcontentloaded' });
    await pause(1200);
    await page.locator('input').nth(1).fill(leaveType.name);
    await page.locator('.oxd-radio-wrapper').nth(leaveType.situational ? 0 : 1).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForURL(/leaveTypeList/, { timeout: 15000 });
    await waitForToast();
  };

  await ensureLoggedIn();

  const existing = await getExistingLeaveTypes();
  const created = [];
  const skipped = [];
  const failed = [];

  for (const leaveType of leaveTypes) {
    if (existing.has(leaveType.name)) {
      skipped.push(leaveType);
      continue;
    }

    try {
      await createLeaveType(leaveType);
      created.push(leaveType);
      existing.add(leaveType.name);
    } catch (error) {
      failed.push({
        ...leaveType,
        message: error.message,
        url: page.url(),
      });
    }
  }

  const finalLeaveTypes = Array.from(await getExistingLeaveTypes()).filter(Boolean).sort((a, b) => a.localeCompare(b));

  return { created, skipped, failed, finalLeaveTypes };
}
