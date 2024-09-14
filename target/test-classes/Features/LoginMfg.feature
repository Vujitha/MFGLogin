Feature: User Login to MFG portal

  Scenario Outline: Verify user is able to login using valid credentials
    Given I am on the login page
    When I enter username "<username>" and password "<password>"
    And I click on sign in button
    Then I should be on the login page with course completion as "100% complete"
    And I should be able to logout

    Examples:
      | username                | password        |
      | Harikayedla             | Harikayedla@12345 |
			| nagenderkalakota        | Bangaram@31     |
      | psrinadh96@gmail.com    | Halewood@1      |
      | Adelemckeown            | Halewood06      |
      | KevinBrown              | Halewood06      |
      | dharmiknagavarapu       | Liverpool@88    |
      | Saignanadeep6@gmail.com | Nani@12345      |
      | subhashinisubbharaj     | Halewood06      |