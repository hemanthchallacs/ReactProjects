import "../CSS/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedYear, setYear] = useState("none");

  const onSelectYear = (event) => {
    setYear(event.target.value);
    console.log(event.target.value);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if(expense.date === '')
    return false;
    else
    return expense.date.getFullYear().toString() === selectedYear.toString();
  });

  return (
    <Card className="expenses">
      <div>
        <ExpenseFilter
          filtervalue={selectedYear}
          onSelectedYear={onSelectYear}
        />
      </div>
      <li>
      <ExpensesList filteredExpenses={filteredExpenses}/>
      </li>
    </Card>
  );
}

export default Expenses;
