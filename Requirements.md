# Functional Requirements


**Common Features Requirements**


Navigation Bar

    CF1a: All pages must feature a navigation bar with a link to the homepage.
    CF1b: The navigation bar must also include a link to the About Us page.


About Us Page

    CF2a: The About Us page must include the organization name.
    CF2b: The page must include the Better Foods mission statement.
    CF2c: The system must present a text section that introduces the problem the site is addressing.
    CF2d: The page must include an introduction to the site, explaining its purpose.


**Home Page Requirements**

Home Page Interaction

    HP1a: Homepage will display upon user arrival, featuring a hero image that introduces the website.
    HP1b: A button to ‘calculate meal plan’ must be visible on the homepage. 


Meal Planner Interaction

    HP2a: Clicking the “calculate plan button” must open a screen where the user can enter their budget. 
    HP2b: Clicking the “calculate plan button” must also display a dropdown menu for selecting a dietary plan.

    HP2c1: The dropdown menu must include the ‘Vegetarian’ option.
    HP2c2:  The dropdown menu must include the ‘Low Fat’ option.
    HP2c3:  The dropdown menu must include the ‘Egg Free’ option.
    HP2c4:  The dropdown menu must include the ‘Vegan’ option.
    HP2c5:  The dropdown menu must include the ‘Dairy Free’ option

    HP2d: A 'back' button must be available on the meal plan input screen to return users to the homepage


**Meal Plan Generation Requirements**

User Input and Validation

    MP1a: The system must accept only numerical values for the budget in a designated field.
    MP1b: An error message must display if the budget input is zero.
    MP1c: An error message must display if the budget input is non-numeric.
    MP1d: An error message must display if the budget field is left blank.
    MP1e: An error message must display if no dietary plan is selected when the user selects the button to generate recipes.
    MP1f: Ensure that all required inputs, such as budget for the week and dietary preferences for the individual, are validated. 
    MP1g: If inputs are incorrect, prompt users to correct any incorrect inputs through front-end validation.


Data Processing

    MP2a: The system must generate recipe suggestions for the week that match user dietary preferences and fits within the specified budget. 
    MP2b: The total cost of the generated meal plan must stay within the weekly budget.  


Recipe Generator

    MP3a: The system must display the generated recipes with a list of recommended ingredients.
    MP3b: Each product in the recipe plan must display its total package price.
    MP3c: A back button must be present on the generated meal plan screen, so users can return to the input screen and adjust their budget or dietary preferences.


Item Deletion

    MP5a: There must be a delete button next to each item in the meal plan.
    MP5b: When the user selects the delete button, the system must display a confirmation prompt.
    MP5c: If the user confirms the deletion, the item must be removed from the meal plan.
    MP5d: If unable to generate a meal plan due to unavailable dietary items, the system must display an error message.


Search Feature in Meal Plan Generation

    MP6a: The meal planner must include a search bar to discover new products by name.
    MP6b: Users must be able to enter product names into the search bar to initiate search for new products.
    MP6c: If no results are found during a search, an error message must be displayed explaining no products matched the search criteria.
    MP6d: If matching products are found, the search results must be displayed below the search bar. 
    MP6e: If search results exceed budget constraints, the system requests cheaper alternatives
    MP6f: Each matching product must have a button that can add them to the meal plan.
    MP6g: Upon selecting the ‘add to meal’ button, the selected product should be added to the user’s current meal plan.
    MP4h: Users must be able to return from the search results page back to their previously generated meal plan.


Plan Naming

    MP7a: There must be an input field where users can name their plan on the meal plan creation screen.
    MP7b: A button to confirm the name of the plan must be present on the screen.
    MP7c: When the ‘name of plan’ button is clicked, the system must check the length of the name entered in the input field.
    MP7d: The name of the meal plan must be at least 2 characters long.
    MP7e: If a plan name under 2 characters is entered, an error message must be displayed.


Download and Export Options

    MP8a: A download PDF button must be present on the final meal plan page.
    MP8b: Clicking the download PDF button must trigger the generation of a PDF file containing the user’s current meal plan.
    MP8c: The PDF download must include a date stamp.
    MP8d: The PDF download must include the cost of the meal plan.
    MP8e: Upon successful generation of the PDF, the system must provide a confirmation message to the user.
    MP8f: After creating a plan, a button to ‘return home’ must be available to encourage users to create new plans. 
    MP8g: The return home button must link to the homepage.


**Nonfunctional Requirements**

**Security Requirements**

    SR1a: All user data must be encrypted using industry-standard protocols both in transit and at rest.
    SR1b: The application must comply with local data protection regulations, such as GDPR or CCPA, in handling user data.


**Accessibility Requirements**

    AR1a: The application must comply with WCAG 2.1 Level AA to ensure accessibility for users with disabilities.
    AR1b:  The application must provide alternative text for all images and actionable icons for screen readers.

**UI Interface**

    UI1a: The interface must be compatible and responsive across mobile and larger screens.

**Stretch Goal**

    SG1a: The system could recommend further recipes that use leftover ingredients from other recipes for subsequent meal planning.
    SG1b: Include a feature that allows users  to adjust recipes and immediately update budget calculation.
    
    
