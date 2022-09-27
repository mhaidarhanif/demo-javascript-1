import {
  calculateSquareArea,
  calculateSquarePerimeter,
} from "./modules/square.js";
import calculateCircleArea from "./modules/circle.js";

// Square
const sideLength = 5;
const resultSquareArea = calculateSquareArea(sideLength);
const resultSquarePerimeter = calculateSquarePerimeter(sideLength);

// Circle
const radius = 12;
const resultCircleArea = calculateCircleArea(radius);

console.group("Square");
console.log("resultSquareArea", resultSquareArea);
console.log("resultSquarePerimeter", resultSquarePerimeter);
console.groupEnd();

console.group("Circle");
console.log("resultCircleArea", resultCircleArea);
console.groupEnd();
