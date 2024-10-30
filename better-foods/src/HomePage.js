import React from "react";
import { NavLink } from "react-router-dom";

export function HomePage() {

  return (
    <div>
      <main>
        <div className="welcome">
          <h2>Your Personal Meal Planner.</h2>
          <h1>
            Eat well.<br />
            Save more.<br />
            Live healthier.
          </h1>

          <NavLink to ="/enterbudget"> 
            <button className="generator">
              Generate my plan
            </button>
          </NavLink>

        </div>
        <img className="homepageimg"
             src="/img/welcome_page_image.png" 
             alt="Better Foods" />
      </main>
    </div>
  );
}
