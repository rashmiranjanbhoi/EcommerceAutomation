# EcommerceAutomation
# Cypress version : 13.14.2

# Prerequisites to configure before running EcommerceAutomation tests:

- Make sure Node js,JDK and ZPA are installed in your local machine.

# Steps for testing the code

- Note: The below steps are required only when you pull or fetch the code from the repository to your local machine.


- Run the below command to get dependencies in your cypress project folder.

  ```sh
  npm install
  npm i --force  (if npm install not works)
  ```

  ### Use below command to run all test files:

  ```sh
    npx cypress run
  ```
#### To run a single test files use the below command: For example:

  ```sh
    npx cypress run --e2e --spec "cypress\e2e\UI\ecommercesUI.spec.cy.js"
  ```

 ### Use below command to run test files in web browser: For example:

  ```sh
    npx cypress open
  ```