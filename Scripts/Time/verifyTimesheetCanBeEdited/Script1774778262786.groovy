import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys

import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

/**
 * Verify Timesheet Can Be Edited
 *
 * Purpose:
 * - Log in as ESS user.
 * - Open a specific timesheet period.
 * - Add a project/activity row and enter valid hours.
 * - Save the timesheet successfully.
 * - Reopen edit mode and remove the latest row.
 */

// ------------------------------
// Test Data
// ------------------------------
String projectName = 'Internal Shared Services'
String validHours = '4:00'

// ------------------------------
// Reusable Test Objects
// ------------------------------
TestObject txtUsername = findTestObject('Page_OrangeHRM/Login_Page/input_Username')
TestObject txtPassword = findTestObject('Page_OrangeHRM/Login_Page/input_Password')

TestObject menuTime = findTestObject('Page_OrangeHRM/Navigation_Sidebar/a_Time')
TestObject iconCalendar = findTestObject('Page_OrangeHRM/Time_Page/i_oxd-icon bi-calendar oxd-date-input-icon')
TestObject yearDropdown = findTestObject('Page_OrangeHRM/Time_Page/p_2026')
TestObject optYear2026 = findTestObject('Page_OrangeHRM/Time_Page/li_2026')
TestObject monthDropdown = findTestObject('Page_OrangeHRM/Time_Page/div_March')
TestObject optMonthMarch = findTestObject('Page_OrangeHRM/Time_Page/li_March')
TestObject day9 = findTestObject('Page_OrangeHRM/Time_Page/div_9')

TestObject btnEdit = findTestObject('Page_OrangeHRM/Time_Page/button_Edit')
TestObject btnAddRow = findTestObject('Page_OrangeHRM/Time_Page/button_oxd-icon-button orangehrm-timesheet-icon')
TestObject rowProjectAdded = findTestObject('Page_OrangeHRM/Time_Page/tr_ProjectManual Functional Testing')
TestObject txtProject = findTestObject('Page_OrangeHRM/Time_Page/input_Type for hints')
TestObject optProject = findTestObject('Page_OrangeHRM/Time_Page/span_Internal Shared Services - QA Activity Cata')
TestObject ddlActivity = findTestObject('Page_OrangeHRM/Time_Page/i_oxd-icon bi-caret-down-fill oxd-select-text-ar')
TestObject optActivity = findTestObject('Page_OrangeHRM/Time_Page/span_Meeting and Coordination')

TestObject inputDayMon = findTestObject('Page_OrangeHRM/Time_Page/input_oxd-input oxd-input-active')
TestObject inputDayTue = findTestObject('Page_OrangeHRM/Time_Page/input_oxd-input oxd-input-active_1')
TestObject inputDayWed = findTestObject('Page_OrangeHRM/Time_Page/input_oxd-input oxd-input-active_2')
TestObject inputDayThu = findTestObject('Page_OrangeHRM/Time_Page/input_oxd-input oxd-input-active_3')
TestObject inputDayFri = findTestObject('Page_OrangeHRM/Time_Page/input_oxd-input oxd-input-active_4')

TestObject validationMessage = findTestObject('Page_OrangeHRM/Time_Page/span_Should Be Less Than 24 and in HH_MM or Deci')
TestObject btnSave = findTestObject('Page_OrangeHRM/Time_Page/button_Save')
TestObject btnDeleteLastRow = findTestObject('Page_OrangeHRM/Time_Page/button_oxd-icon-button orangehrm-timesheet-icon_last')

@TearDown
void tearDown() {
    WebUI.closeBrowser()
}

// ------------------------------
// Step 1: Open browser and log in
// ------------------------------
WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.AUT_URL)

WebUI.setText(txtUsername, GlobalVariable.AUT_ESS_USERNAME)
WebUI.setText(txtPassword, GlobalVariable.AUT_ESS_PASSWORD)
WebUI.sendKeys(txtPassword, Keys.chord(Keys.ENTER))

// ------------------------------
// Step 2: Open Time module
// ------------------------------
WebUI.click(menuTime)

// ------------------------------
// Step 3: Select target timesheet date
// ------------------------------
WebUI.click(iconCalendar)
WebUI.click(yearDropdown)
WebUI.click(optYear2026)
WebUI.click(monthDropdown)
WebUI.click(optMonthMarch)
WebUI.click(day9)

// ------------------------------
// Step 3: Add a new timesheet row
// ------------------------------
WebUI.click(btnEdit)
WebUI.verifyElementClickable(btnAddRow)
WebUI.click(btnAddRow)

WebUI.verifyElementVisible(rowProjectAdded)
WebUI.setText(txtProject, projectName)
WebUI.click(optProject)

WebUI.click(ddlActivity)
WebUI.click(optActivity)

// ------------------------------
// Step 4: Enter valid hours and save
// ------------------------------
WebUI.setText(inputDayMon, validHours)
WebUI.setText(inputDayTue, validHours)
WebUI.setText(inputDayWed, validHours)
WebUI.setText(inputDayThu, validHours)
WebUI.setText(inputDayFri, validHours)

WebUI.verifyElementNotPresent(validationMessage, 10)
WebUI.click(btnSave)
WebUI.verifyElementNotPresent(btnSave, 10)

// ------------------------------
// Step 5: Remove the latest timesheet row
// ------------------------------
WebUI.click(btnEdit)
WebUI.click(btnDeleteLastRow)
WebUI.click(btnSave)
WebUI.verifyElementNotPresent(btnSave, 10)