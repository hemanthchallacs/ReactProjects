import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "../CSS/NewExpense.css";
const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const formVisibilityHandler = (flag) => {
    console.log(flag);
    setFormVisibility(flag);
  };

  let formComponent;
  if (formVisibility) {
    formComponent = (
      <ExpenseForm
        addExpense={props.addExpense}
        formVisibilityHandler={formVisibilityHandler}
      />
    );
  } else {
    formComponent = (
      <button type="submit" onClick={() => formVisibilityHandler(true)}>
        Add an Expense
      </button>
    );
  }

  return <div className="new-expense">{formComponent}</div>;
};

export default NewExpense;
