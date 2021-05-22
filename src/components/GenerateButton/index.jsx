import React from "react";
import "./styles.css";
import generatePassword from "../../utils/generatePassword";
import { GlobalContext } from "../../context/globalContext";

const GenerateButton = () => {
  const { setShowPasswordGenerated, setPassword, userValue } =
    React.useContext(GlobalContext);

  const handlePassword = () => {
    setShowPasswordGenerated(true);

    const passwordGenerated = generatePassword(userValue);
    setPassword(passwordGenerated);
  };

  return (
    <>
      <button className="generate-button" onClick={handlePassword}>
        Gerar password
      </button>
    </>
  );
};

export default GenerateButton;
