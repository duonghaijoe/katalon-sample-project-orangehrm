<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description>Automated smoke tests for PIM, Leave, and Dashboard modules</description>
   <name>Smoke_EmployeeAndLeave</name>
   <tag>smoke,pim,leave,dashboard</tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <executionProfileName>default</executionProfileName>
   <testSuiteGuid>ts-4-automated-emp-leave</testSuiteGuid>
   <testCaseLink>
      <guid>tc-a-3-verify-employee-list</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/PIM/VerifyEmployeeList</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>tc-a-4-verify-leave-module</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Leave/VerifyLeaveModule</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>tc-a-5-verify-dashboard-widgets</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Dashboard/VerifyDashboardWidgets</testCaseId>
   </testCaseLink>
</TestSuiteEntity>
