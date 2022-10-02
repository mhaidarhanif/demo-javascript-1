const questionsElement = document.getElementById("questions");

const renderQuestions = (questions) => {
  console.log({ questions });

  questionsElement.innerHTML = questions
    .map((question) => {
      return `<div>${JSON.stringify(question)}</div>`;
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

fetchQuestions();
