import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys

import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

/**
 * Verify Submit New Leave
 *
 * Purpose:
 * - Log in as ESS user.
 * - Submit a new leave request.
 * - Open My Leave and verify the submitted leave entry is displayed.
 * - Cancel the submitted leave request.
 */

// ------------------------------
// Test Data
// ------------------------------
String autUrl = GlobalVariable.AUT_URL
String essUsername = GlobalVariable.AUT_ESS_USERNAME
String essPassword = GlobalVariable.AUT_ESS_PASSWORD
// ------------------------------
// Reusable Test Objects
// ------------------------------
final TestObject txtUsername = findTestObject('Page_OrangeHRM/Leave_Page/input_Username')
final TestObject txtPassword = findTestObject('Page_OrangeHRM/Leave_Page/input_Password')
final TestObject menuLeave = findTestObject('Page_OrangeHRM/Navigation_Sidebar/a_Leave')
final TestObject tabApply = findTestObject('Page_OrangeHRM/Leave_Page/li_Apply')
final TestObject ddlLeaveType = findTestObject('Page_OrangeHRM/Leave_Page/div_Select')
final TestObject optAnnualLeave = findTestObject('Page_OrangeHRM/Leave_Page/div_Annual Leave')
final TestObject iconCalendar = findTestObject('Page_OrangeHRM/Leave_Page/i_oxd-icon bi-calendar oxd-date-input-icon')
final TestObject day18 = findTestObject('Page_OrangeHRM/Leave_Page/div_18')
final TestObject btnApply = findTestObject('Page_OrangeHRM/Leave_Page/button_Apply')
final TestObject tabMyLeave = findTestObject('Page_OrangeHRM/Leave_Page/li_My Leave')
final TestObject leaveRecord = findTestObject('Page_OrangeHRM/Leave_Page/div_2026-03-18Jacob Miles PalmerAnnual Leave56.0')
final TestObject btnCancel = findTestObject('Page_OrangeHRM/Leave_Page/button_Cancel')

@TearDown
void tearDown() {
    WebUI.closeBrowser()
}

// ------------------------------
// Step 1: Open browser and log in
// ------------------------------
WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)

WebUI.setText(txtUsername, essUsername)
WebUI.setText(txtPassword, essPassword)
WebUI.sendKeys(txtPassword, Keys.chord(Keys.ENTER))

// ------------------------------
// Step 2: Open Leave module
// ------------------------------
WebUI.click(menuLeave)

// ------------------------------
// Step 3: Submit a new leave request
// ------------------------------
WebUI.click(tabApply)
WebUI.click(ddlLeaveType)
WebUI.click(optAnnualLeave)
WebUI.click(iconCalendar)
WebUI.click(day18)
WebUI.click(btnApply)

// ------------------------------
// Step 4: Open My Leave and verify submitted request
// ------------------------------
WebUI.click(tabMyLeave)
WebUI.click(leaveRecord)
WebUI.verifyElementVisible(leaveRecord)

// ------------------------------
// Step 5: Cancel the leave request
// ------------------------------
WebUI.verifyElementClickable(btnCancel)
WebUI.click(btnCancel)
