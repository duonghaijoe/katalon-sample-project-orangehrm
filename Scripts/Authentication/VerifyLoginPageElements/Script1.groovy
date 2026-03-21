/**
 * TC-A-1: Verify Login Page Elements
 *
 * Smoke test — verifies all login form UI elements are present and enabled.
 * Read-only, no data mutations. Self-contained (no Object Repository needed).
 *
 * AUT: OrangeHRM 5.x (OXD Vue components)
 * Selectors: OXD component library CSS classes
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

// --- Test ---
WebUI.openBrowser('')
WebUI.navigateToUrl(autUrl)
WebUI.maximizeWindow()

// Verify login form container is visible
WebUI.verifyElementPresent(css('.orangehrm-login-form'), 15)

// Verify username input exists and is enabled
WebUI.verifyElementPresent(css('input[name="username"]'), 10)
WebUI.verifyElementClickable(css('input[name="username"]'))

// Verify password input exists and is enabled
WebUI.verifyElementPresent(css('input[name="password"]'), 10)
WebUI.verifyElementClickable(css('input[name="password"]'))

// Verify login button exists and is clickable
WebUI.verifyElementPresent(css('button[type="submit"]'), 10)
WebUI.verifyElementClickable(css('button[type="submit"]'))

// Verify OrangeHRM branding/logo is displayed
WebUI.verifyElementPresent(css('.orangehrm-login-branding img'), 10)

// Verify the login slot container (card) is visible
WebUI.verifyElementPresent(css('.orangehrm-login-slot'), 10)

WebUI.closeBrowser()
