Feature: Jetform Test

  As user I want to submit form into jetform website

  @Smoke
  Scenario: User should navigate to page sucessfully
    Given I am On homepage
    When I enter firstname
    And I enter lastname
    And I click on Next Button
    And I can Download File
    And I click on next Button
    And I Write On My signature
    And I click on next button
    And selects the security question "Favourite pet's name" from the dropdown
    And answers the security question "Puppy"
    And I Click on next button
    And I click On Last Button
    And I click On Submit Button
    Then verifies that the submission has been received "Your submission has been received."
