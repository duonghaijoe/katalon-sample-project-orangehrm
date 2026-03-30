import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys

import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

/**
 * Verify Time Module Timesheet Details
 *
 * Purpose:
 * - Log in as ESS user.
 * - Open the Time module.
 * - Select a target date from the timesheet calendar.
 * - Verify timesheet details are displayed correctly.
 */

// ------------------------------
// Reusable Test Objects
// ------------------------------
final TestObject txtUsername = findTestObject('Page_OrangeHRM/Login_Page/input_Username')
final TestObject txtPassword = findTestObject('Page_OrangeHRM/Login_Page/input_Password')

final TestObject menuTime = findTestObject('Page_OrangeHRM/Navigation_Sidebar/a_Time')
final TestObject iconCalendar = findTestObject('Page_OrangeHRM/Time_Page/i_oxd-icon bi-calendar oxd-date-input-icon')
final TestObject yearDropdown = findTestObject('Page_OrangeHRM/Time_Page/p_2026')
final TestObject optYear2026 = findTestObject('Page_OrangeHRM/Time_Page/li_2026')
final TestObject monthDropdown = findTestObject('Page_OrangeHRM/Time_Page/div_March')
final TestObject optMonthMarch = findTestObject('Page_OrangeHRM/Time_Page/li_March')
final TestObject day16 = findTestObject('Page_OrangeHRM/Time_Page/div_16')

final TestObject timesheetHeader = findTestObject('Page_OrangeHRM/Time_Page/div_ApprovedService Cec2026-03-29')
final TestObject totalHours = findTestObject('Page_OrangeHRM/Time_Page/td_35_00')
final TestObject approvedStatus = findTestObject('Page_OrangeHRM/Time_Page/p_Status_ Approved')
final TestObject activityRow = findTestObject('Page_OrangeHRM/Time_Page/td_Internal Shared Services - QA Activity Catalo')
final TestObject selectedDayHeader = findTestObject('Page_OrangeHRM/Time_Page/th_16Mon')

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
WebUI.click(day16)

// ------------------------------
// Step 4: Verify timesheet information
// ------------------------------
WebUI.verifyElementVisible(timesheetHeader)
WebUI.verifyElementVisible(totalHours)
WebUI.verifyElementVisible(approvedStatus)
WebUI.verifyElementVisible(activityRow)
WebUI.verifyElementVisible(selectedDayHeader)