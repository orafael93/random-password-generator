const copyClipboard = (element) => {
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

export default copyClipboard;
