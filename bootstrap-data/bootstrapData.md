# OrangeHRM Bootstrap Data

## Summary

- Execution date: 2026-03-29
- Target environment: `https://orangehrm-001.cec.katalon.com/`
- Target scope: `Admin` master data and `PIM` employee records
- Result: 22 employees updated successfully
- Employee ID range: `0401` to `0422`
- OrangeHRM employee number range: `4` to `25`

## Admin Data Created

- Job Titles: `16`
- Employment Statuses: `5`
- Job Categories: `5`
- Locations: `4`
- Sub Units: `5`

## Admin Seed Values

### Job Titles

- QA Lead
- Software Engineer
- QA Engineer
- Sales Representative
- HR Manager
- Finance Manager
- Software Architect
- HR Associate
- Recruiter
- DevOps Engineer
- Business Analyst
- Engineering Manager
- Finance Analyst
- Support Engineer
- UI Designer
- Project Manager

### Employment Statuses

- Full-Time Permanent
- Full-Time Contract
- Full-Time Probation
- Part-Time Internship
- Part-Time Contract

### Job Categories

- Professionals
- Technicians
- Officials and Managers
- Sales Workers
- Clerical and Office

### Sub Units

- Engineering
- Quality Assurance
- Sales & Marketing
- Human Resources
- Finance

### Locations

- HQ - CA
- Texas R&D
- New York Sales Office
- Canadian Regional HQ

## Employee Update Notes

- All 22 employee last names were changed to western surnames.
- Personal details, contact details, and job details were synchronized for all 22 employees.
- `Job Title`, `Employment Status`, `Sub Unit`, `Location`, and `Job Category` are now populated in the system.
- Work and alternate emails were updated to match the new western last names.

## Employee Map

| Employee ID | Emp # | Full Name |
| --- | --- | --- |
| 0401 | 4 | Amelia Rose Carter |
| 0402 | 5 | Ethan James Brooks |
| 0403 | 6 | Sophia Claire Bennett |
| 0404 | 7 | Lucas Ryan Sullivan |
| 0405 | 8 | Olivia Jane Hayes |
| 0406 | 9 | Noah Daniel Murphy |
| 0407 | 10 | Ava Nicole Foster |
| 0408 | 11 | Mason Cole Collins |
| 0409 | 12 | Isabella Grace Parker |
| 0410 | 13 | Liam Alexander Reed |
| 0411 | 14 | Charlotte Marie Morgan |
| 0412 | 15 | Benjamin Scott Turner |
| 0413 | 16 | Mia Lauren Lawson |
| 0414 | 17 | Henry Thomas Walker |
| 0415 | 18 | Harper Elise Price |
| 0416 | 19 | Alexander Reid Hughes |
| 0417 | 20 | Evelyn Kate Warren |
| 0418 | 21 | Daniel Cole Griffin |
| 0419 | 22 | Ella Brooke Spencer |
| 0420 | 23 | Michael Dean Russell |
| 0421 | 24 | Scarlett Paige Monroe |
| 0422 | 25 | Jacob Miles Palmer |

## Related Files

- Employee inventory: `bootstrap-data/employee.md`
- PIM search coverage: `bootstrap-data/PIM_Search_Testcases.md`
- Initial bootstrap script: `bootstrap-data/bootstrap-orangehrm.js`
- Admin and employee sync script: `bootstrap-data/update-orangehrm-admin-and-employees.js`
