import React from "react";
import "./App.css";
import GenerateButton from "./components/GenerateButton";
import PasswordLength from "./components/PasswordLength";
import Password from "./components/Password";
import { GlobalContext } from "./context/globalContext";

function App() {
  const { showPasswordGenerated } = React.useContext(GlobalContext);

  return (
    <>
      <div className="App-Wrapper">
        <PasswordLength />
        <GenerateButton />
      </div>
      {showPasswordGenerated && <Password />}
    </>
  );
}

export default App;
