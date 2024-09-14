$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginMfg.feature");
formatter.feature({
  "name": "User Login to MFG portal",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Harikayedla",
        "Harikayedla@12345"
      ]
    },
    {
      "cells": [
        "nagenderkalakota",
        "Bangaram@31"
      ]
    },
    {
      "cells": [
        "psrinadh96@gmail.com",
        "Halewood@1"
      ]
    },
    {
      "cells": [
        "Adelemckeown",
        "Halewood06"
      ]
    },
    {
      "cells": [
        "KevinBrown",
        "Halewood06"
      ]
    },
    {
      "cells": [
        "dharmiknagavarapu",
        "Liverpool@88"
      ]
    },
    {
      "cells": [
        "Saignanadeep6@gmail.com",
        "Nani@12345"
      ]
    },
    {
      "cells": [
        "subhashinisubbharaj",
        "Halewood06"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"Harikayedla\" and password \"Harikayedla@12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"nagenderkalakota\" and password \"Bangaram@31\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"psrinadh96@gmail.com\" and password \"Halewood@1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"Adelemckeown\" and password \"Halewood06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"KevinBrown\" and password \"Halewood06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"dharmiknagavarapu\" and password \"Liverpool@88\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"Saignanadeep6@gmail.com\" and password \"Nani@12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is able to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"subhashinisubbharaj\" and password \"Halewood06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_enter_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on the login page with course completion as \"100% complete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_on_the_login_page_with_course_completion_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to logout",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefiniton.LoginMfg.i_should_be_able_to_logout()"
});
formatter.result({
  "status": "passed"
});
});