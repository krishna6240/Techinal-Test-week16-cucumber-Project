$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/jetform.feature");
formatter.feature({
  "line": 1,
  "name": "Jetform Test",
  "description": "\r\nAs user I want to submit form into jetform website",
  "id": "jetform-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4792978000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to page sucessfully",
  "description": "",
  "id": "jetform-test;user-should-navigate-to-page-sucessfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am On homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter firstname",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Next Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can Download File",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on next Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Write On My signature",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "selects the security question \"Favourite pet\u0027s name\" from the dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "answers the security question \"Puppy\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click On Last Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click On Submit Button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "verifies that the submission has been received \"Your submission has been received.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "JetFormSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 82292800,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iEnterFirstname()"
});
formatter.result({
  "duration": 116311500,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iEnterLastname()"
});
formatter.result({
  "duration": 63344500,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 59075000,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iCanDownloadFile()"
});
formatter.result({
  "duration": 60690800,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iClickOnnextButton()"
});
formatter.result({
  "duration": 65157900,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iWriteOnMySignature()"
});
formatter.result({
  "duration": 13121874600,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iClickOnnextbutton()"
});
formatter.result({
  "duration": 77159000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Favourite pet\u0027s name",
      "offset": 31
    }
  ],
  "location": "JetFormSteps.selectsTheSecurityQuestionFromTheDropdown(String)"
});
formatter.result({
  "duration": 96147200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Puppy",
      "offset": 31
    }
  ],
  "location": "JetFormSteps.answersTheSecurityQuestion(String)"
});
formatter.result({
  "duration": 63973900,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iClickonNextButton()"
});
formatter.result({
  "duration": 45411600,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iClickOnLastButton()"
});
formatter.result({
  "duration": 47163900,
  "status": "passed"
});
formatter.match({
  "location": "JetFormSteps.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 47998100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your submission has been received.",
      "offset": 48
    }
  ],
  "location": "JetFormSteps.verifiesThatTheSubmissionHasBeenReceived(String)"
});
formatter.result({
  "duration": 1387229800,
  "status": "passed"
});
formatter.after({
  "duration": 755208900,
  "status": "passed"
});
});