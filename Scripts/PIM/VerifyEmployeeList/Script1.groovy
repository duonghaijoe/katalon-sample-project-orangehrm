/**
 * TC-A-3: Verify PIM Employee List
 *
 * Navigate to PIM module and verify employee list table displays correctly.
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

// Navigate to PIM via sidebar
WebUI.click(xpath('//a[contains(@class,"oxd-main-menu-item")]//span[text()="PIM"]/..'))
WebUI.waitForPageLoad(10)

WebUI.verifyMatch(WebUI.getUrl(), '.*/pim.*', true)
WebUI.verifyElementPresent(css('h6.oxd-topbar-header-breadcrumb-module'), 10)
WebUI.verifyElementPresent(css('.oxd-table'), 10)
WebUI.verifyElementPresent(css('.oxd-table-header'), 10)
WebUI.verifyElementPresent(css('.oxd-table-header-cell'), 5)
WebUI.verifyElementPresent(css('.oxd-table-body .oxd-table-row'), 10)

WebUI.closeBrowser()
