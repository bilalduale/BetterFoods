# Better foods 

### Suheaf Hussein(PM), Bilal Duale(Developer), Anjali Schatzer(Developer), Erica Ding(Designer)

## Introductions On the problem space


<p> In 2022, Seattle experienced a large increase in food prices, with costs for home-prepared meals rising over 12% from the previous year, making Seattle one of the most expensive U.S. cities for groceries <cite>(Whitman, 2024).</cite> This sharp rise from the typical annual growth of 2% to 4% places a large burden on residents, especially low-income families, who are now struggling more than ever to afford groceries. The average household in the Seattle metro area now spends $289 per week on food prepared at home, significantly above the national average of $270. This positions Seattle as having the sixth-highest weekly food expenditure among major U.S. metropolitan areas <cite>(Brooks, 2024)</cite>. </p>

<p>Additionally, the costs of dining out have surged even more dramatically, with price increases for meals away from home rising to 9.4% and 9.9% in 2022 and 2023, respectively <cite>(Whitman, 2024).</cite> These escalating costs disproportionately impact marginalized communities, exacerbating disparities in food access and economic stability. Notably, Black and Hispanic households are twice as likely to experience food insecurity, with rates ranging from 26.6-32.4%, compared to white households. A survey by the University of Washington discovered that 49% of low-income families in Washington experienced food insecurity in the past month. Moreover, 55% relied on food assistance programs to meet their nutritional needs <cite>(Stringer, 2023).</cite></p>

<p>These rising food prices make it increasingly difficult for these groups to access nutritious food, creating a greater reliance on food banks.</p>

<p>The surge in food prices has severe consequences for the health and economic stability of the affected populations, compelling families to opt for cheaper, less nutritious options. For example, the University of Washington study also found that many respondents reported cutting back on healthy food such as produce and meat due to affordability issues <cite>(Stringer, 2023).</cite> This can lead to higher incidences of diseases such as obesity, diabetes, heart disease, and mental health disorders. These health issues not only affect physical health but also educational outcomes and economic mobility <cite>(National Institute on Minority Health and Health Disparities, n.d.).</cite></p>

<p>There are multiple factors contributing to the rise in food prices in the Seattle region. Increased wages are required to draw in and hold laborers in farms, processing, and distribution. This leads to higher overall costs of food production and supply. Additionally, rising fuel prices impact the cost of transporting food from producers to consumers, leading to an increase in retail prices for food. Moreover, disruptions in the supply chain, possibly from logistical challenges or global events, can result in food item shortages. This drives up prices due to increased demand and reduced supply. Higher costs in other areas of operation, such as maintenance of equipment and utilities also contribute to the rising food prices <cite>(Whitman, 2024).</cite></p>

<p>Existing interventions like SNAP and WIC, alongside community efforts such as food banks and community gardens, attempt to address this issue. However, these programs struggle to keep pace with the rapidly rising food prices and the growing demand due to their limited capacity and resources. For example, SNAP benefits often fail to cover a full month’s worth of nutritious food, and food banks face persistent shortages, preventing access to fresh and nutritious food options. These programs typically focus on immediate relief rather than addressing the underlying causes of food insecurity, such as economic instability and systemic barriers to food access <cite>(Pathak, Richards, & Jarsulic, 2022).</cite> This highlights the need for more comprehensive, sustainable solutions to address food insecurity in Seattle, an issue aligned with the United Nations Sustainable Development Goal to "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture" <cite>(United Nations, n.d.).</cite></p>


##  Solution Summary


<p>The core of the Better Foods app is its Affordable Meal Planner, a tool meant to assist users in Seattle to efficiently plan nutritious meals that fit within their budget constraints. This tool integrates a budget calculator and a search functionality that allows users to find foods based on nutritional content and type. Users can filter search results to meet specific dietary needs, ensuring each meal plan is affordable and nutritionally complete. This approach addresses the problem of rising food costs in Seattle by allowing residents to make informed, cost-effective food choices without compromising on nutrition.</p>

**Stretch Goals:**

<p>Resource Mapping:Integrate an interactive map that allows users to view local food banks and community food resources. This would enhance the app’s utility by connecting users with local support.</p>
  
<p>Community Platform: We would potentially also develop a community feature where users can share recipes and budgeting tips. This platform would foster a community of support among users, encouraging knowledge sharing and enhancing user engagement.</p>



## Our design 
<p>Upon visiting our web app, users are greeted with a welcome page featuring a hero shot that introduces our website. </p>
<img width="600" alt="welcome" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/1208cd6f-f493-40b4-af59-747cd1f3ddc7">

<p> After users click on the “calculate my plan” button, users can enter their budget and dietary plan.  </p>

<img width="600" alt="calculate plan" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/25e521be-18a5-46f4-956d-aa446ac7a63e">

<p> Users must enter a budget and select a dietary plan, and if an error occurs, such as entering an invalid amount or failing to select a plan, a clear error screen will guide them on how to correct the mistake.</p>
<img width="600" alt="error-budget not entered" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/e72a36c5-b9bf-47b5-9f8d-b71c0ad20cff">

<p>When users click on the dropdown menu, they can select from various dietary plans or opt out, in which case our app will generate a basic meal plan that meets essential nutritional needs. </p>
<img width="600" alt="dropdown" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/1dc5e687-1c72-41ca-96aa-00a23007fbf0">

<p>After clicking the "Generate my plan" button, our app will create a meal plan tailored to users' budgets and eating preferences. Users can view and verify the recommended products, including their prices and quantities. They also have the option to delete or edit food items in the plan.
</p>
<img width="600" alt="generate plan" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/34d5961f-a4c6-494a-ac6e-dcd143a430c6g">

<p> Users are also able to use the “search” feature to find new products as well. </p>
<img width="600" alt="search" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/8b641d6d-b407-4cad-8f66-802fda2f1f39">

<p> When no search results are found, the display will appear as follows.</p>
<img width="600" alt="error-search not found" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/49e73c7f-bd14-43c2-8501-af7e777f1195">

<p> Users can name their plan and save it as a pdf.  </p>
<img width="600" alt="save plan" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/279421da-74cc-4e0d-aa56-4db591991ec3">

<p> Users have to enter a name to be more than 2 characters. </p>
<img width="600" alt="error-name enter" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/50312299-0281-4b52-8ba8-0199b7141eca">

<p> After generating a plan, users will be redirected to the welcome page where they can create new plans. Users cannot navigate back during the plan creation process; otherwise, the plan will not be saved.</p>
<img width="600" alt="generate plan" src="https://github.com/INFO442-Summer2024/b-team/assets/108030139/6da4ecfa-bab2-422f-9ef6-b40c6612ff04">



References:

- Brooks, L. (2024, January 20). Survey: Seattle seeing some of the highest grocery prices in US. *KIRO 7 News Seattle*. [Link](https://www.kiro7.com/news/local/survey-seattle-seeing-some-highest-grocery-prices-us/JJUGK7WSWNHTVAB7VVVHIO3XCM/)

- National Institute on Minority Health and Health Disparities. (n.d.). Food accessibility, insecurity, and health outcomes. [Link](https://www.nimhd.nih.gov/resources/understanding-health-disparities/food-accessibility-insecurity-and-health-outcomes.html)

- Stringer, K. (2023, February 22). Low-income Washington state households still struggling with food insecurity as pandemic protections end. *University of Washington School of Public Health*. [Link](https://sph.washington.edu/news-events/sph-blog/food-insecurity-as-pandemic-protections-end)

- United Nations. (n.d.). Goal 2: End hunger, achieve food security and improved nutrition and promote sustainable agriculture. [Link](https://sdgs.un.org/goals/goal2)

- Whitman, V. (2024, May 11). Seattle-area high food prices hit budgets already “slammed from all directions.” *The Seattle Times*. [Link](https://www.seattletimes.com/business/cant-keep-up-with-seattle-area-rising-food-prices-youre-not-alone/)

