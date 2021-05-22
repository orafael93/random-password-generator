const removeClassFromImage = (image) => {
  setTimeout(() => {
    image.classList.remove("copied");
  }, 1000);
};

export default removeClassFromImage;
