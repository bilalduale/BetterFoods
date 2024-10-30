import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


export function EnterBudget() {
    const [budget, setBudget] = useState('');
    const [diet, setDiet] = useState('');

    const handleGeneratePlan = () => {
        console.log("Generating your meal plan...");
        console.log(`Budget: ${budget}`);
        console.log(`Diet: ${diet}`);
    };

    return (
        <div className="enterbudget">
            <h2>Answer the following questions to get a healthy <br/> dietary plan with your budget!</h2>
            
            <label htmlFor="budget">
                Enter your weekly budget: 
                <input
                    type="number"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Enter amount in USD"
                />
            </label>
            <br/>
            <label htmlFor="diet">
                Do you follow a healthy diet? 
                <select id="diet" value={diet} onChange={(e) => setDiet(e.target.value)}>
                    <option value="">Select...</option>
                    <option value="No">No, but I would like to follow normal diet</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Low Fat">Low Fat</option>
                    <option value="Egg Free">Egg Free</option>
                    <option value="Dairy Free">Dairy Free</option>
                </select>
            </label>
            <br/>
            <NavLink to ="/recipe"> 
                <button className="generator">
                    Generate my plan
                </button>
          </NavLink>
        </div>
    );
}
