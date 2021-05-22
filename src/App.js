import React from "react";
import GenerateButton from "./components/GenerateButton";
import PasswordLength from "./components/PasswordLength";
import Password from "./components/Password";
import "./App.css";

function App() {
  const [userValue, setUserValue] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <div className="App-Wrapper">
        <PasswordLength userValue={userValue} setUserValue={setUserValue} />
        <GenerateButton />
      </div>
      <Password />
    </>
  );
}

export default App;
