import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Cart from "../Cart/Cart";

const Meals = () => {
  return (
    <>
      <div style={{ zIndex: 999 }}>
        <Cart></Cart>
      </div>
      <div>
        <MealsSummary></MealsSummary>

        <AvailableMeals></AvailableMeals>
      </div>
    </>
  );
};

export default Meals;
