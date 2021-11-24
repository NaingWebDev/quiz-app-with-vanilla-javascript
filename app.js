const questionsData = [
  {
    question: "what is my name",
    a: "NHL",
    b: "Naing",
    c: "Htet",
    d: "Linn",
    correct: "a",
  },
  {
    question: "what is my age",
    a: 18,
    b: 19,
    c: 20,
    d: 21,
    correct: "b",
  },
  {
    question: "what is my gender",
    a: "gay",
    b: "male",
    c: "female",
    d: "straight",
    correct: "d",
  },
  {
    question: "what is my fav anime",
    a: "naruto",
    b: "haikyuu",
    c: "jojo",
    d: "one piece",
    correct: "c",
  },
  {
    question: "what is my fav color",
    a: "orange",
    b: "red",
    c: "white",
    d: "black",
    correct: "a",
  },
];

let currentQuestion = 0;
let score = 0;

const questionTag = document.querySelector(".question-text");

const questionContainer = document.querySelector(".container");

const aText = document.querySelector("#a_text");
const bText = document.querySelector("#b_text");
const cText = document.querySelector("#c_text");
const dText = document.querySelector("#d_text");

const inputTags = document.querySelectorAll(".input");

const btn = document.querySelector("#submit");

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = questionsData[currentQuestion];

  questionTag.innerHTML = currentQuizData.question;

  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function getSelected() {
  let ans = undefined;
  inputTags.forEach((input) => {
    if (input.checked) {
      ans = input.id;
    }
  });
  return ans;
}

function deselectAnswer() {
  inputTags.forEach((input) => {
    input.checked = false;
  });
}

btn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === questionsData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questionsData.length) {
      loadQuiz();
    } else {
      questionContainer.innerHTML = `
      <h2>You answered correctly at ${score}/${questionsData.length} questions.</h2>

      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
