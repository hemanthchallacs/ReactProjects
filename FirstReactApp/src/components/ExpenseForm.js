import { useState } from "react";
import "../CSS/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(new Date());
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(Number(event.target.value));
    console.log(enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(new Date(event.target.value));
    const newdate = enteredDate.toLocaleDateString().split('/').join('-');
    console.log(newdate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense_data = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    };
    console.log(expense_data);
    props.addExpense(expense_data);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset" onClick={()=>props.formVisibilityHandler(false)}>Close Form</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
