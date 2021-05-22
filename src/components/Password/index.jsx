import React from "react";
import "./styles.css";
import CopyPaste from "../../copy-paste.svg";

const Password = () => {
  return (
    <>
      <div className="wrapper-password">
        <div className="password">
          <h3>A8S9A24JIJJIJIASAIS</h3>
          <img src={CopyPaste} alt="" />
        </div>
      </div>
    </>
  );
};

export default Password;
