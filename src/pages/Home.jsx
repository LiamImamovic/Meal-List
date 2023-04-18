import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Our favorite meal :</h2>
      {meal ? (
        <div>
          <h3>{meal.strMeal}</h3>
          <Link to={`/${meal.idMeal}`}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
