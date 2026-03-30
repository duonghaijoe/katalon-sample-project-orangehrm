package com.orangehrm.common

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

class UiActions {

    @Keyword
    def waitAndSetText(TestObject to, String text, int timeout = 15, FailureHandling flowControl = FailureHandling.STOP_ON_FAILURE) {
        WebUI.waitForElementVisible(to, timeout, flowControl)
        WebUI.setText(to, text, flowControl)
    }

    @Keyword
    def waitAndClick(TestObject to, int timeout = 15, FailureHandling flowControl = FailureHandling.STOP_ON_FAILURE) {
        WebUI.waitForElementClickable(to, timeout, flowControl)
        WebUI.click(to, flowControl)
    }
}