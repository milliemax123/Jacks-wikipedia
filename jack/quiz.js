const quizData = [
  {
    question: "Who does Jack love most in this world?",
    options: ["His mother", "His sister", "His brother", "His dog", "Joe Rogan"],
    answer: "Joe Rogan"
  },
  {
    question: "What does Jack want to be when he grows up?",
    options: ["Doctor", "Engineer", "Pharmacist", "Joe Rogan"],
    answer: "Joe Rogan"
  },
  {
    question: "What is the largest thing in the world?",
    options: ["Ocean", "Mount Everest", "Mad Mary's Audacity", "Jack's love for Joe Rogan"],
    answer: "Joe Rogan"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const quizContainer = document.getElementById("quiz-container");

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];

  if (selectedOption === currentQuizData.answer) {
    score++;
    alert('Correct!');
  } else {
    alert('Wrong!');
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
    showRestartButton();
  }
}

function showScore() {
  questionElement.textContent = "Quiz completed!";
  optionsElement.innerHTML = "";
  scoreElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
}

function showRestartButton() {
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = "";
    loadQuestion();
  });
  quizContainer.appendChild(restartButton);
}

// Load the first question when the page loads
loadQuestion();
