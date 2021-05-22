import React from "react";
import "./styles.css";

const optionsValue = [
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
];

const PasswordLength = ({ userValue, setUserValue }) => {
  const handleValue = ({ target }) => {
    setUserValue(target.value);
  };

  return (
    <>
      <select
        value={userValue}
        onChange={handleValue}
        className="wrapper-password-length"
      >
        <option value="" disabled>
          Comprimento
        </option>
        {optionsValue.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default PasswordLength;
