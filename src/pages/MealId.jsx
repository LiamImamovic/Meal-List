import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const MealId = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
          setMeal(data.meals[0]);
        });
    }, [id]);
  
    return (
      <div>
        {meal ? (
          <div>
            <h1>{meal.strMeal}</h1>
            <Link to='/'>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="mealid-img"/>
            </Link>
            <p className="mealid-p">{meal.strInstructions}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default MealId;
  