import React from "react";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [userValue, setUserValue] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPasswordGenerated, setShowPasswordGenerated] =
    React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        userValue,
        setUserValue,
        password,
        setPassword,
        showPasswordGenerated,
        setShowPasswordGenerated,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
