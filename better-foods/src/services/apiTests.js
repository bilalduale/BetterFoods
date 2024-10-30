import {testSearchAPI, testNutritionAPI} from './edamamService';

// test API

const ApiTests = async () => {
    await testSearchAPI();
    await testNutritionAPI();
};

ApiTests();