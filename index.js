let ourAnswer = "";

for (let number = 1; number <= 35; number++) {
  let currentNumber = number;

  if (number % 3 === 0 && number % 5 === 0) {
    currentNumber = "Fizz Buzz";
  } else if (number % 3 === 0) {
    currentNumber = "Fizz";
  } else if (number % 5 === 0) {
    currentNumber = "Buzz";
  }

  ourAnswer = ourAnswer + `${currentNumber}, `;
}

const correctAnswer =
  "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, ";

const isCorrect = correctAnswer === ourAnswer;

console.log("Our answer:", ourAnswer);
console.log("Is correct?", isCorrect);
