async page => {
  const baseUrl = 'https://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };

  const employees = [
    { empNumber: '4', employeeId: '0401', first: 'Amelia', middle: 'Rose', last: 'Carter' },
    { empNumber: '5', employeeId: '0402', first: 'Ethan', middle: 'James', last: 'Brooks' },
    { empNumber: '6', employeeId: '0403', first: 'Sophia', middle: 'Claire', last: 'Bennett' },
    { empNumber: '7', employeeId: '0404', first: 'Lucas', middle: 'Ryan', last: 'Sullivan' },
    { empNumber: '8', employeeId: '0405', first: 'Olivia', middle: 'Jane', last: 'Hayes' },
    { empNumber: '9', employeeId: '0406', first: 'Noah', middle: 'Daniel', last: 'Murphy' },
    { empNumber: '10', employeeId: '0407', first: 'Ava', middle: 'Nicole', last: 'Foster' },
    { empNumber: '11', employeeId: '0408', first: 'Mason', middle: 'Cole', last: 'Collins' },
    { empNumber: '12', employeeId: '0409', first: 'Isabella', middle: 'Grace', last: 'Parker' },
    { empNumber: '13', employeeId: '0410', first: 'Liam', middle: 'Alexander', last: 'Reed' },
    { empNumber: '14', employeeId: '0411', first: 'Charlotte', middle: 'Marie', last: 'Morgan' },
    { empNumber: '15', employeeId: '0412', first: 'Benjamin', middle: 'Scott', last: 'Turner' },
    { empNumber: '16', employeeId: '0413', first: 'Mia', middle: 'Lauren', last: 'Lawson' },
    { empNumber: '17', employeeId: '0414', first: 'Henry', middle: 'Thomas', last: 'Walker' },
    { empNumber: '18', employeeId: '0415', first: 'Harper', middle: 'Elise', last: 'Price' },
    { empNumber: '19', employeeId: '0416', first: 'Alexander', middle: 'Reid', last: 'Hughes' },
    { empNumber: '20', employeeId: '0417', first: 'Evelyn', middle: 'Kate', last: 'Warren' },
    { empNumber: '21', employeeId: '0418', first: 'Daniel', middle: 'Cole', last: 'Griffin' },
    { empNumber: '22', employeeId: '0419', first: 'Ella', middle: 'Brooke', last: 'Spencer' },
    { empNumber: '23', employeeId: '0420', first: 'Michael', middle: 'Dean', last: 'Russell' },
    { empNumber: '24', employeeId: '0421', first: 'Scarlett', middle: 'Paige', last: 'Monroe' },
    { empNumber: '25', employeeId: '0422', first: 'Jacob', middle: 'Miles', last: 'Palmer' },
  ];

  const pause = ms => page.waitForTimeout(ms);

  const waitForSavedToast = async () => {
    try {
      await page.getByText(/Successfully (Saved|Updated)/).waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore toast timing failures when save already succeeded.
    }
  };

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

  const updateEmployeeName = async employee => {
    await page.goto(`${baseUrl}web/index.php/pim/viewPersonalDetails/empNumber/${employee.empNumber}`, {
      waitUntil: 'domcontentloaded',
    });
    await pause(1200);
    const form = page.locator('form').first();
    const firstName = page.getByRole('textbox', { name: 'First Name' });
    const middleName = page.getByRole('textbox', { name: 'Middle Name' });
    const lastName = page.getByRole('textbox', { name: 'Last Name' });
    await firstName.fill(employee.first);
    await middleName.fill(employee.middle);
    await lastName.fill(employee.last);
    await lastName.press('Tab');
    await pause(300);
    await form.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
    const saved = [await firstName.inputValue(), await middleName.inputValue(), await lastName.inputValue()];
    return {
      empNumber: employee.empNumber,
      employeeId: employee.employeeId,
      name: saved.join(' ').trim(),
      url: page.url(),
    };
  };

  await ensureLoggedIn();

  const processed = [];
  const failed = [];

  for (const employee of employees) {
    try {
      processed.push(await updateEmployeeName(employee));
    } catch (error) {
      failed.push({
        empNumber: employee.empNumber,
        employeeId: employee.employeeId,
        name: `${employee.first} ${employee.middle} ${employee.last}`,
        message: error.message,
        url: page.url(),
      });
    }
  }

  return { processed, failed };
}
