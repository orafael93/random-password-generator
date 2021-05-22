const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const simbols = "!@#$%&*()_[]{}?";

const allLettersCodeAndNumbers = lowerCaseAlphabet.concat(
  upperCaseAlphabet,
  numbers,
  simbols
);

const generatePassword = (length) => {
  let userValue = Number(length) || 16;

  let randomPassword = "";

  for (let index = 0; index < userValue; index++) {
    const randomCharacter = Math.floor(
      Math.random() * allLettersCodeAndNumbers.length
    );

    randomPassword += allLettersCodeAndNumbers[randomCharacter];
  }

  return randomPassword;
};

export default generatePassword;
