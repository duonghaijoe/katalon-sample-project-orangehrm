/**
 * TC-A-4: Verify Leave Module Access
 *
 * Navigate to Leave module and verify leave pages are accessible.
 * Read-only, no data mutations. Self-contained (no Object Repository needed).
 * Selectors verified via Playwright against OrangeHRM OS 5.7.
 *
 * Note: Admin role lands on Leave/Configure page. We also navigate to
 * Leave List directly via URL to verify the list view.
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

TestObject xpath(String expr) {
	TestObject to = new TestObject(expr)
	to.addProperty('xpath', ConditionType.EQUALS, expr)
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

// Navigate to Leave via sidebar
WebUI.click(xpath('//a[contains(@class,"oxd-main-menu-item")]//span[text()="Leave"]/..'))
WebUI.waitForPageLoad(10)

// Verify Leave breadcrumb
WebUI.verifyMatch(WebUI.getUrl(), '.*/leave.*', true)
WebUI.verifyElementPresent(css('h6.oxd-topbar-header-breadcrumb-module'), 10)

// Leave sidebar item is active
WebUI.verifyElementPresent(css('a.oxd-main-menu-item.active'), 10)

// Main content area loaded
WebUI.verifyElementPresent(css('.oxd-layout-context'), 10)

// Navigate to Leave List directly (read-only, no mutations)
String leaveListUrl = autUrl.replace('/auth/login', '/leave/viewLeaveList')
WebUI.navigateToUrl(leaveListUrl)
WebUI.waitForPageLoad(10)

// Leave List page has a form (filter area)
WebUI.verifyElementPresent(css('.oxd-form'), 10)

WebUI.closeBrowser()
