
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const timeLine = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
let timeValue = 29;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restartQuizBtn = resultBox.querySelector(".buttons .restart");
const quitQuizBtn = resultBox.querySelector(".buttons .quit");
const nextBtn = document.querySelector("footer .next_btn");
const bottomQuesCounter = document.querySelector("footer .total_que");

startBtn.onclick = () => {
  infoBox.classList.add("activeInfo");
}

exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
}

continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.add("activeQuiz");
  initializeQuiz();
}

restartQuizBtn.onclick = () => {
  resultBox.classList.remove("activeResult");
  quizBox.classList.add("activeQuiz");
  resetQuiz();
  initializeQuiz();
}

quitQuizBtn.onclick = () => {
  window.location.reload();
}

nextBtn.onclick = () => {
  if (queCount < questions.length - 1) {
    queCount++;
    queNumb++;
    updateQuiz();
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
}

//randomeo d preguntas
function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // switch items
  }
}

mezclarArray(questions); // mezcla d preguntas

function initializeQuiz() {
  showQuestions(queCount);
  queCounter(queNumb);
  startTimer(timeValue);
  startTimerLine(widthValue);
}

function resetQuiz() {
  timeValue = 29;
  queCount = 0;
  queNumb = 1;
  userScore = 0;
  widthValue = 0;
}

function updateQuiz() {
  showQuestions(queCount);
  queCounter(queNumb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Tiempo";
  nextBtn.classList.remove("show");
}

function showQuestions(index) {
  const queText = document.querySelector(".que_text");
  let queTag = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
  let optionTag = questions[index].options.map(option => `<div class="option"><span>${option}</span></div>`).join('');
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;
  optionList.querySelectorAll(".option").forEach(option => {
    option.onclick = () => optionSelected(option);
  });
}

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[queCount].answer;
  let allOptions = optionList.children.length;
  if (userAns === correctAns) {
    userScore++;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    highlightCorrectAnswer(correctAns);
  }
  disableOptions();
  nextBtn.classList.add("show");
}
// Highlight the correct answer
function highlightCorrectAnswer(correctAns) {
  for (let i = 0; i < optionList.children.length; i++) {
    if (optionList.children[i].textContent === correctAns) {
      optionList.children[i].classList.add("correct");
      optionList.children[i].insertAdjacentHTML("beforeend", tickIconTag);
    }
  }
}

function disableOptions() {
  for (let i = 0; i < optionList.children.length; i++) {
    optionList.children[i].classList.add("disabled");
  }
}

function showResult() {
  infoBox.classList.remove("activeInfo");
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");
  const scoreText = resultBox.querySelector(".score_text");
  let scoreTag = '';
  if (userScore > 3) {
    scoreTag = `<span>Conseguiste <p>${userScore}</p> de <p>${questions.length}</p></span>`;
  } else if (userScore > 1) {
    scoreTag = `<span>Conseguiste <p>${userScore}</p> de <p>${questions.length}</p></span>`;
  } else {
    scoreTag = `<span>Conseguiste <p>${userScore}</p> de <p>${questions.length}</p></span>`;
  }
  scoreText.innerHTML = scoreTag;
}

function startTimer(time) {
  counter = setInterval(() => {
    timeCount.textContent = time > 9 ? time : `0${time}`;
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Tiempo Agotado";
      highlightCorrectAnswer(questions[queCount].answer);
      disableOptions();
      nextBtn.classList.add("show");
    }
  }, 1000);
}
function startTimerLine(time) {
  const totalTime = 1100; // 
  counterLine = setInterval(() => {
    time += 1;
    let progressPercentage = (time / totalTime) * 100;
    timeLine.style.width = `${progressPercentage}%`;
    if (time >= totalTime) {
      clearInterval(counterLine);
    }
  }, 29);
}

function queCounter(index) {
  let totalQueCounTag = `<span><p>${index}</p> de <p>${questions.length}</p> preguntas</span>`;
  bottomQuesCounter.innerHTML = totalQueCounTag;
}

const tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
const crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';