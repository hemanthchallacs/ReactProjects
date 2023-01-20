import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [checkInput, setInput] = useState(true);
  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length!==0)
    setInput(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setInput(false);
      return;
    }
    
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: checkInput ? "green" : "red" }}>
          Course Goal
        </label>
        <input
          type="text"
          style={{
            borderLeftColor: checkInput ? "green" : "black",
            borderTopColor: checkInput ? "green" : "red",
            borderLeftWidth: checkInput ? 1 : 3,
            borderTopWidth: checkInput ? 1 : 3,
            background: checkInput ? 'green' : 'red'
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
