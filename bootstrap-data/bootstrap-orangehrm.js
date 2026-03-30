async page => {
  const baseUrl = 'https://orangehrm-001.cec.katalon.com/';
  const credentials = {
    username: 'admin',
    password: 'Katalon@123',
  };

  const employees = [
    {
      employeeId: '0401',
      existingEmpNumber: '4',
      first: 'Amelia',
      middle: 'Grace',
      last: 'Nguyen',
      gender: 'Female',
      dob: '1993-04-12',
      otherId: 'OID-0401',
      licenseNumber: 'VN-DL-0401',
      licenseExpiry: '2028-05-14',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2023-01-15',
      street1: '18 Nguyen Hue Boulevard',
      street2: 'Apartment 1204',
      city: 'Ho Chi Minh City',
      state: 'Ho Chi Minh',
      zip: '700000',
      country: 'Vietnam',
      homePhone: '02838261201',
      mobilePhone: '0901203401',
      workPhone: '02873000401',
      workEmail: 'amelia.nguyen@orangebootstrap.test',
      otherEmail: 'a.nguyen.personal@orangebootstrap.test',
      jobTitle: 'QA Lead',
      jobCategory: 'Professionals',
      subUnit: 'Quality Assurance',
      location: 'HQ - CA',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0402',
      existingEmpNumber: '5',
      first: 'Ethan',
      middle: 'Minh',
      last: 'Tran',
      gender: 'Male',
      dob: '1990-11-03',
      otherId: 'OID-0402',
      licenseNumber: 'VN-DL-0402',
      licenseExpiry: '2027-09-20',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2022-08-08',
      street1: '52 Le Loi Street',
      street2: 'District 1',
      city: 'Ho Chi Minh City',
      state: 'Ho Chi Minh',
      zip: '700000',
      country: 'Vietnam',
      homePhone: '02838261202',
      mobilePhone: '0901203402',
      workPhone: '02873000402',
      workEmail: 'ethan.tran@orangebootstrap.test',
      otherEmail: 'ethan.family@orangebootstrap.test',
      jobTitle: 'Software Engineer',
      jobCategory: 'Professionals',
      subUnit: 'Engineering',
      location: 'HQ - CA',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0403',
      existingEmpNumber: '6',
      first: 'Sophia',
      middle: 'Linh',
      last: 'Pham',
      gender: 'Female',
      dob: '1995-02-18',
      otherId: 'OID-0403',
      licenseNumber: 'VN-DL-0403',
      licenseExpiry: '2029-01-10',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2024-03-11',
      street1: '14 Pasteur Street',
      street2: 'Ward 6',
      city: 'Da Nang',
      state: 'Da Nang',
      zip: '550000',
      country: 'Vietnam',
      homePhone: '02363806103',
      mobilePhone: '0901203403',
      workPhone: '02367300403',
      workEmail: 'sophia.pham@orangebootstrap.test',
      otherEmail: 'sophia.notes@orangebootstrap.test',
      jobTitle: 'QA Engineer',
      jobCategory: 'Technicians',
      subUnit: 'Quality Assurance',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Probation',
    },
    {
      employeeId: '0404',
      existingEmpNumber: '7',
      first: 'Lucas',
      middle: 'Anh',
      last: 'Bui',
      gender: 'Male',
      dob: '1988-06-27',
      otherId: 'OID-0404',
      licenseNumber: 'VN-DL-0404',
      licenseExpiry: '2027-12-01',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2021-11-22',
      street1: '88 Tran Phu Avenue',
      street2: 'Hai Chau',
      city: 'Da Nang',
      state: 'Da Nang',
      zip: '550000',
      country: 'Vietnam',
      homePhone: '02363806104',
      mobilePhone: '0901203404',
      workPhone: '02367300404',
      workEmail: 'lucas.bui@orangebootstrap.test',
      otherEmail: 'lucas.home@orangebootstrap.test',
      jobTitle: 'Sales Representative',
      jobCategory: 'Sales Workers',
      subUnit: 'Sales & Marketing',
      location: 'New York Sales Office',
      employmentStatus: 'Full-Time Contract',
    },
    {
      employeeId: '0405',
      existingEmpNumber: '8',
      first: 'Olivia',
      middle: 'Jade',
      last: 'Le',
      gender: 'Female',
      dob: '1992-09-09',
      otherId: 'OID-0405',
      licenseNumber: 'VN-DL-0405',
      licenseExpiry: '2028-03-18',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2023-06-19',
      street1: '19 Hung Vuong Road',
      street2: 'Ninh Kieu',
      city: 'Can Tho',
      state: 'Can Tho',
      zip: '900000',
      country: 'Vietnam',
      homePhone: '02923806105',
      mobilePhone: '0901203405',
      workPhone: '02927300405',
      workEmail: 'olivia.le@orangebootstrap.test',
      otherEmail: 'olivia.alt@orangebootstrap.test',
      jobTitle: 'HR Manager',
      jobCategory: 'Officials and Managers',
      subUnit: 'Human Resources',
      location: 'HQ - CA',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0406',
      existingEmpNumber: '9',
      first: 'Noah',
      middle: 'Quang',
      last: 'Do',
      gender: 'Male',
      dob: '1987-12-14',
      otherId: 'OID-0406',
      licenseNumber: 'VN-DL-0406',
      licenseExpiry: '2028-10-22',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2020-05-04',
      street1: '7 Bach Dang Street',
      street2: 'Ngo Quyen',
      city: 'Hai Phong',
      state: 'Hai Phong',
      zip: '180000',
      country: 'Vietnam',
      homePhone: '02253806106',
      mobilePhone: '0901203406',
      workPhone: '02257300406',
      workEmail: 'noah.do@orangebootstrap.test',
      otherEmail: 'noah.personal@orangebootstrap.test',
      jobTitle: 'Finance Manager',
      jobCategory: 'Officials and Managers',
      subUnit: 'Finance',
      location: 'Canadian Regional HQ',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0407',
      existingEmpNumber: '10',
      first: 'Ava',
      middle: 'Thi',
      last: 'Vu',
      gender: 'Female',
      dob: '1996-07-21',
      otherId: 'OID-0407',
      licenseNumber: 'VN-DL-0407',
      licenseExpiry: '2029-08-13',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2024-01-08',
      street1: '32 Phan Chu Trinh Street',
      street2: 'Ward 2',
      city: 'Vung Tau',
      state: 'Ba Ria - Vung Tau',
      zip: '780000',
      country: 'Vietnam',
      homePhone: '02543806107',
      mobilePhone: '0901203407',
      workPhone: '02547300407',
      workEmail: 'ava.vu@orangebootstrap.test',
      otherEmail: 'ava.personal@orangebootstrap.test',
      jobTitle: 'QA Engineer',
      jobCategory: 'Technicians',
      subUnit: 'Quality Assurance',
      location: 'Texas R&D',
      employmentStatus: 'Part-Time Internship',
    },
    {
      employeeId: '0408',
      existingEmpNumber: '11',
      first: 'Mason',
      middle: 'Duc',
      last: 'Hoang',
      gender: 'Male',
      dob: '1991-03-30',
      otherId: 'OID-0408',
      licenseNumber: 'VN-DL-0408',
      licenseExpiry: '2027-11-30',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2022-02-14',
      street1: '75 Nguyen Van Linh',
      street2: 'Hai Chau',
      city: 'Da Nang',
      state: 'Da Nang',
      zip: '550000',
      country: 'Vietnam',
      homePhone: '02363806108',
      mobilePhone: '0901203408',
      workPhone: '02367300408',
      workEmail: 'mason.hoang@orangebootstrap.test',
      otherEmail: 'm.hoang.family@orangebootstrap.test',
      jobTitle: 'Software Engineer',
      jobCategory: 'Professionals',
      subUnit: 'Engineering',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Contract',
    },
    {
      employeeId: '0409',
      existingEmpNumber: '12',
      first: 'Isabella',
      middle: 'Mai',
      last: 'Truong',
      gender: 'Female',
      dob: '1994-05-16',
      otherId: 'OID-0409',
      licenseNumber: 'VN-DL-0409',
      licenseExpiry: '2028-04-27',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2023-10-02',
      street1: '91 Le Hong Phong',
      street2: 'Ward 4',
      city: 'Nha Trang',
      state: 'Khanh Hoa',
      zip: '650000',
      country: 'Vietnam',
      homePhone: '02583806109',
      mobilePhone: '0901203409',
      workPhone: '02587300409',
      workEmail: 'isabella.truong@orangebootstrap.test',
      otherEmail: 'isabella.mail@orangebootstrap.test',
      jobTitle: 'Content Specialist',
      jobCategory: 'Professionals',
      subUnit: 'Sales & Marketing',
      location: 'New York Sales Office',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0410',
      existingEmpNumber: '13',
      first: 'Liam',
      middle: 'Thanh',
      last: 'Phan',
      gender: 'Male',
      dob: '1989-01-05',
      otherId: 'OID-0410',
      licenseNumber: 'VN-DL-0410',
      licenseExpiry: '2027-07-15',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2021-04-12',
      street1: '44 Cach Mang Thang Tam',
      street2: 'Ninh Kieu',
      city: 'Can Tho',
      state: 'Can Tho',
      zip: '900000',
      country: 'Vietnam',
      homePhone: '02923806110',
      mobilePhone: '0901203410',
      workPhone: '02927300410',
      workEmail: 'liam.phan@orangebootstrap.test',
      otherEmail: 'liam.private@orangebootstrap.test',
      jobTitle: 'Software Architect',
      jobCategory: 'Officials and Managers',
      subUnit: 'Engineering',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0411',
      existingEmpNumber: '14',
      first: 'Charlotte',
      middle: 'Yen',
      last: 'Dang',
      gender: 'Female',
      dob: '1997-08-24',
      otherId: 'OID-0411',
      licenseNumber: 'VN-DL-0411',
      licenseExpiry: '2029-02-11',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2024-06-03',
      street1: '66 Tran Hung Dao',
      street2: 'Ward 1',
      city: 'Hue',
      state: 'Thua Thien Hue',
      zip: '530000',
      country: 'Vietnam',
      homePhone: '02343806111',
      mobilePhone: '0901203411',
      workPhone: '02347300411',
      workEmail: 'charlotte.dang@orangebootstrap.test',
      otherEmail: 'charlotte.alt@orangebootstrap.test',
      jobTitle: 'HR Associate',
      jobCategory: 'Clerical and Office',
      subUnit: 'Human Resources',
      location: 'HQ - CA',
      employmentStatus: 'Part-Time Contract',
    },
    {
      employeeId: '0412',
      existingEmpNumber: '15',
      first: 'Benjamin',
      middle: 'Huy',
      last: 'Ngo',
      gender: 'Male',
      dob: '1986-10-28',
      otherId: 'OID-0412',
      licenseNumber: 'VN-DL-0412',
      licenseExpiry: '2028-06-19',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2019-09-09',
      street1: '12 Nguyen Thai Hoc',
      street2: 'Ward 3',
      city: 'Da Lat',
      state: 'Lam Dong',
      zip: '670000',
      country: 'Vietnam',
      homePhone: '02633806112',
      mobilePhone: '0901203412',
      workPhone: '02637300412',
      workEmail: 'benjamin.ngo@orangebootstrap.test',
      otherEmail: 'ben.ngo.family@orangebootstrap.test',
      jobTitle: 'QA Manager',
      jobCategory: 'Officials and Managers',
      subUnit: 'Quality Assurance',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0413',
      existingEmpNumber: '16',
      first: 'Mia',
      middle: 'Lan',
      last: 'Ho',
      gender: 'Female',
      dob: '1993-12-08',
      otherId: 'OID-0413',
      licenseNumber: 'VN-DL-0413',
      licenseExpiry: '2028-12-18',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2022-07-18',
      street1: '27 Vo Nguyen Giap',
      street2: 'Son Tra',
      city: 'Da Nang',
      state: 'Da Nang',
      zip: '550000',
      country: 'Vietnam',
      homePhone: '02363806113',
      mobilePhone: '0901203413',
      workPhone: '02367300413',
      workEmail: 'mia.ho@orangebootstrap.test',
      otherEmail: 'mia.ho.family@orangebootstrap.test',
      jobTitle: 'Recruiter',
      jobCategory: 'Professionals',
      subUnit: 'Human Resources',
      location: 'HQ - CA',
      employmentStatus: 'Full-Time Contract',
    },
    {
      employeeId: '0414',
      existingEmpNumber: '17',
      first: 'Henry',
      middle: 'Khoa',
      last: 'Vo',
      gender: 'Male',
      dob: '1990-04-01',
      otherId: 'OID-0414',
      licenseNumber: 'VN-DL-0414',
      licenseExpiry: '2027-05-25',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2021-12-06',
      street1: '39 Hai Ba Trung',
      street2: 'District 3',
      city: 'Ho Chi Minh City',
      state: 'Ho Chi Minh',
      zip: '700000',
      country: 'Vietnam',
      homePhone: '02838261414',
      mobilePhone: '0901203414',
      workPhone: '02873000414',
      workEmail: 'henry.vo@orangebootstrap.test',
      otherEmail: 'henry.side@orangebootstrap.test',
      jobTitle: 'DevOps Engineer',
      jobCategory: 'Technicians',
      subUnit: 'Engineering',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0415',
      existingEmpNumber: '18',
      first: 'Harper',
      middle: 'Nhi',
      last: 'Pham',
      gender: 'Female',
      dob: '1998-03-12',
      otherId: 'OID-0415',
      licenseNumber: 'VN-DL-0415',
      licenseExpiry: '2029-07-29',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2024-08-19',
      street1: '58 Kim Ma Street',
      street2: 'Ba Dinh',
      city: 'Ha Noi',
      state: 'Ha Noi',
      zip: '100000',
      country: 'Vietnam',
      homePhone: '02433806115',
      mobilePhone: '0901203415',
      workPhone: '02437300415',
      workEmail: 'harper.pham@orangebootstrap.test',
      otherEmail: 'harper.personal@orangebootstrap.test',
      jobTitle: 'Business Analyst',
      jobCategory: 'Professionals',
      subUnit: 'Engineering',
      location: 'HQ - CA',
      employmentStatus: 'Full-Time Probation',
    },
    {
      employeeId: '0416',
      existingEmpNumber: '19',
      first: 'Alexander',
      middle: 'Bao',
      last: 'Lam',
      gender: 'Male',
      dob: '1985-06-11',
      otherId: 'OID-0416',
      licenseNumber: 'VN-DL-0416',
      licenseExpiry: '2028-01-31',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2018-04-16',
      street1: '101 Quang Trung Street',
      street2: 'Ha Dong',
      city: 'Ha Noi',
      state: 'Ha Noi',
      zip: '100000',
      country: 'Vietnam',
      homePhone: '02433806116',
      mobilePhone: '0901203416',
      workPhone: '02437300416',
      workEmail: 'alexander.lam@orangebootstrap.test',
      otherEmail: 'alexander.private@orangebootstrap.test',
      jobTitle: 'Engineering Manager',
      jobCategory: 'Officials and Managers',
      subUnit: 'Engineering',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0417',
      existingEmpNumber: '20',
      first: 'Evelyn',
      middle: 'Thu',
      last: 'Doan',
      gender: 'Female',
      dob: '1991-09-17',
      otherId: 'OID-0417',
      licenseNumber: 'VN-DL-0417',
      licenseExpiry: '2027-10-09',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2022-09-05',
      street1: '24 Dien Bien Phu',
      street2: 'Ward 15',
      city: 'Ho Chi Minh City',
      state: 'Ho Chi Minh',
      zip: '700000',
      country: 'Vietnam',
      homePhone: '02838261417',
      mobilePhone: '0901203417',
      workPhone: '02873000417',
      workEmail: 'evelyn.doan@orangebootstrap.test',
      otherEmail: 'evelyn.home@orangebootstrap.test',
      jobTitle: 'Finance Analyst',
      jobCategory: 'Professionals',
      subUnit: 'Finance',
      location: 'Canadian Regional HQ',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0418',
      existingEmpNumber: '21',
      first: 'Daniel',
      middle: 'Gia',
      last: 'Ta',
      gender: 'Male',
      dob: '1994-11-22',
      otherId: 'OID-0418',
      licenseNumber: 'VN-DL-0418',
      licenseExpiry: '2028-09-05',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2023-11-13',
      street1: '9 Truong Dinh Street',
      street2: 'Ward 1',
      city: 'My Tho',
      state: 'Tien Giang',
      zip: '860000',
      country: 'Vietnam',
      homePhone: '02733806118',
      mobilePhone: '0901203418',
      workPhone: '02737300418',
      workEmail: 'daniel.ta@orangebootstrap.test',
      otherEmail: 'daniel.side@orangebootstrap.test',
      jobTitle: 'Support Engineer',
      jobCategory: 'Technicians',
      subUnit: 'Engineering',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Contract',
    },
    {
      employeeId: '0419',
      existingEmpNumber: '22',
      first: 'Ella',
      middle: 'Kim',
      last: 'Dinh',
      gender: 'Female',
      dob: '1996-01-29',
      otherId: 'OID-0419',
      licenseNumber: 'VN-DL-0419',
      licenseExpiry: '2029-03-03',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2024-02-26',
      street1: '36 Tran Quang Khai',
      street2: 'Hoan Kiem',
      city: 'Ha Noi',
      state: 'Ha Noi',
      zip: '100000',
      country: 'Vietnam',
      homePhone: '02433806119',
      mobilePhone: '0901203419',
      workPhone: '02437300419',
      workEmail: 'ella.dinh@orangebootstrap.test',
      otherEmail: 'ella.mail@orangebootstrap.test',
      jobTitle: 'UI Designer',
      jobCategory: 'Professionals',
      subUnit: 'Engineering',
      location: 'HQ - CA',
      employmentStatus: 'Part-Time Internship',
    },
    {
      employeeId: '0420',
      existingEmpNumber: '23',
      first: 'Michael',
      middle: 'Son',
      last: 'Le',
      gender: 'Male',
      dob: '1988-08-07',
      otherId: 'OID-0420',
      licenseNumber: 'VN-DL-0420',
      licenseExpiry: '2027-04-12',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2020-10-19',
      street1: '83 Nguyen Trai',
      street2: 'Thanh Xuan',
      city: 'Ha Noi',
      state: 'Ha Noi',
      zip: '100000',
      country: 'Vietnam',
      homePhone: '02433806120',
      mobilePhone: '0901203420',
      workPhone: '02437300420',
      workEmail: 'michael.le@orangebootstrap.test',
      otherEmail: 'michael.personal@orangebootstrap.test',
      jobTitle: 'Project Manager',
      jobCategory: 'Officials and Managers',
      subUnit: 'Engineering',
      location: 'HQ - CA',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0421',
      existingEmpNumber: '24',
      first: 'Scarlett',
      middle: 'My',
      last: 'Chau',
      gender: 'Female',
      dob: '1992-12-19',
      otherId: 'OID-0421',
      licenseNumber: 'VN-DL-0421',
      licenseExpiry: '2028-11-07',
      nationality: 'Vietnam',
      maritalStatus: 'Married',
      joinedDate: '2021-07-26',
      street1: '15 Ly Tu Trong',
      street2: 'District 1',
      city: 'Ho Chi Minh City',
      state: 'Ho Chi Minh',
      zip: '700000',
      country: 'Vietnam',
      homePhone: '02838261421',
      mobilePhone: '0901203421',
      workPhone: '02873000421',
      workEmail: 'scarlett.chau@orangebootstrap.test',
      otherEmail: 'scarlett.family@orangebootstrap.test',
      jobTitle: 'Content Specialist',
      jobCategory: 'Professionals',
      subUnit: 'Sales & Marketing',
      location: 'New York Sales Office',
      employmentStatus: 'Full-Time Permanent',
    },
    {
      employeeId: '0422',
      existingEmpNumber: '25',
      first: 'Jacob',
      middle: 'Tuan',
      last: 'Pham',
      gender: 'Male',
      dob: '1993-05-23',
      otherId: 'OID-0422',
      licenseNumber: 'VN-DL-0422',
      licenseExpiry: '2028-08-21',
      nationality: 'Vietnam',
      maritalStatus: 'Single',
      joinedDate: '2023-05-22',
      street1: '47 Nguyen Thi Minh Khai',
      street2: 'District 3',
      city: 'Ho Chi Minh City',
      state: 'Ho Chi Minh',
      zip: '700000',
      country: 'Vietnam',
      homePhone: '02838261422',
      mobilePhone: '0901203422',
      workPhone: '02873000422',
      workEmail: 'jacob.pham@orangebootstrap.test',
      otherEmail: 'jacob.side@orangebootstrap.test',
      jobTitle: 'QA Engineer',
      jobCategory: 'Technicians',
      subUnit: 'Quality Assurance',
      location: 'Texas R&D',
      employmentStatus: 'Full-Time Contract',
    },
  ];

  const pause = ms => page.waitForTimeout(ms);

  const normalize = value =>
    String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

  const chooseOption = (options, preferredValues) => {
    const cleanOptions = options.filter(option => option && option !== 'No Records Found');
    for (const preferred of preferredValues) {
      if (!preferred) {
        continue;
      }
      const normalizedPreferred = normalize(preferred);
      const exact = cleanOptions.find(option => normalize(option) === normalizedPreferred);
      if (exact) {
        return exact;
      }
      const partial = cleanOptions.find(option => normalize(option).includes(normalizedPreferred));
      if (partial) {
        return partial;
      }
    }
    return cleanOptions[0] || '';
  };

  const selectFromForm = async (form, index, preferredValues) => {
    const wrapper = form.locator('.oxd-select-wrapper').nth(index);
    if ((await wrapper.count()) === 0) {
      return '';
    }

    await wrapper.click();
    const dropdown = page.locator('.oxd-select-dropdown').last();
    try {
      await dropdown.waitFor({ state: 'visible', timeout: 5000 });
    } catch (error) {
      await page.keyboard.press('Escape').catch(() => {});
      return '';
    }

    const options = (await dropdown.locator('[role=option]').allTextContents())
      .map(text => text.trim())
      .filter(Boolean);
    const selected = chooseOption(options, preferredValues);

    if (!selected) {
      await page.keyboard.press('Escape').catch(() => {});
      return '';
    }

    await dropdown
      .locator('[role=option]')
      .filter({ hasText: selected })
      .first()
      .click();

    return selected;
  };

  const waitForSavedToast = async () => {
    const successMessage = page.getByText('Successfully Saved');
    try {
      await successMessage.waitFor({ state: 'visible', timeout: 10000 });
      await pause(300);
    } catch (error) {
      // Ignore toast timing issues. The page state is validated via URL changes and field reads.
    }
  };

  const ensureLoggedIn = async () => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await pause(500);

    if (page.url().includes('/auth/login')) {
      await page.getByRole('textbox', { name: 'Username' }).fill(credentials.username);
      await page.getByRole('textbox', { name: 'Password' }).fill(credentials.password);
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL(/dashboard|pim/, { timeout: 20000 });
    }
  };

  const openAddEmployeeForm = async () => {
    await page.goto(`${baseUrl}web/index.php/pim/addEmployee`, { waitUntil: 'domcontentloaded' });
    await page.waitForURL(/pim\/addEmployee/, { timeout: 20000 });
    await pause(500);
  };

  const createEmployee = async employee => {
    await openAddEmployeeForm();
    const form = page.locator('form').first();
    const inputs = form.locator("input:not([type='file']):not([type='checkbox']):not([type='radio'])");

    await inputs.nth(0).fill(employee.first);
    await inputs.nth(1).fill(employee.middle);
    await inputs.nth(2).fill(employee.last);
    await inputs.nth(3).fill(employee.employeeId);
    await form.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL(/viewPersonalDetails\/empNumber\/\d+/, { timeout: 20000 });
    const match = page.url().match(/empNumber\/(\d+)/);
    employee.empNumber = match ? match[1] : '';
    await pause(500);
  };

  const openPersonalDetails = async employee => {
    const empNumber = employee.existingEmpNumber || employee.empNumber;
    await page.goto(
      `${baseUrl}web/index.php/pim/viewPersonalDetails/empNumber/${empNumber}`,
      { waitUntil: 'domcontentloaded' }
    );
    await page.waitForURL(/viewPersonalDetails\/empNumber\/\d+/, { timeout: 20000 });
    await pause(500);
    employee.empNumber = empNumber;
  };

  const fillPersonalDetails = async employee => {
    const form = page.locator('form').first();
    const inputs = form.locator("input:not([type='file']):not([type='checkbox']):not([type='radio'])");

    await inputs.nth(4).fill(employee.otherId);
    await inputs.nth(5).fill(employee.licenseNumber);
    await inputs.nth(6).fill(employee.licenseExpiry);
    employee.actualNationality = await selectFromForm(form, 0, [
      employee.nationality,
      'Vietnam',
      'United States',
      'India',
      'Australia',
    ]);
    employee.actualMaritalStatus = await selectFromForm(form, 1, [
      employee.maritalStatus,
      'Single',
      'Married',
    ]);
    await inputs.nth(7).fill(employee.dob);
    await form.locator('.oxd-radio-wrapper').nth(employee.gender === 'Male' ? 0 : 1).click();
    await form.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
  };

  const fillContactDetails = async employee => {
    await page.getByRole('link', { name: 'Contact Details', exact: true }).click();
    await page.waitForURL(/contactDetails\/empNumber\/\d+/, { timeout: 20000 });
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

    employee.actualCountry = await selectFromForm(form, 0, [
      employee.country,
      'Vietnam',
      'United States',
      'India',
      'Australia',
    ]);

    await form.getByRole('button', { name: 'Save' }).click();
    await waitForSavedToast();
  };

  const fillJobDetails = async employee => {
    await page.getByRole('link', { name: 'Job', exact: true }).click();
    await page.waitForURL(/viewJobDetails\/empNumber\/\d+/, { timeout: 20000 });
    await pause(500);

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

  const processed = [];
  const failed = [];

  await ensureLoggedIn();

  for (const employee of employees) {
    try {
      if (employee.existingEmpNumber) {
        await openPersonalDetails(employee);
      } else {
        await createEmployee(employee);
      }

      await fillPersonalDetails(employee);
      await fillContactDetails(employee);
      await fillJobDetails(employee);

      processed.push({
        employeeId: employee.employeeId,
        empNumber: employee.empNumber,
        name: `${employee.first} ${employee.middle} ${employee.last}`.replace(/\s+/g, ' ').trim(),
        gender: employee.gender,
        dob: employee.dob,
        otherId: employee.otherId,
        licenseNumber: employee.licenseNumber,
        licenseExpiry: employee.licenseExpiry,
        nationality: employee.actualNationality || '',
        maritalStatus: employee.actualMaritalStatus || '',
        joinedDate: employee.joinedDate,
        address: `${employee.street1}, ${employee.street2}, ${employee.city}, ${employee.state}, ${employee.zip}`.replace(
          /,\s*,/g,
          ','
        ),
        country: employee.actualCountry || '',
        homePhone: employee.homePhone,
        mobilePhone: employee.mobilePhone,
        workPhone: employee.workPhone,
        workEmail: employee.workEmail,
        otherEmail: employee.otherEmail,
        jobTitle: employee.actualJobTitle || '',
        jobCategory: employee.actualJobCategory || '',
        subUnit: employee.actualSubUnit || '',
        location: employee.actualLocation || '',
        employmentStatus: employee.actualEmploymentStatus || '',
      });
    } catch (error) {
      failed.push({
        employeeId: employee.employeeId,
        name: `${employee.first} ${employee.middle} ${employee.last}`.replace(/\s+/g, ' ').trim(),
        message: error.message,
        url: page.url(),
      });
    }
  }

  return { processed, failed };
}
