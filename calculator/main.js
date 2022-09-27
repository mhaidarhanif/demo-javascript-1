import {
  calculateSquareArea,
  calculateSquarePerimeter,
} from "./modules/square.js";
import calculateCircleArea from "./modules/circle.js";

const squareAreaFormElement = document.getElementById("square-area-form");
const squareSideLengthInputElement =
  document.getElementById("square-side-length");
const squareAreaResultElement = document.getElementById("square-area-result");
const errorMessageElement = document.getElementById("error-message");

squareAreaFormElement.addEventListener("submit", (event) => {
  try {
    event.preventDefault();

    const sideLength = squareSideLengthInputElement.valueAsNumber;

    if (sideLength <= 0) {
      throw new Error("Side length must be over 0");
    }
    if (!sideLength) {
      throw new Error("Side length must exist");
    }

    const resultSquareArea = calculateSquareArea(sideLength);

    if (!resultSquareArea) {
      throw new Error("Result is undefined");
    }

    errorMessageElement.innerText = "";
    squareAreaResultElement.innerText = `${resultSquareArea} cm²`;
  } catch (error) {
    console.error(error);
    errorMessageElement.innerText = error.message;
    squareAreaResultElement.innerText = "";
  }
});
