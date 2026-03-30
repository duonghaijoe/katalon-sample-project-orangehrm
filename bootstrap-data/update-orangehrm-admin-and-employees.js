async page => {
  const baseUrl = 'https://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };

  const jobTitles = [
    { name: 'QA Lead', description: 'Leads quality strategy, test planning, and release quality gates.', note: 'Used for senior QA ownership.' },
    { name: 'Software Engineer', description: 'Builds and maintains application features and services.', note: 'Core engineering role.' },
    { name: 'QA Engineer', description: 'Designs and executes manual and automated test coverage.', note: 'Hands-on test execution role.' },
    { name: 'Sales Representative', description: 'Owns client outreach and pipeline development.', note: 'Sales execution role.' },
    { name: 'HR Manager', description: 'Leads recruiting, people operations, and HR processes.', note: 'Senior HR role.' },
    { name: 'Finance Manager', description: 'Owns budgets, reporting, and finance operations.', note: 'Finance leadership role.' },
    { name: 'Software Architect', description: 'Guides system design and technical standards.', note: 'Architecture and platform role.' },
    { name: 'HR Associate', description: 'Supports hiring coordination and HR administration.', note: 'Entry to mid-level HR role.' },
    { name: 'Recruiter', description: 'Sources candidates and manages recruitment workflows.', note: 'Talent acquisition role.' },
    { name: 'DevOps Engineer', description: 'Maintains CI/CD, environments, and infrastructure automation.', note: 'Platform operations role.' },
    { name: 'Business Analyst', description: 'Translates business needs into system requirements.', note: 'Analysis and process role.' },
    { name: 'Engineering Manager', description: 'Leads engineering teams and delivery planning.', note: 'People and delivery leadership role.' },
    { name: 'Finance Analyst', description: 'Analyzes budgets, forecasts, and financial performance.', note: 'Finance reporting role.' },
    { name: 'Support Engineer', description: 'Handles production support and technical triage.', note: 'Customer and ops support role.' },
    { name: 'UI Designer', description: 'Designs product interfaces and reusable design assets.', note: 'Product design role.' },
    { name: 'Project Manager', description: 'Coordinates schedules, risks, and cross-team delivery.', note: 'Delivery management role.' },
  ];

  const employmentStatuses = [
    'Full-Time Permanent',
    'Full-Time Contract',
    'Full-Time Probation',
    'Part-Time Internship',
    'Part-Time Contract',
  ];

  const jobCategories = [
    'Professionals',
    'Technicians',
    'Officials and Managers',
    'Sales Workers',
    'Clerical and Office',
  ];

  const locations = [
    {
      name: 'HQ - CA',
      city: 'Irvine',
      state: 'California',
      zip: '92612',
      country: 'United States',
      phone: '9495550101',
      fax: '9495550102',
      address: '200 Main Street, Irvine, CA',
      notes: 'Primary corporate headquarters.',
    },
    {
      name: 'Texas R&D',
      city: 'Austin',
      state: 'Texas',
      zip: '73301',
      country: 'United States',
      phone: '5125550110',
      fax: '5125550111',
      address: '410 Congress Avenue, Austin, TX',
      notes: 'Engineering and QA delivery center.',
    },
    {
      name: 'New York Sales Office',
      city: 'New York',
      state: 'New York',
      zip: '10001',
      country: 'United States',
      phone: '2125550120',
      fax: '2125550121',
      address: '300 Madison Avenue, New York, NY',
      notes: 'Sales and marketing office.',
    },
    {
      name: 'Canadian Regional HQ',
      city: 'Toronto',
      state: 'Ontario',
      zip: 'M5H2N2',
      country: 'Canada',
      phone: '4165550130',
      fax: '4165550131',
      address: '95 Wellington Street West, Toronto, ON',
      notes: 'Regional finance and operations office.',
    },
  ];

  const subUnits = [
    { unitId: 'SU-ENG', name: 'Engineering', description: 'Engineering delivery organization.' },
    { unitId: 'SU-QA', name: 'Quality Assurance', description: 'Quality strategy and execution.' },
    { unitId: 'SU-SM', name: 'Sales & Marketing', description: 'Commercial growth and marketing.' },
    { unitId: 'SU-HR', name: 'Human Resources', description: 'People operations and hiring.' },
    { unitId: 'SU-FIN', name: 'Finance', description: 'Finance planning and reporting.' },
  ];

  const employees = [
    { empNumber: '4', employeeId: '0401', first: 'Amelia', middle: 'Rose', last: 'Carter', gender: 'Female', dob: '1993-04-12', otherId: 'OID-0401', licenseNumber: 'VN-DL-0401', licenseExpiry: '2028-05-14', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2023-01-15', street1: '18 Nguyen Hue Boulevard', street2: 'Apartment 1204', city: 'Ho Chi Minh City', state: 'Ho Chi Minh', zip: '700000', country: 'Viet Nam', homePhone: '02838261201', mobilePhone: '0901203401', workPhone: '02873000401', workEmail: 'amelia.carter@orangebootstrap.test', otherEmail: 'amelia.rose.carter@orangebootstrap.test', jobTitle: 'QA Lead', jobCategory: 'Professionals', subUnit: 'Quality Assurance', location: 'HQ - CA', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '5', employeeId: '0402', first: 'Ethan', middle: 'James', last: 'Brooks', gender: 'Male', dob: '1990-11-03', otherId: 'OID-0402', licenseNumber: 'VN-DL-0402', licenseExpiry: '2027-09-20', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2022-08-08', street1: '52 Le Loi Street', street2: 'District 1', city: 'Ho Chi Minh City', state: 'Ho Chi Minh', zip: '700000', country: 'Viet Nam', homePhone: '02838261202', mobilePhone: '0901203402', workPhone: '02873000402', workEmail: 'ethan.brooks@orangebootstrap.test', otherEmail: 'ethan.james.brooks@orangebootstrap.test', jobTitle: 'Software Engineer', jobCategory: 'Professionals', subUnit: 'Engineering', location: 'HQ - CA', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '6', employeeId: '0403', first: 'Sophia', middle: 'Claire', last: 'Bennett', gender: 'Female', dob: '1995-02-18', otherId: 'OID-0403', licenseNumber: 'VN-DL-0403', licenseExpiry: '2029-01-10', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2024-03-11', street1: '14 Pasteur Street', street2: 'Ward 6', city: 'Da Nang', state: 'Da Nang', zip: '550000', country: 'Viet Nam', homePhone: '02363806103', mobilePhone: '0901203403', workPhone: '02367300403', workEmail: 'sophia.bennett@orangebootstrap.test', otherEmail: 'sophia.claire.bennett@orangebootstrap.test', jobTitle: 'QA Engineer', jobCategory: 'Technicians', subUnit: 'Quality Assurance', location: 'Texas R&D', employmentStatus: 'Full-Time Probation' },
    { empNumber: '7', employeeId: '0404', first: 'Lucas', middle: 'Ryan', last: 'Sullivan', gender: 'Male', dob: '1988-06-27', otherId: 'OID-0404', licenseNumber: 'VN-DL-0404', licenseExpiry: '2027-12-01', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2021-11-22', street1: '88 Tran Phu Avenue', street2: 'Hai Chau', city: 'Da Nang', state: 'Da Nang', zip: '550000', country: 'Viet Nam', homePhone: '02363806104', mobilePhone: '0901203404', workPhone: '02367300404', workEmail: 'lucas.sullivan@orangebootstrap.test', otherEmail: 'lucas.ryan.sullivan@orangebootstrap.test', jobTitle: 'Sales Representative', jobCategory: 'Sales Workers', subUnit: 'Sales & Marketing', location: 'New York Sales Office', employmentStatus: 'Full-Time Contract' },
    { empNumber: '8', employeeId: '0405', first: 'Olivia', middle: 'Jane', last: 'Hayes', gender: 'Female', dob: '1992-09-09', otherId: 'OID-0405', licenseNumber: 'VN-DL-0405', licenseExpiry: '2028-03-18', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2023-06-19', street1: '19 Hung Vuong Road', street2: 'Ninh Kieu', city: 'Can Tho', state: 'Can Tho', zip: '900000', country: 'Viet Nam', homePhone: '02923806105', mobilePhone: '0901203405', workPhone: '02927300405', workEmail: 'olivia.hayes@orangebootstrap.test', otherEmail: 'olivia.jane.hayes@orangebootstrap.test', jobTitle: 'HR Manager', jobCategory: 'Officials and Managers', subUnit: 'Human Resources', location: 'HQ - CA', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '9', employeeId: '0406', first: 'Noah', middle: 'Daniel', last: 'Murphy', gender: 'Male', dob: '1987-12-14', otherId: 'OID-0406', licenseNumber: 'VN-DL-0406', licenseExpiry: '2028-10-22', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2020-05-04', street1: '7 Bach Dang Street', street2: 'Ngo Quyen', city: 'Hai Phong', state: 'Hai Phong', zip: '180000', country: 'Viet Nam', homePhone: '02253806106', mobilePhone: '0901203406', workPhone: '02257300406', workEmail: 'noah.murphy@orangebootstrap.test', otherEmail: 'noah.daniel.murphy@orangebootstrap.test', jobTitle: 'Finance Manager', jobCategory: 'Officials and Managers', subUnit: 'Finance', location: 'Canadian Regional HQ', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '10', employeeId: '0407', first: 'Ava', middle: 'Nicole', last: 'Foster', gender: 'Female', dob: '1996-07-21', otherId: 'OID-0407', licenseNumber: 'VN-DL-0407', licenseExpiry: '2029-08-13', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2024-01-08', street1: '32 Phan Chu Trinh Street', street2: 'Ward 2', city: 'Vung Tau', state: 'Ba Ria - Vung Tau', zip: '780000', country: 'Viet Nam', homePhone: '02543806107', mobilePhone: '0901203407', workPhone: '02547300407', workEmail: 'ava.foster@orangebootstrap.test', otherEmail: 'ava.nicole.foster@orangebootstrap.test', jobTitle: 'QA Engineer', jobCategory: 'Technicians', subUnit: 'Quality Assurance', location: 'Texas R&D', employmentStatus: 'Part-Time Internship' },
    { empNumber: '11', employeeId: '0408', first: 'Mason', middle: 'Cole', last: 'Collins', gender: 'Male', dob: '1991-03-30', otherId: 'OID-0408', licenseNumber: 'VN-DL-0408', licenseExpiry: '2027-11-30', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2022-02-14', street1: '75 Nguyen Van Linh', street2: 'Hai Chau', city: 'Da Nang', state: 'Da Nang', zip: '550000', country: 'Viet Nam', homePhone: '02363806108', mobilePhone: '0901203408', workPhone: '02367300408', workEmail: 'mason.collins@orangebootstrap.test', otherEmail: 'mason.cole.collins@orangebootstrap.test', jobTitle: 'Software Engineer', jobCategory: 'Professionals', subUnit: 'Engineering', location: 'Texas R&D', employmentStatus: 'Full-Time Contract' },
    { empNumber: '12', employeeId: '0409', first: 'Isabella', middle: 'Grace', last: 'Parker', gender: 'Female', dob: '1994-05-16', otherId: 'OID-0409', licenseNumber: 'VN-DL-0409', licenseExpiry: '2028-04-27', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2023-10-02', street1: '91 Le Hong Phong', street2: 'Ward 4', city: 'Nha Trang', state: 'Khanh Hoa', zip: '650000', country: 'Viet Nam', homePhone: '02583806109', mobilePhone: '0901203409', workPhone: '02587300409', workEmail: 'isabella.parker@orangebootstrap.test', otherEmail: 'isabella.grace.parker@orangebootstrap.test', jobTitle: 'Sales Representative', jobCategory: 'Professionals', subUnit: 'Sales & Marketing', location: 'New York Sales Office', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '13', employeeId: '0410', first: 'Liam', middle: 'Alexander', last: 'Reed', gender: 'Male', dob: '1989-01-05', otherId: 'OID-0410', licenseNumber: 'VN-DL-0410', licenseExpiry: '2027-07-15', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2021-04-12', street1: '44 Cach Mang Thang Tam', street2: 'Ninh Kieu', city: 'Can Tho', state: 'Can Tho', zip: '900000', country: 'Viet Nam', homePhone: '02923806110', mobilePhone: '0901203410', workPhone: '02927300410', workEmail: 'liam.reed@orangebootstrap.test', otherEmail: 'liam.alexander.reed@orangebootstrap.test', jobTitle: 'Software Architect', jobCategory: 'Officials and Managers', subUnit: 'Engineering', location: 'Texas R&D', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '14', employeeId: '0411', first: 'Charlotte', middle: 'Marie', last: 'Morgan', gender: 'Female', dob: '1997-08-24', otherId: 'OID-0411', licenseNumber: 'VN-DL-0411', licenseExpiry: '2029-02-11', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2024-06-03', street1: '66 Tran Hung Dao', street2: 'Ward 1', city: 'Hue', state: 'Thua Thien Hue', zip: '530000', country: 'Viet Nam', homePhone: '02343806111', mobilePhone: '0901203411', workPhone: '02347300411', workEmail: 'charlotte.morgan@orangebootstrap.test', otherEmail: 'charlotte.marie.morgan@orangebootstrap.test', jobTitle: 'HR Associate', jobCategory: 'Clerical and Office', subUnit: 'Human Resources', location: 'HQ - CA', employmentStatus: 'Part-Time Contract' },
    { empNumber: '15', employeeId: '0412', first: 'Benjamin', middle: 'Scott', last: 'Turner', gender: 'Male', dob: '1986-10-28', otherId: 'OID-0412', licenseNumber: 'VN-DL-0412', licenseExpiry: '2028-06-19', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2019-09-09', street1: '12 Nguyen Thai Hoc', street2: 'Ward 3', city: 'Da Lat', state: 'Lam Dong', zip: '670000', country: 'Viet Nam', homePhone: '02633806112', mobilePhone: '0901203412', workPhone: '02637300412', workEmail: 'benjamin.turner@orangebootstrap.test', otherEmail: 'benjamin.scott.turner@orangebootstrap.test', jobTitle: 'QA Lead', jobCategory: 'Officials and Managers', subUnit: 'Quality Assurance', location: 'Texas R&D', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '16', employeeId: '0413', first: 'Mia', middle: 'Lauren', last: 'Lawson', gender: 'Female', dob: '1993-12-08', otherId: 'OID-0413', licenseNumber: 'VN-DL-0413', licenseExpiry: '2028-12-18', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2022-07-18', street1: '27 Vo Nguyen Giap', street2: 'Son Tra', city: 'Da Nang', state: 'Da Nang', zip: '550000', country: 'Viet Nam', homePhone: '02363806113', mobilePhone: '0901203413', workPhone: '02367300413', workEmail: 'mia.lawson@orangebootstrap.test', otherEmail: 'mia.lauren.lawson@orangebootstrap.test', jobTitle: 'Recruiter', jobCategory: 'Professionals', subUnit: 'Human Resources', location: 'HQ - CA', employmentStatus: 'Full-Time Contract' },
    { empNumber: '17', employeeId: '0414', first: 'Henry', middle: 'Thomas', last: 'Walker', gender: 'Male', dob: '1990-04-01', otherId: 'OID-0414', licenseNumber: 'VN-DL-0414', licenseExpiry: '2027-05-25', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2021-12-06', street1: '39 Hai Ba Trung', street2: 'District 3', city: 'Ho Chi Minh City', state: 'Ho Chi Minh', zip: '700000', country: 'Viet Nam', homePhone: '02838261414', mobilePhone: '0901203414', workPhone: '02873000414', workEmail: 'henry.walker@orangebootstrap.test', otherEmail: 'henry.thomas.walker@orangebootstrap.test', jobTitle: 'DevOps Engineer', jobCategory: 'Technicians', subUnit: 'Engineering', location: 'Texas R&D', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '18', employeeId: '0415', first: 'Harper', middle: 'Elise', last: 'Price', gender: 'Female', dob: '1998-03-12', otherId: 'OID-0415', licenseNumber: 'VN-DL-0415', licenseExpiry: '2029-07-29', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2024-08-19', street1: '58 Kim Ma Street', street2: 'Ba Dinh', city: 'Ha Noi', state: 'Ha Noi', zip: '100000', country: 'Viet Nam', homePhone: '02433806115', mobilePhone: '0901203415', workPhone: '02437300415', workEmail: 'harper.price@orangebootstrap.test', otherEmail: 'harper.elise.price@orangebootstrap.test', jobTitle: 'Business Analyst', jobCategory: 'Professionals', subUnit: 'Engineering', location: 'HQ - CA', employmentStatus: 'Full-Time Probation' },
    { empNumber: '19', employeeId: '0416', first: 'Alexander', middle: 'Reid', last: 'Hughes', gender: 'Male', dob: '1985-06-11', otherId: 'OID-0416', licenseNumber: 'VN-DL-0416', licenseExpiry: '2028-01-31', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2018-04-16', street1: '101 Quang Trung Street', street2: 'Ha Dong', city: 'Ha Noi', state: 'Ha Noi', zip: '100000', country: 'Viet Nam', homePhone: '02433806116', mobilePhone: '0901203416', workPhone: '02437300416', workEmail: 'alexander.hughes@orangebootstrap.test', otherEmail: 'alexander.reid.hughes@orangebootstrap.test', jobTitle: 'Engineering Manager', jobCategory: 'Officials and Managers', subUnit: 'Engineering', location: 'Texas R&D', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '20', employeeId: '0417', first: 'Evelyn', middle: 'Kate', last: 'Warren', gender: 'Female', dob: '1991-09-17', otherId: 'OID-0417', licenseNumber: 'VN-DL-0417', licenseExpiry: '2027-10-09', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2022-09-05', street1: '24 Dien Bien Phu', street2: 'Ward 15', city: 'Ho Chi Minh City', state: 'Ho Chi Minh', zip: '700000', country: 'Viet Nam', homePhone: '02838261417', mobilePhone: '0901203417', workPhone: '02873000417', workEmail: 'evelyn.warren@orangebootstrap.test', otherEmail: 'evelyn.kate.warren@orangebootstrap.test', jobTitle: 'Finance Analyst', jobCategory: 'Professionals', subUnit: 'Finance', location: 'Canadian Regional HQ', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '21', employeeId: '0418', first: 'Daniel', middle: 'Cole', last: 'Griffin', gender: 'Male', dob: '1994-11-22', otherId: 'OID-0418', licenseNumber: 'VN-DL-0418', licenseExpiry: '2028-09-05', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2023-11-13', street1: '9 Truong Dinh Street', street2: 'Ward 1', city: 'My Tho', state: 'Tien Giang', zip: '860000', country: 'Viet Nam', homePhone: '02733806118', mobilePhone: '0901203418', workPhone: '02737300418', workEmail: 'daniel.griffin@orangebootstrap.test', otherEmail: 'daniel.cole.griffin@orangebootstrap.test', jobTitle: 'Support Engineer', jobCategory: 'Technicians', subUnit: 'Engineering', location: 'Texas R&D', employmentStatus: 'Full-Time Contract' },
    { empNumber: '22', employeeId: '0419', first: 'Ella', middle: 'Brooke', last: 'Spencer', gender: 'Female', dob: '1996-01-29', otherId: 'OID-0419', licenseNumber: 'VN-DL-0419', licenseExpiry: '2029-03-03', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2024-02-26', street1: '36 Tran Quang Khai', street2: 'Hoan Kiem', city: 'Ha Noi', state: 'Ha Noi', zip: '100000', country: 'Viet Nam', homePhone: '02433806119', mobilePhone: '0901203419', workPhone: '02437300419', workEmail: 'ella.spencer@orangebootstrap.test', otherEmail: 'ella.brooke.spencer@orangebootstrap.test', jobTitle: 'UI Designer', jobCategory: 'Professionals', subUnit: 'Engineering', location: 'HQ - CA', employmentStatus: 'Part-Time Internship' },
    { empNumber: '23', employeeId: '0420', first: 'Michael', middle: 'Dean', last: 'Russell', gender: 'Male', dob: '1988-08-07', otherId: 'OID-0420', licenseNumber: 'VN-DL-0420', licenseExpiry: '2027-04-12', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2020-10-19', street1: '83 Nguyen Trai', street2: 'Thanh Xuan', city: 'Ha Noi', state: 'Ha Noi', zip: '100000', country: 'Viet Nam', homePhone: '02433806120', mobilePhone: '0901203420', workPhone: '02437300420', workEmail: 'michael.russell@orangebootstrap.test', otherEmail: 'michael.dean.russell@orangebootstrap.test', jobTitle: 'Project Manager', jobCategory: 'Officials and Managers', subUnit: 'Engineering', location: 'HQ - CA', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '24', employeeId: '0421', first: 'Scarlett', middle: 'Paige', last: 'Monroe', gender: 'Female', dob: '1992-12-19', otherId: 'OID-0421', licenseNumber: 'VN-DL-0421', licenseExpiry: '2028-11-07', nationality: 'Vietnamese', maritalStatus: 'Married', joinedDate: '2021-07-26', street1: '15 Ly Tu Trong', street2: 'District 1', city: 'Ho Chi Minh City', state: 'Ho Chi Minh', zip: '700000', country: 'Viet Nam', homePhone: '02838261421', mobilePhone: '0901203421', workPhone: '02873000421', workEmail: 'scarlett.monroe@orangebootstrap.test', otherEmail: 'scarlett.paige.monroe@orangebootstrap.test', jobTitle: 'Sales Representative', jobCategory: 'Professionals', subUnit: 'Sales & Marketing', location: 'New York Sales Office', employmentStatus: 'Full-Time Permanent' },
    { empNumber: '25', employeeId: '0422', first: 'Jacob', middle: 'Miles', last: 'Palmer', gender: 'Male', dob: '1993-05-23', otherId: 'OID-0422', licenseNumber: 'VN-DL-0422', licenseExpiry: '2028-08-21', nationality: 'Vietnamese', maritalStatus: 'Single', joinedDate: '2023-05-22', street1: '47 Nguyen Thi Minh Khai', street2: 'District 3', city: 'Ho Chi Minh City', state: 'Ho Chi Minh', zip: '700000', country: 'Viet Nam', homePhone: '02838261422', mobilePhone: '0901203422', workPhone: '02873000422', workEmail: 'jacob.palmer@orangebootstrap.test', otherEmail: 'jacob.miles.palmer@orangebootstrap.test', jobTitle: 'QA Engineer', jobCategory: 'Technicians', subUnit: 'Quality Assurance', location: 'Texas R&D', employmentStatus: 'Full-Time Contract' },
  ];

  const pause = ms => page.waitForTimeout(ms);

  const normalize = value =>
    String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

  const chooseOption = (options, preferredValues) => {
    const cleanOptions = options.filter(option => option && option !== 'No Records Found');
    for (const preferred of preferredValues) {
      const normalizedPreferred = normalize(preferred);
      const exact = cleanOptions.find(option => normalize(option) === normalizedPreferred);
      if (exact) return exact;
      const partial = cleanOptions.find(option => normalize(option).includes(normalizedPreferred));
      if (partial) return partial;
    }
    return '';
  };

  const waitForSavedToast = async () => {
    try {
      await page.getByText('Successfully Saved').waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore timing-only toast failures.
    }
  };

  const finishAdminCreate = async (listUrl, listPattern) => {
    try {
      await page.waitForURL(listPattern, { timeout: 5000 });
    } catch (error) {
      await pause(600);
      if (page.url().includes('/save') && (await page.locator('body').textContent()).includes('Already exists')) {
        await page.goto(listUrl, { waitUntil: 'domcontentloaded' });
        await pause(400);
        return;
      }
      throw error;
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
    }
  };

  const selectFromForm = async (form, index, preferredValues) => {
    const wrapper = form.locator('.oxd-select-wrapper').nth(index);
    await wrapper.click();
    const dropdown = page.locator('.oxd-select-dropdown').last();
    await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    const options = (await dropdown.locator('[role=option]').allTextContents()).map(text => text.trim()).filter(Boolean);
    const selected = chooseOption(options, preferredValues);
    if (!selected) {
      await page.keyboard.press('Escape').catch(() => {});
      throw new Error(`No dropdown option found for ${preferredValues.join(', ')}`);
    }
    await dropdown.locator('[role=option]').filter({ hasText: selected }).first().click();
    return selected;
  };

  const ensureJobTitle = async title => {
    await page.goto(`${baseUrl}web/index.php/admin/viewJobTitleList`, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if ((await page.getByRole('row').filter({ hasText: title.name }).count()) > 0) return;
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForURL(/saveJobTitle/, { timeout: 10000 });
    const form = page.locator('form').first();
    const textboxes = form.getByRole('textbox');
    await textboxes.nth(0).fill(title.name);
    await textboxes.nth(1).fill(title.description);
    await textboxes.nth(2).fill(title.note);
    await form.getByRole('button', { name: 'Save' }).click();
    await finishAdminCreate(`${baseUrl}web/index.php/admin/viewJobTitleList`, /viewJobTitleList/);
    await waitForSavedToast();
  };

  const ensureEmploymentStatus = async name => {
    await page.goto(`${baseUrl}web/index.php/admin/employmentStatus`, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if ((await page.getByRole('row').filter({ hasText: name }).count()) > 0) return;
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForURL(/saveEmploymentStatus/, { timeout: 10000 });
    const form = page.locator('form').first();
    await form.getByRole('textbox').fill(name);
    await form.getByRole('button', { name: 'Save' }).click();
    await finishAdminCreate(`${baseUrl}web/index.php/admin/employmentStatus`, /employmentStatus$/);
    await waitForSavedToast();
  };

  const ensureJobCategory = async name => {
    await page.goto(`${baseUrl}web/index.php/admin/jobCategory`, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if ((await page.getByRole('row').filter({ hasText: name }).count()) > 0) return;
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForURL(/saveJobCategory/, { timeout: 10000 });
    const form = page.locator('form').first();
    await form.getByRole('textbox').fill(name);
    await form.getByRole('button', { name: 'Save' }).click();
    await finishAdminCreate(`${baseUrl}web/index.php/admin/jobCategory`, /jobCategory$/);
    await waitForSavedToast();
  };

  const ensureLocation = async location => {
    await page.goto(`${baseUrl}web/index.php/admin/viewLocations`, { waitUntil: 'domcontentloaded' });
    await pause(400);
    if ((await page.getByRole('row').filter({ hasText: location.name }).count()) > 0) return;
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForURL(/saveLocation/, { timeout: 10000 });
    const form = page.locator('form').first();
    const textboxes = form.getByRole('textbox');
    await textboxes.nth(0).fill(location.name);
    await textboxes.nth(1).fill(location.city);
    await textboxes.nth(2).fill(location.state);
    await textboxes.nth(3).fill(location.zip);
    await textboxes.nth(4).fill(location.phone);
    await textboxes.nth(5).fill(location.fax);
    await textboxes.nth(6).fill(location.address);
    await textboxes.nth(7).fill(location.notes);
    await selectFromForm(form, 0, [location.country]);
    await form.getByRole('button', { name: 'Save' }).click();
    await finishAdminCreate(`${baseUrl}web/index.php/admin/viewLocations`, /viewLocations/);
    await waitForSavedToast();
  };

  const ensureSubUnit = async subUnit => {
    await page.goto(`${baseUrl}web/index.php/admin/viewCompanyStructure`, { waitUntil: 'domcontentloaded' });
    await pause(600);
    if ((await page.locator('body').textContent()).includes(subUnit.name)) return;
    const editCheckbox = page.getByRole('checkbox', { name: 'Edit' });
    if (!(await editCheckbox.isChecked())) {
      await editCheckbox.click();
      await pause(300);
    }
    await page.getByRole('button', { name: 'Add' }).click();
    const dialog = page.getByRole('dialog');
    const textboxes = dialog.getByRole('textbox');
    await textboxes.nth(0).fill(subUnit.unitId);
    await textboxes.nth(1).fill(subUnit.name);
    await textboxes.nth(2).fill(subUnit.description);
    await dialog.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
    for (let attempt = 0; attempt < 10; attempt += 1) {
      await pause(500);
      if ((await page.locator('body').textContent()).includes(subUnit.name)) {
        return;
      }
    }
    throw new Error(`Sub unit ${subUnit.name} was not visible after save`);
  };

  const updatePersonalDetails = async employee => {
    await page.goto(`${baseUrl}web/index.php/pim/viewPersonalDetails/empNumber/${employee.empNumber}`, { waitUntil: 'domcontentloaded' });
    await pause(500);
    const form = page.locator('form').first();
    const inputs = form.locator("input:not([type='file']):not([type='checkbox']):not([type='radio'])");
    await inputs.nth(0).fill(employee.first);
    await inputs.nth(1).fill(employee.middle);
    await inputs.nth(2).fill(employee.last);
    await inputs.nth(3).fill(employee.employeeId);
    await inputs.nth(4).fill(employee.otherId);
    await inputs.nth(5).fill(employee.licenseNumber);
    await inputs.nth(6).fill(employee.licenseExpiry);
    employee.actualNationality = await selectFromForm(form, 0, [employee.nationality]);
    employee.actualMaritalStatus = await selectFromForm(form, 1, [employee.maritalStatus]);
    await inputs.nth(7).fill(employee.dob);
    await form.locator('.oxd-radio-wrapper').nth(employee.gender === 'Male' ? 0 : 1).click();
    await form.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
  };

  const updateContactDetails = async employee => {
    await page.goto(`${baseUrl}web/index.php/pim/contactDetails/empNumber/${employee.empNumber}`, { waitUntil: 'domcontentloaded' });
    await pause(500);
    const form = page.locator('form').first();
    const inputs = form.locator("input:not([type='file']):not([type='checkbox']):not([type='radio'])");
    const values = [
      employee.street1,
      employee.street2,
      employee.city,
      employee.state,
      employee.zip,
      employee.homePhone,
      employee.mobilePhone,
      employee.workPhone,
      employee.workEmail,
      employee.otherEmail,
    ];
    for (let index = 0; index < values.length; index += 1) {
      await inputs.nth(index).fill(values[index]);
    }
    employee.actualCountry = await selectFromForm(form, 0, [employee.country]);
    await form.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
  };

  const updateJobDetails = async employee => {
    await page.goto(`${baseUrl}web/index.php/pim/viewJobDetails/empNumber/${employee.empNumber}`, { waitUntil: 'domcontentloaded' });
    await pause(700);
    const form = page.locator('form').first();
    const inputs = form.locator("input:not([type='file']):not([type='checkbox']):not([type='radio'])");
    await inputs.nth(0).fill(employee.joinedDate);
    employee.actualJobTitle = await selectFromForm(form, 0, [employee.jobTitle]);
    employee.actualJobCategory = await selectFromForm(form, 1, [employee.jobCategory]);
    employee.actualSubUnit = await selectFromForm(form, 2, [employee.subUnit]);
    employee.actualLocation = await selectFromForm(form, 3, [employee.location]);
    employee.actualEmploymentStatus = await selectFromForm(form, 4, [employee.employmentStatus]);
    await form.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
  };

  await ensureLoggedIn();

  for (const title of jobTitles) await ensureJobTitle(title);
  for (const status of employmentStatuses) await ensureEmploymentStatus(status);
  for (const category of jobCategories) await ensureJobCategory(category);
  for (const location of locations) await ensureLocation(location);
  for (const subUnit of subUnits) await ensureSubUnit(subUnit);

  const processed = [];
  const failed = [];

  for (const employee of employees) {
    try {
      await updatePersonalDetails(employee);
      await updateContactDetails(employee);
      await updateJobDetails(employee);
      processed.push({
        empNumber: employee.empNumber,
        employeeId: employee.employeeId,
        name: `${employee.first} ${employee.middle} ${employee.last}`.replace(/\s+/g, ' ').trim(),
        gender: employee.gender,
        dob: employee.dob,
        nationality: employee.actualNationality,
        maritalStatus: employee.actualMaritalStatus,
        joinedDate: employee.joinedDate,
        jobTitle: employee.actualJobTitle,
        jobCategory: employee.actualJobCategory,
        subUnit: employee.actualSubUnit,
        location: employee.actualLocation,
        employmentStatus: employee.actualEmploymentStatus,
        workEmail: employee.workEmail,
        otherEmail: employee.otherEmail,
        address: `${employee.street1}, ${employee.street2}, ${employee.city}, ${employee.state}, ${employee.zip}`,
      });
    } catch (error) {
      failed.push({
        empNumber: employee.empNumber,
        employeeId: employee.employeeId,
        name: `${employee.first} ${employee.middle} ${employee.last}`.replace(/\s+/g, ' ').trim(),
        message: error.message,
        url: page.url(),
      });
    }
  }

  return { processed, failed };
}
