# jupiterTestAutomationSolution
This repository contains a Test Automation framework:
- based on Cypress.io
- developed with fluent page object model
- uses json files to store test data
- uses json files to store page locators
- uses mochawesome-reporter & JUnit reporter for report generation
- supports both css selectors and xpath locators

The code base is developed to cover the major flows of the Jupiter web application.


## Setting up & Executing the code
Setting up:
1. Clone the project your computer
2. Open project in a preferred IDE
3. Run the command "npm install" on terminal to setup the dependencies

How to Run the code:
- Run the code "npx cypress open" to open the Cypress GUI app to run via Cypress Runner OR
- Run the code "npx cypress run" or "npm run test" to run the test cases using command line

Note: When using Cypress.io the reports for the execution will only be generated when running through command line(second option mentioned above)


## Execution Reports
Reports of the execution can be found at the folder: cypress/reports
- Execution report is presented as a html file
- Report includes snapshots of the failed test cases
- JUnit reports in XML format can be found under cypress/reports/junit

Note: Apart from the html report, you can find the execution of the test cases recorded as a video under the folder: cypress/videos
