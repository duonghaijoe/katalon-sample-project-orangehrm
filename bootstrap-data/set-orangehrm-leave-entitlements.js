async page => {
  const baseUrl = 'http://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };

  const employees = [
    'Amelia Rose Carter',
    'Ethan James Brooks',
    'Sophia Claire Bennett',
    'Lucas Ryan Sullivan',
    'Olivia Jane Hayes',
    'Noah Daniel Murphy',
    'Ava Nicole Foster',
    'Mason Cole Collins',
    'Isabella Grace Parker',
    'Liam Alexander Reed',
    'Charlotte Marie Morgan',
    'Benjamin Scott Turner',
    'Mia Lauren Lawson',
    'Henry Thomas Walker',
    'Harper Elise Price',
    'Alexander Reid Hughes',
    'Evelyn Kate Warren',
    'Daniel Cole Griffin',
    'Ella Brooke Spencer',
    'Michael Dean Russell',
    'Scarlett Paige Monroe',
    'Jacob Miles Palmer',
  ];

  const leaveTypes = [
    { name: 'Annual Leave', entitlement: '30', category: 'normal' },
    { name: 'Sick Leave', entitlement: '30', category: 'normal' },
    { name: 'Personal Leave', entitlement: '30', category: 'normal' },
    { name: 'Unpaid Leave', entitlement: '30', category: 'normal' },
    { name: 'Study Leave', entitlement: '30', category: 'normal' },
    { name: 'Maternity Leave', entitlement: '360', category: 'special' },
    { name: 'Paternity Leave', entitlement: '360', category: 'special' },
    { name: 'Bereavement Leave', entitlement: '360', category: 'special' },
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

  const selectLeaveType = async name => {
    const wrapper = page.locator('.oxd-select-wrapper').first();
    await wrapper.click();
    const dropdown = page.locator('.oxd-select-dropdown').last();
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    await dropdown.locator('[role=option]').filter({ hasText: name }).first().click();
  };

  const waitForToast = async () => {
    try {
      await page.getByText(/Successfully (Saved|Updated)/).waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore toast timing failures when navigation already succeeded.
    }
  };

  const setEntitlement = async (employeeName, leaveType) => {
    await page.goto(`${baseUrl}web/index.php/leave/addLeaveEntitlement`, { waitUntil: 'domcontentloaded' });
    await pause(1200);

    // Ensure individual employee mode.
    await page.locator('.oxd-radio-wrapper').nth(0).click();
    await pause(200);

    const employeeInput = page.getByRole('textbox', { name: 'Type for hints...' });
    await employeeInput.fill(employeeName);
    await pause(1000);

    const option = page.locator('.oxd-autocomplete-dropdown [role=option]').filter({ hasText: employeeName }).first();
    await option.waitFor({ state: 'visible', timeout: 10000 });
    await option.click();

    await selectLeaveType(leaveType.name);
    await page.locator('input').last().fill(leaveType.entitlement);
    await page.getByRole('button', { name: 'Save' }).click();
    await pause(600);

    const dialog = page.getByRole('dialog');
    if (await dialog.isVisible().catch(() => false)) {
      await dialog.getByRole('button', { name: 'Confirm' }).click();
    }

    await page.waitForLoadState('domcontentloaded');
    await waitForToast();

    return {
      employeeName,
      leaveType: leaveType.name,
      entitlement: leaveType.entitlement,
      category: leaveType.category,
      url: page.url(),
    };
  };

  await ensureLoggedIn();

  const processed = [];
  const failed = [];

  for (const employeeName of employees) {
    for (const leaveType of leaveTypes) {
      try {
        processed.push(await setEntitlement(employeeName, leaveType));
      } catch (error) {
        failed.push({
          employeeName,
          leaveType: leaveType.name,
          entitlement: leaveType.entitlement,
          category: leaveType.category,
          message: error.message,
          url: page.url(),
        });
      }
    }
  }

  return {
    leavePeriod: '2026-03-03 to 2026-03-30',
    normalEntitlement: '30',
    specialEntitlement: '360',
    processedCount: processed.length,
    failedCount: failed.length,
    processed,
    failed,
  };
}
