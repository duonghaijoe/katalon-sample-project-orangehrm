/**
 * TC-A-5: Verify Dashboard Widgets
 *
 * Login and verify dashboard loads with all expected widgets visible.
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

// --- Login ---
WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)
WebUI.maximizeWindow()
WebUI.setText(css('input[name="username"]'), adminUser)
WebUI.setText(css('input[name="password"]'), adminPass)
WebUI.click(css('button[type="submit"]'))
WebUI.waitForPageLoad(15)

// Verify we are on the Dashboard
WebUI.verifyMatch(WebUI.getUrl(), '.*/dashboard.*', true)

// Dashboard breadcrumb shows "Dashboard"
WebUI.verifyElementPresent(css('h6.oxd-topbar-header-breadcrumb-module'), 10)

// Dashboard grid container is visible
WebUI.verifyElementPresent(css('.orangehrm-dashboard-grid'), 10)

// Verify dashboard widget cards are present (OXD sheet components)
WebUI.verifyElementPresent(css('.oxd-sheet--rounded.oxd-sheet--white'), 10)

// Verify at least 3 grid items (widgets) are displayed
WebUI.verifyElementPresent(css('.oxd-grid-item:nth-child(1)'), 10)
WebUI.verifyElementPresent(css('.oxd-grid-item:nth-child(2)'), 10)
WebUI.verifyElementPresent(css('.oxd-grid-item:nth-child(3)'), 10)

WebUI.closeBrowser()
