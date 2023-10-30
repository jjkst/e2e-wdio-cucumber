Feature: Registration and Login

  Scenario: As a new user i want to register in parabank

    Given Navigate to parabank home page
    And Click on Register
    When Fill all the required information and click on Submit
    Then New user should be registered successfully saying Your account was created successfully. You are now logged in.

  Scenario Outline: As a new user, I can log into the parabank

    Given Navigate to parabank home page
    And Logout if I already logged in
    When I login with <username> and <password>
    Then I should see message saying <message>

    Examples:
      | username | password  | message                                             |
      | tmember  | tpassword | success                                             |
      | foobar   | barfoo    | An internal error has occurred and has been logged. |
