import { useState } from "react";
import "../CSS/ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
 
  const [ title , setState] = useState(props.title);
  const clickTrigger = () =>{ 
    setState('updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickTrigger} >Change title</button>
        </div>
      </div>
      
    </Card>
  );
}

export default ExpenseItem;
