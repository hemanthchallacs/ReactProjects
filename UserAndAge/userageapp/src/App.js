import { useState } from "react";
import "./App.css";
import ErrorOverlay from "./components/ErrorOverlay";
import Form from "./components/Form";
import RenderUserList from "./components/RenderUserList";
const userDefaultList = [
  {
    id: 1,
    username: "challa",
    age: "26",
  },
  {
    id: 2,
    username: "hemanth",
    age: "26",
  },
];

function App() {
  const [userList, setUserList] = useState(userDefaultList);

  const [overlay, setoverlay] = useState(0);

  const addUserHandler = (userDetails) => {
    if (userDetails.username.trim().length === 0) {
      setoverlay(2);
    } else if (userDetails.age < 18) {
      setoverlay(1);
    } else {
      setUserList((prevState) => {
        return [...prevState, userDetails];
      });
      setoverlay(0);
    }
  };

  const invalidateOverlayhandler = ()=>{
    setoverlay(0);
  }
  return (
    <div>
      <ErrorOverlay
        overlayValue={overlay}
        invalidateOverlay={invalidateOverlayhandler}
      ></ErrorOverlay>
      <div className="box">
        <Form addUser={addUserHandler}></Form>
      </div>
      <div>
        <RenderUserList
          userList={userList}
          addUser={addUserHandler}
        ></RenderUserList>
      </div>
    </div>
  );
}

export default App;
