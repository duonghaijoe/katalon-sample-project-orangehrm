/**
 * TC-A-5: Verify Dashboard Widgets
 *
 * Login and verify dashboard loads with all expected widgets visible.
 * Read-only, no data mutations. Self-contained (no Object Repository needed).
 * Selectors verified via Playwright against OrangeHRM OS 5.7.
 */
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.configuration.RunConfiguration

TestObject css(String selector) {
	TestObject to = new TestObject(selector)
	to.addProperty('css', ConditionType.EQUALS, selector)
	return to
}

String autUrl = RunConfiguration.getExecutionProperties().get('AUT_URL') ?: 'https://orangehrm-001.cec.katalon.com/web/index.php/auth/login'
String adminUser = RunConfiguration.getExecutionProperties().get('AUT_ADMIN_USERNAME') ?: 'Admin'
String adminPass = RunConfiguration.getExecutionProperties().get('AUT_ADMIN_PASSWORD') ?: 'Katalon@123'

// Login
WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)
WebUI.maximizeWindow()
WebUI.setText(css('input[name="username"]'), adminUser)
WebUI.setText(css('input[name="password"]'), adminPass)
WebUI.click(css('button[type="submit"]'))
WebUI.waitForPageLoad(15)

WebUI.verifyMatch(WebUI.getUrl(), '.*/dashboard.*', true)
WebUI.verifyElementPresent(css('h6.oxd-topbar-header-breadcrumb-module'), 10)
WebUI.verifyElementPresent(css('.orangehrm-dashboard-grid'), 10)
WebUI.verifyElementPresent(css('.oxd-sheet--rounded.oxd-sheet--white'), 10)
WebUI.verifyElementPresent(css('.oxd-grid-item:nth-child(1)'), 10)
WebUI.verifyElementPresent(css('.oxd-grid-item:nth-child(2)'), 10)
WebUI.verifyElementPresent(css('.oxd-grid-item:nth-child(3)'), 10)

WebUI.closeBrowser()
