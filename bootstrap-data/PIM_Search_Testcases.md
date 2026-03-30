# PIM Search Test Cases

## Preconditions

- User is logged in to OrangeHRM.
- User is on `PIM > Employee List`.
- Bootstrap employees `0401` to `0422` exist.
- Admin master data for `Job Title`, `Employment Status`, `Sub Unit`, `Job Category`, and `Location` has been created.

## Search Filter Coverage

- Employee Name
- Employee ID
- Employment Status
- Include
- Supervisor Name
- Job Title
- Sub Unit

## Test Cases

| ID | Scenario | Test Data | Steps | Expected Result |
| --- | --- | --- | --- | --- |
| PIM-SRCH-01 | Search by exact employee name | `Amelia Grace Carter` | Enter employee name from hints and click `Search` | Only Amelia record is returned |
| PIM-SRCH-02 | Search by exact employee ID | `0401` | Enter employee ID and click `Search` | Only employee `0401` is returned |
| PIM-SRCH-03 | Search by another exact employee ID | `0422` | Enter employee ID and click `Search` | Only employee `0422` is returned |
| PIM-SRCH-04 | Search by non-existing employee ID | `9999` | Enter invalid employee ID and click `Search` | No records are returned |
| PIM-SRCH-05 | Search by employee ID with spaces | ` 0403 ` | Enter value with spaces and search | Search trims input or still resolves to employee `0403` |
| PIM-SRCH-06 | Search by partial first name | `Amelia` | Type partial name, select the suggestion, search | Matching employee is returned |
| PIM-SRCH-07 | Search by partial western last name | `Parker` | Type partial last name, select suggestion, search | Isabella record is returned |
| PIM-SRCH-08 | Search by mixed-case employee name | `aMeLiA gRaCe cArTeR` | Enter mixed-case text and search | Search remains case-insensitive |
| PIM-SRCH-09 | Search with leading and trailing spaces in name | `  Amelia Grace Carter  ` | Enter spaced value and search | Spaces are ignored |
| PIM-SRCH-10 | Search by invalid characters in name field | `@@@` | Enter special characters and search | No records are returned and UI remains stable |
| PIM-SRCH-11 | Search by long unmatched string | `zzzzzzzzzzzzzzzz` | Enter long unmatched string and search | No records are returned |
| PIM-SRCH-12 | Search by script-like input | `<script>alert(1)</script>` | Enter script-like text and search | Input is treated as text only, no script runs |
| PIM-SRCH-13 | Search by SQL-like input | `' OR 1=1 --` | Enter SQL-like text and search | No injection occurs and results stay correct |
| PIM-SRCH-14 | Search by job title `QA Lead` | `QA Lead` | Select job title and search | Matching QA Lead employees are returned |
| PIM-SRCH-15 | Search by job title `Software Engineer` | `Software Engineer` | Select job title and search | Matching software engineers are returned |
| PIM-SRCH-16 | Search by job title `HR Associate` | `HR Associate` | Select job title and search | Only Charlotte Yen Morgan is returned |
| PIM-SRCH-17 | Search by employment status `Full-Time Permanent` | `Full-Time Permanent` | Select employment status and search | Only permanent employees are returned |
| PIM-SRCH-18 | Search by employment status `Full-Time Contract` | `Full-Time Contract` | Select employment status and search | Only contract employees are returned |
| PIM-SRCH-19 | Search by employment status `Part-Time Internship` | `Part-Time Internship` | Select employment status and search | Only internship employees are returned |
| PIM-SRCH-20 | Search by sub unit `Engineering` | `Engineering` | Select sub unit and search | Only engineering employees are returned |
| PIM-SRCH-21 | Search by sub unit `Quality Assurance` | `Quality Assurance` | Select sub unit and search | Only QA employees are returned |
| PIM-SRCH-22 | Search by sub unit `Human Resources` | `Human Resources` | Select sub unit and search | Only HR employees are returned |
| PIM-SRCH-23 | Search by sub unit `Finance` | `Finance` | Select sub unit and search | Only finance employees are returned |
| PIM-SRCH-24 | Search by employee name and employee ID for same employee | `Amelia Grace Carter` + `0401` | Populate both filters and search | One exact matching record is returned |
| PIM-SRCH-25 | Search by employee name and wrong employee ID | `Amelia Grace Carter` + `0402` | Populate mismatched values and search | No records are returned |
| PIM-SRCH-26 | Search by employee ID and employment status | `0401` + `Full-Time Permanent` | Populate both filters and search | One exact match is returned |
| PIM-SRCH-27 | Search by employee ID and wrong employment status | `0401` + `Part-Time Internship` | Populate both filters and search | No records are returned |
| PIM-SRCH-28 | Search by job title and sub unit with matching pair | `QA Engineer` + `Quality Assurance` | Select both and search | Matching QA engineers are returned |
| PIM-SRCH-29 | Search by job title and sub unit with mismatched pair | `QA Engineer` + `Finance` | Select both and search | No records are returned |
| PIM-SRCH-30 | Search by employment status and sub unit | `Full-Time Contract` + `Engineering` | Select both and search | Only matching employees are returned |
| PIM-SRCH-31 | Search by all filters blank | None | Click `Search` without data | Full employee list is displayed |
| PIM-SRCH-32 | Reset after entering multiple filters | Any values in all fields | Populate filters, click `Reset` | All fields return to default state |
| PIM-SRCH-33 | Search after reset | None | Click `Reset`, then `Search` | Full employee list is displayed again |
| PIM-SRCH-34 | Verify employee name auto-suggestion list | `Amelia` | Type into employee name field | Matching employee suggestions are shown |
| PIM-SRCH-35 | Verify supervisor name auto-suggestion list | Existing supervisor | Type into supervisor field | Matching supervisor suggestions are shown |
| PIM-SRCH-36 | Search without selecting a name suggestion | `Amelia` only | Type name but do not select a suggestion, then search | Behavior is consistent and documented by the app |
| PIM-SRCH-37 | Search after no-result scenario, then refine to valid input | Invalid input then `0401` | Search invalid first, then valid | Second search returns the correct record |
| PIM-SRCH-38 | Repeat same search multiple times | `0401` | Click `Search` repeatedly | Results remain stable with no stale state |
| PIM-SRCH-39 | Verify result count changes after filtering | `0401` or `Engineering` | Apply filter and inspect count | Record count matches displayed rows |
| PIM-SRCH-40 | Verify search results during pagination | Any filter with multiple rows | Apply filter and navigate pages if available | Filter remains applied across pages |
| PIM-SRCH-41 | Verify search behavior after page refresh | Any valid filter | Apply filter and refresh page | Behavior is predictable, either persisting or resetting cleanly |
| PIM-SRCH-42 | Verify search by updated western last name | `Monroe` | Search by Scarlett’s last name | Scarlett My Monroe is returned |

## Data Examples

- Exact name sample: `Amelia Grace Carter`
- Employee ID samples: `0401`, `0408`, `0414`, `0422`
- Job title samples: `QA Lead`, `Software Engineer`, `HR Associate`, `Project Manager`
- Employment status samples: `Full-Time Permanent`, `Full-Time Contract`, `Part-Time Internship`
- Sub unit samples: `Engineering`, `Quality Assurance`, `Human Resources`, `Finance`
- Western last-name samples: `Carter`, `Parker`, `Monroe`, `Palmer`
