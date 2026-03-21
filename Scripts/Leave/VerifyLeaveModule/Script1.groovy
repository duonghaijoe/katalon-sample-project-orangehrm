/**
 * TC-A-4: Verify Leave Module Access
 *
 * Navigate to Leave module and verify leave list page is accessible.
 * Read-only, no data mutations. Self-contained (no Object Repository needed).
 *
 * AUT: OrangeHRM 5.x (OXD Vue components)
 */
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.configuration.RunConfiguration

// --- Inline TestObject factories ---
TestObject css(String selector) {
	TestObject to = new TestObject(selector)
	to.addProperty('css', ConditionType.EQUALS, selector)
	return to
}

TestObject xpath(String expr) {
	TestObject to = new TestObject(expr)
	to.addProperty('xpath', ConditionType.EQUALS, expr)
	return to
}

// --- Config ---
String autUrl = RunConfiguration.getExecutionProperties().get('AUT_URL') ?: 'https://orangehrm-001.cec.katalon.com/web/index.php/auth/login'
String adminUser = RunConfiguration.getExecutionProperties().get('AUT_ADMIN_USERNAME') ?: 'Admin'
String adminPass = RunConfiguration.getExecutionProperties().get('AUT_ADMIN_PASSWORD') ?: 'Katalon@123'

// --- Login ---
WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)
WebUI.maximizeWindow()
WebUI.setText(css('input[name="username"]'), adminUser)
WebUI.setText(css('input[name="password"]'), adminPass)
WebUI.click(css('button[type="submit"]'))
WebUI.waitForPageLoad(15)

// --- Navigate to Leave ---
WebUI.click(xpath('//a[contains(@class,"oxd-main-menu-item")]//span[text()="Leave"]/..'))
WebUI.waitForPageLoad(10)

// Verify Leave page loaded (URL contains /leave)
WebUI.verifyMatch(WebUI.getUrl(), '.*/leave.*', true)

// Verify breadcrumb shows Leave
WebUI.verifyElementPresent(css('h6.oxd-topbar-header-breadcrumb-module'), 10)

// Verify the leave content area is visible (table filter + table)
WebUI.verifyElementPresent(css('.oxd-table-filter'), 10)

// Verify leave records table is present
WebUI.verifyElementPresent(css('.oxd-table'), 10)

// Verify topbar sub-navigation exists (Leave List, Assign Leave, etc.)
WebUI.verifyElementPresent(css('.oxd-topbar-body-nav'), 10)

WebUI.closeBrowser()
