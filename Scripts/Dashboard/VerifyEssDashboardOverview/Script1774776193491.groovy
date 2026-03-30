import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys

import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

/**
 * Verify Dashboard Widgets Visibility
 *
 * Purpose:
 * - Log in as ESS user.
 * - Verify key dashboard widgets and sections are visible.
 * - Keep the test read-only with no data mutation.
 */


// ------------------------------
// Reusable Test Objects
// ------------------------------
final TestObject txtUsername = findTestObject('Page_OrangeHRM/Login_Page/input_Username')
final TestObject txtPassword = findTestObject('Page_OrangeHRM/Login_Page/input_Password')

final TestObject panelTimeAtWork = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Time at WorkPunched OutPunched Out_ Today at')
final TestObject panelMyActions = findTestObject('Page_OrangeHRM/Dashboard_Page/div_My ActionsNo Pending Actions to Perform')
final TestObject panelQuickLaunch = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Quick LaunchApply LeaveMy LeaveMy Timesheet')
final TestObject employeeOnLeaveCard = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Olivia Hayes0405')
final TestObject panelTimeAtWorkBody = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Time at WorkPunched OutPunched Out_ Today at_1')
final TestObject panelBuzzLatestPosts = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Buzz Latest PostsService Cec2026-03-29 12_35')
final TestObject panelEmployeesOnLeaveToday = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Employees on Leave TodayOlivia Hayes0405')
final TestObject quickLaunchApplyLeave = findTestObject('Page_OrangeHRM/Dashboard_Page/div_Apply Leave')

// ------------------------------
// Step 1: Open browser and log in
// ------------------------------
WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.AUT_URL)

WebUI.setText(txtUsername, GlobalVariable.AUT_ESS_USERNAME)
WebUI.setText(txtPassword, GlobalVariable.AUT_ESS_PASSWORD)
WebUI.sendKeys(txtPassword, Keys.chord(Keys.ENTER))

// ------------------------------
// Step 2: Verify dashboard main widgets
// ------------------------------
WebUI.verifyElementVisible(panelTimeAtWork)
WebUI.verifyElementVisible(panelMyActions)
WebUI.verifyElementVisible(panelQuickLaunch)

// ------------------------------
// Step 3: Verify employee and leave-related widgets
// ------------------------------
WebUI.verifyElementVisible(employeeOnLeaveCard)
WebUI.verifyElementVisible(panelEmployeesOnLeaveToday)
WebUI.verifyElementVisible(quickLaunchApplyLeave)

// ------------------------------
// Step 4: Verify additional dashboard sections
// ------------------------------
WebUI.verifyElementVisible(panelTimeAtWorkBody)
WebUI.verifyElementVisible(panelBuzzLatestPosts)

// ------------------------------
// Teardown: Close Browser
// ------------------------------
@TearDown
def tearDown() {
	WebUI.closeBrowser()
}
