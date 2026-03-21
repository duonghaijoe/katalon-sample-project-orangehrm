/**
 * TC-A-2: Verify Successful Login Flow
 *
 * Login with valid admin credentials and verify dashboard loads correctly.
 * Read-only, no data mutations. Self-contained (no Object Repository needed).
 *
 * AUT: OrangeHRM 5.x (OXD Vue components)
 */
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.configuration.RunConfiguration

// --- Inline TestObject factory ---
TestObject css(String selector) {
	TestObject to = new TestObject(selector)
	to.addProperty('css', ConditionType.EQUALS, selector)
	return to
}

// --- Config ---
String autUrl = RunConfiguration.getExecutionProperties().get('AUT_URL') ?: 'https://orangehrm-001.cec.katalon.com/web/index.php/auth/login'
String adminUser = RunConfiguration.getExecutionProperties().get('AUT_ADMIN_USERNAME') ?: 'Admin'
String adminPass = RunConfiguration.getExecutionProperties().get('AUT_ADMIN_PASSWORD') ?: 'Katalon@123'

// --- Test ---
WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)
WebUI.maximizeWindow()

// Enter valid credentials and submit
WebUI.setText(css('input[name="username"]'), adminUser)
WebUI.setText(css('input[name="password"]'), adminPass)
WebUI.click(css('button[type="submit"]'))

// Wait for dashboard page to load
WebUI.waitForPageLoad(15)
WebUI.verifyMatch(WebUI.getUrl(), '.*/dashboard.*', true)

// Dashboard breadcrumb shows "Dashboard"
WebUI.verifyElementPresent(css('h6.oxd-topbar-header-breadcrumb-module'), 10)

// Sidebar navigation menu is visible
WebUI.verifyElementPresent(css('.oxd-sidepanel'), 10)
WebUI.verifyElementPresent(css('.oxd-main-menu'), 10)

// User area in topbar is visible (shows logged-in user)
WebUI.verifyElementPresent(css('.oxd-topbar-header-userarea'), 10)

WebUI.closeBrowser()
