const hiddenMessage = (setShowCopiedMessage) => {
  setTimeout(() => {
    setShowCopiedMessage(false);
  }, 800);
};

export default hiddenMessage;
