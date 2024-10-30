## Types of testing

**Unit testing**: **Developers** test individual functions and components for correctness. 

**Integration testing**: **Developers** should ensure that integrated components function together seamlessly. This includes testing interactions between the database, server, and client-side application.

**Regression Testing**: Ensure that new code changes do not adversely affect existing functionality. This includes automated tests that run with each build, done by **Developers**.

**Acceptance**: Manual tests conducted by **Product Designers** to validate user workflows against business requirements. 


## Testing Process
**Pre-Merge Testing**: **Developers** perform unit and integration tests on feature branches before code is merged to the main branch.

**Post-Merge Testing**: After merging, the P**roject Manager** conducts performance and load testing in the staging environment.

**Acceptance Testing**: **Product designers** manually test the application in a staging environment that mirrors production.

## Test Environments
**Local Development**: **Developers** will perform unit and integration testing on their local machines.

**Staging Environment**: **Developers** will complete all post-merge testing, including acceptance, performance, and load testing, will occur here. This environment mirrors production.

**Supported Platforms**: **Project Manager** and **Designer** will test on the latest versions of Chrome, Safari, and other platforms. Mobile testing will be done on the latest iOS and Android devices.


## Failure protocol
**Bug Report**: Add an issue to Github to report bugs. **Everyone** in the team should respond to this. 

**Bug Tracking**: Use Github issues to track and manage defects. The **Project Manager** will triage reported issues and assign them based on priority and impact.

**Fix Validation**: **Project Manager** assigned Developers fix the issues. Once a bug is fixed, **Developers** retest in the development environment, then in staging before the fix is merged into production. 


## Acceptance Testing Script

### Navigation Bar

Test Case 1:

Context: On any page of the application.

Action: Verify the presence of the navigation bar.

Expected Outcome: A navigation bar with links to the homepage and About Us page is consistently present.

Requirement Reference: CF1a, CF1b



### About Us Page

Test Case 2:

Context: User navigates to the About Us page.

Action: User views the page content.

Expected Outcome: The page includes the organization name, the mission statement, a problem introduction, and site purpose.

Requirement Reference: CF2a, CF2b, CF2c, CF2d



### Home Page Interaction

Test Case 3:

Context: User arrives at the homepage.

Action: User views the homepage.

Expected Outcome: Homepage displays with a hero image and a visible ‘calculate meal plan’ button.

Requirement Reference: HP1a, HP1b



### Meal Planner Interaction

Test Case 4:

Context: User clicks the ‘calculate plan button’ on the homepage.

Action: User is taken to the meal plan input screen.

Expected Outcome: Screen allows entry of budget and displays a dropdown menu with dietary options including Vegetarian, Low Fat, Egg Free, Vegan, and Dairy Free.

Requirement Reference: HP2a, HP2b, HP2c1, HP2c2, HP2c3, HP2c4, HP2c5, HP2d



### User Input and Validation

Test Case 5:

Context: User enters various inputs into the budget field and selects dietary plans.

Action: Enter a series of invalid inputs including alphabets, zero, empty field, and no dietary plan selected.

Expected Outcome: Appropriate error messages are displayed for each invalid input scenario.

Requirement Reference: MP1a to MP1g



### Meal Plan Generation and Item Interaction

Test Case 6:

Context: Valid budget and dietary plan are entered.

Action: User clicks 'generate recipes'.

Expected Outcome: Meal plan is generated within budget, displaying recommended ingredients with prices, and allows for adjustments via a back button.

Requirement Reference: MP2a, MP2b, MP3a, MP3b, MP3c



### Item Deletion

Test Case 7:

Context: Generated meal plan screen with listed items.

Action: User clicks the delete button next to an item and confirms the deletion.

Expected Outcome: Item is removed from the meal plan, and an error message is displayed if no items can be generated.

Requirement Reference: MP5a to MP5d



### Search and Add Products

Test Case 8:

Context: On the meal plan generation screen.

Action: User uses the search bar to find new products, exceeding budget constraints.

Expected Outcome: Search results are shown, budget adjustments are prompted, and products can be added to the meal plan.

Requirement Reference: MP6a to MP6g



### Plan Naming and Export

Test Case 9:

Context: On the meal plan creation screen.

Action: User names the plan and attempts to download it as a PDF.

Expected Outcome: Validation of plan name length, generation of a PDF that includes a date stamp and cost, and a confirmation message upon successful download.

Requirement Reference: MP7a to MP7e, MP8a to MP8e



### Return Home Functionality

Test Case 10:

Context: After creating a plan.

Action: User clicks the ‘return home’ button.

Expected Outcome: User is redirected to the homepage to create a new plan.

Requirement Reference: MP8f, MP8g



### Security and Accessibility

Test Case 11:

Context: Throughout the application usage.

Action: Assess application compliance with security protocols and accessibility standards.

Expected Outcome: All user data is securely handled, and the app is accessible per WCAG 2.1 Level AA.

Requirement Reference: SR1a, SR1b, AR1a, AR1b



### User Interface Compatibility

Test Case 12:

Context: Accessing the application on various devices and browsers.

Action: Use the application across different mobile and desktop browsers.

Expected Outcome: The interface is responsive and functions correctly on all tested platforms.

Requirement Reference: UI1a
