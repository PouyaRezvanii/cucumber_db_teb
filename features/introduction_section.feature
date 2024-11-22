@introductionSection
Feature: Introduction Section on Landing Page

  As a new visitor,
  I want to see a brief introduction that explains the website’s goal to help diabetic patients with resources and recommendations

  Scenario: Display introductory section on landing page
    Given I am a new visitor on the landing page
    When I open the website
    Then I should see an introductory section that briefly explains the purpose and offerings of the website
