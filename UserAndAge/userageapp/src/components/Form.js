import { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const validateUser = (event) => {
    event.preventDefault();
   
      const user = {
        username: userName,
        age: userAge,
        id: Math.random(),
      };
      props.addUser(user);
    
  };
  const nameFieldChange = (event) => {
    setUserName(event.target.value);
  };
  const ageFieldChange = (event) => {
    setUserAge(event.target.value);
  };
  return (
    
    <form onSubmit={validateUser}>
      <div>
        <label>Username</label>
        <input type="text" onChange={nameFieldChange} value={userName} />
      </div>
      <div>
        <label>Age</label>
        <input type="number" onChange={ageFieldChange} value={userAge} />
      </div>
      <button type="submit">Enter user</button>
    </form>
  );
};

export default Form;
