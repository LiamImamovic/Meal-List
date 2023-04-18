import Navbar from "./Navbar";
import Home from "./pages/Home";
import MealList from "./pages/MealList";
import MealId from "./pages/MealId";
import MealCreate from "./pages/MealCreate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meallist" element={<MealList />} />
          <Route path="/mealcreate" element={<MealCreate />} />
          <Route path="/:id" element={<MealId/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
