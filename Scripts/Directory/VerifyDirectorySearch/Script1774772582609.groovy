import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import org.openqa.selenium.Keys

import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

// ------------------------------
// Reusable Test Objects
// ------------------------------
final def txtUsername = findTestObject('Page_OrangeHRM/Login_Page/input_Username')
final def txtPassword = findTestObject('Page_OrangeHRM/Login_Page/input_Password')
final def btnLogin = findTestObject('Page_OrangeHRM/Login_Page/button_Login')
final def lnkDirectory = findTestObject('Page_OrangeHRM/Navigation_Sidebar/a_Directory')

final def txtEmployeeName = findTestObject('Page_OrangeHRM/Directory/input_Type for hints')
final def suggestionSophia = findTestObject('Page_OrangeHRM/Directory/div_Sophia Claire Bennett')
final def btnSearch = findTestObject('Page_OrangeHRM/Directory/button_Search')
final def btnReset = findTestObject('Page_OrangeHRM/Directory/button_Reset')
final def searchResultCard = findTestObject('Page_OrangeHRM/Directory/div_Sophia Claire Bennett QA EngineerQuality Ass')

final def drpJobTitle = findTestObject('Page_OrangeHRM/Directory/i_oxd-icon bi-caret-down-fill oxd-select-text-ar')
final def optEngineeringManager = findTestObject('Page_OrangeHRM/Directory/div_Engineering Manager')
final def drpLocation = findTestObject('Page_OrangeHRM/Directory/div_Select')
final def optNewYorkSalesOffice = findTestObject('Page_OrangeHRM/Directory/span_New York Sales Office')
final def optTexasRD = findTestObject('Page_OrangeHRM/Directory/div_Texas RD')
final def resultNewYorkSalesOffice = findTestObject('Page_OrangeHRM/Directory/div_New York Sales Office')

// ------------------------------
// Step 1: Open browser and log in
// ------------------------------
WebUI.openBrowser('')
WebUI.navigateToUrl(GlobalVariable.AUT_URL)

WebUI.setText(txtUsername, GlobalVariable.AUT_ESS_USERNAME)
WebUI.setText(txtPassword, GlobalVariable.AUT_ESS_PASSWORD)
WebUI.sendKeys(txtPassword, Keys.chord(Keys.ENTER))

// ------------------------------
// Step 2: Navigate to Directory
// ------------------------------
WebUI.click(lnkDirectory)

// ------------------------------
// Step 3: Search by employee name
// ------------------------------
WebUI.setText(txtEmployeeName, 'Sophia')
WebUI.waitForElementClickable(suggestionSophia, 10)
WebUI.click(suggestionSophia)
WebUI.click(btnSearch)

WebUI.verifyElementVisible(searchResultCard)

// ------------------------------
// Step 4: Reset search form
// ------------------------------
WebUI.click(btnReset)

// ------------------------------
// Step 5: Search by job title and location
// ------------------------------
WebUI.click(drpJobTitle)
WebUI.click(optEngineeringManager)

WebUI.click(drpLocation)
WebUI.click(optNewYorkSalesOffice)

WebUI.click(btnSearch)
WebUI.verifyElementVisible(resultNewYorkSalesOffice)

// Optional additional location selection from original script
WebUI.click(drpLocation)
WebUI.click(optTexasRD)
WebUI.click(btnSearch)
WebUI.verifyElementVisible(searchResultCard)

// ------------------------------
// Teardown: Close Browser
// ------------------------------
@TearDown
def tearDown() {
	WebUI.closeBrowser()
}
