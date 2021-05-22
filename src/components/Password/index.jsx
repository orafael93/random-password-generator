import React from "react";
import "./styles.css";
import CopyPasteIcon from "../../copy-paste.svg";
import CopiedMessage from "../CopiedMessage";
import removeClassFromImage from "../../utils/removeClassFromImage";
import hiddenMessage from "../../utils/hiddenMessage";
import { GlobalContext } from "../../context/globalContext";
import copyClipboard from "../../utils/copyClipboard";

const Password = () => {
  const { password } = React.useContext(GlobalContext);
  const imageRef = React.useRef();
  const elementPasswordRef = React.useRef();
  const [showCopiedMessage, setShowCopiedMessage] = React.useState(false);

  const handlePassword = () => {
    imageRef.current.classList.add("copied");

    removeClassFromImage(imageRef.current);

    setShowCopiedMessage(true);

    hiddenMessage(setShowCopiedMessage);

    copyClipboard(elementPasswordRef.current);
  };

  return (
    <>
      <div className="wrapper-password">
        <div className="password" onClick={handlePassword}>
          <input ref={elementPasswordRef} value={password} readOnly />
          <img src={CopyPasteIcon} alt="Copy and paste icon" ref={imageRef} />
        </div>
      </div>
      {showCopiedMessage && <CopiedMessage />}
    </>
  );
};

export default Password;
