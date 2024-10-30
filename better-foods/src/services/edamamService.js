import axios from 'axios';

 // Recipe Search API details
 const RECIPE_API_URL = 'https://api.edamam.com/api/recipes/v2';
 const RECIPE_APP_ID = '26bfe425';
 const RECIPE_APP_KEY = 'ee80f5beac8c1ad43f1139d5f26516c2';


 // Nutritional API details
 const NUTRITION_API_URL = 'https://api.edamam.com/api/nutrition-details';
 const NUTRITION_APP_ID = '53aefb7c';
 const NUTRITION_APP_KEY = 'a4edfd33cabc2bf2b97fdad0c05272ab';

 // test search API
 export const testSearchAPI = async () => {
     try {
         const response = await axios.get(`${RECIPE_API_URL}`, {
             params: {
                 q:"chicken",
                 app_id: RECIPE_APP_ID,
                 app_key:RECIPE_APP_KEY,
                 type: 'public'

             }
         } );
         console.log("Connected to Recipe", response.data);
     }catch(error) {
         console.error('Connection failed:', error.response ? error.response.data : error);
     }
 };



 // test nutritional details API
 export const testNutritionAPI = async () => {
     try {
         const response = await axios.post(`${NUTRITION_API_URL}`, {
             title: "Carrot Recipe",
             ingr: ["1 large carrot"],
             summary: "a carrot recipe with a carrot",
             yield: "1 serving",
             time: "2 minutes",
             prep: "Wash and eat the carrot."

         }, {
             params: {

                 'app_id': NUTRITION_APP_ID, 
                 'app_key':NUTRITION_APP_KEY
             },
             headers: {
                 'Content-Type': 'application/json'
             }

         });
         console.log("Connected to Edamam Nutrition API:", response.data);

     }catch(error) {
         console.log('Failed to Connect to Edamam Nutrition API:', error);
     }
 };