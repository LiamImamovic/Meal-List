import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);

  return (
    <div>
      <h1>Our Meal List</h1>
      <div>
        {meals.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <Link to={`/${meal.idMeal}`}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealList;
