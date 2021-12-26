package com.jotform.form.cucumber.steps;

import com.jotform.form.pages.DatePage;
import com.jotform.form.pages.Jetform;
import com.jotform.form.pages.SecurityPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JetFormSteps {
    @Given("^I am On homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Next Button$")
    public void iClickOnNextButton() {
        new Jetform().clickonNextButton();
    }

    @And("^I enter firstname$")
    public void iEnterFirstname() {
        new Jetform().inputfirsname("Krishna");
    }

    @And("^I enter lastname$")
    public void iEnterLastname() {
        new Jetform().inputlastname("Patel");
    }

    @And("^I can Download File$")
    public void iCanDownloadFile() {
        new Jetform().clickOnDownLoadFile("C:\\Users\\Krishna\\Desktop\\JetForm.txt");
    }

    @And("^I Write On My signature$")
    public void iWriteOnMySignature() throws InterruptedException {
        new Jetform().writeOnsignature();


    }

    @And("^I click On Sign Button$")
    public void iClickOnSignButton() {
        new Jetform().clickOnSignBtn();
    }

    @And("^I enter Date$")
    public void iEnterDate(String date) throws InterruptedException {
        new DatePage().selectDate(date);
    }

    @And("^I Select On DropDown Button$")
    public void iSelectOnDropDownButton(String question) {
        new SecurityPage().selectFromDropDown(question);
    }

    @And("^I Select Pet Name$")
    public void iSelectPetName(String answer) {
        new SecurityPage().enterSecurityAnswer(answer);
    }

    @And("^I enter Pet name$")
    public void iEnterPetName() {
        new SecurityPage().enterSecurityAnswer("");
    }

    @And("^I click On Submit Button$")
    public void iClickOnSubmitButton() {
        new Jetform().clickOnSubmitBtn();

    }

    @Then("^verifies that the submission has been received \"([^\"]*)\"$")
    public void verifiesThatTheSubmissionHasBeenReceived(String message)  {
        new Jetform().verifyThatSubmissionHasBeenReceived(message);

    }

    @And("^I click on next Button$")
    public void iClickOnnextButton() {
        new Jetform().clickOnnxtbtn();

    }

    @And("^I click on next button$")
    public void iClickOnnextbutton() {
        new DatePage().clickOnNext();
    }

    @And("^selects the security question \"([^\"]*)\" from the dropdown$")
    public void selectsTheSecurityQuestionFromTheDropdown(String question)  {
      new SecurityPage().selectFromDropDown(question);
    }

    @And("^answers the security question \"([^\"]*)\"$")
    public void answersTheSecurityQuestion(String answer) {
        new SecurityPage().enterSecurityAnswer(answer);
    }

    @And("^I Click on next button$")
    public void iClickonNextButton() {
        new Jetform().ClickOnNextBtn();
    }

    @And("^I click On Last Button$")
    public void iClickOnLastButton() {
        new Jetform().clickOnLastNextBtn();
    }
}
