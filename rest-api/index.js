const questionsElement = document.getElementById("questions");
const questionFormElement = document.getElementById("question-form");

const renderQuestions = (questions) => {
  console.log({ questions });

  questionsElement.innerHTML = questions
    .map((question) => {
      return `<div>
        <h2>${question.title}</h2>
        <p>${question.description}</p>
      </div>`;
    })
    .join("");
};

const fetchQuestions = async () => {
  const response = await fetch(
    "https://api.kontenbase.com/query/api/v1/29f479eb-b571-4de1-978b-10ac1755d57c/questions"
  );
  const questions = await response.json();

  renderQuestions(questions);
};

const addNewQuestion = async (event) => {
  event.preventDefault();

  const newQuestion = {
    title: "What is REST API?",
    description: "REST API looks much better to handle backend communication.",
  };

  const response = await fetch(
    "https://api.kontenbase.com/query/api/v1/29f479eb-b571-4de1-978b-10ac1755d57c/questions",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    }
  );

  fetchQuestions();
};

questionFormElement.addEventListener("submit", addNewQuestion);

fetchQuestions();
