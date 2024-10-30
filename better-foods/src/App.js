import React from 'react';
import { Routes, Route} from "react-router-dom";
import { NavBar } from './NavBar';
import { HomePage } from './HomePage'; 
import { AboutPage } from './AboutPage'; 
import { EnterBudget } from './EnterBudget';
import RecipeGenerator from './RecipeGenerator';
import MealPlanDisplay from './DownloadMealPlan';
import {testSearchAPI, testNutritionAPI} from './services/edamamService'; 

export default class App extends React.Component {
  state = {
    selectedItems: {}
  };

  updateSelectedItems = (newSelectedItems) => {
    this.setState({ selectedItems: newSelectedItems });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/homepage" element={<HomePage />} /> 
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/enterbudget" element={<EnterBudget />} />
          <Route path="/recipe" element={<RecipeGenerator 
                                           selectedItems={this.state.selectedItems} 
                                           updateSelectedItems={this.updateSelectedItems} 
                                         />} />
          <Route path="/mealplan" element={<MealPlanDisplay 
                                             selectedItems={this.state.selectedItems} 
                                           />} />
        </Routes>
      </div>
    );
  }
}