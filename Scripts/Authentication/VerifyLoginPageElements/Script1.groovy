/**
 * TC-A-1: Verify Login Page Elements
 *
 * Smoke test — verifies all login form UI elements are present and enabled.
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

WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)
WebUI.maximizeWindow()

WebUI.verifyElementPresent(css('.orangehrm-login-form'), 15)
WebUI.verifyElementPresent(css('input[name="username"]'), 10)
WebUI.verifyElementClickable(css('input[name="username"]'))
WebUI.verifyElementPresent(css('input[name="password"]'), 10)
WebUI.verifyElementClickable(css('input[name="password"]'))
WebUI.verifyElementPresent(css('button[type="submit"]'), 10)
WebUI.verifyElementClickable(css('button[type="submit"]'))
WebUI.verifyElementPresent(css('.orangehrm-login-branding img'), 10)
WebUI.verifyElementPresent(css('.orangehrm-login-slot'), 10)

WebUI.closeBrowser()
