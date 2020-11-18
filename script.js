//Elements
const start = document.getElementById("start");
const quiz  = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("score");
const highScore = document.getElementById("highscore")
//Questions
let questions = [
  {
    question : "What does CSS stand for?",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Correct",
    correct : "C"

  },{
    question : "What does DOM stand for?",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Correct",
    correct : "C"
  },{
    question : "What does API stand for?",
    choiceA : "Wrong",
    choiceB : "Wrong",
    choiceC : "Correct",
    correct : "C"
  }
  
];

//Variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth;
let TIMER;
let score = 0;


//show Question
function renderQuestion(){
  let q = questions[runningQuestion];

  question.innerHTML = "<p>"+ q.question +"</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
  start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderCounter();
TIMER = setInterval(renderCounter,1000);
}

function renderCounter(){
  if(count <= questionTime){
    counter.innerHTML = count;
    count++
  }else{
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
      // end quiz
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

//checkAnswer

function checkAnswer(answer){
  if( answer == questions[runningQuestion].correct){
    // correct answer
    score++;
    answerIsCorrect();
  }else{
    // wrong answer
    answerIsWrong();
  }
  count = 0; 
  if(runningQuestion < lastQuestion){
    runningQuestion++;
    renderQuestion();
  }else{
    clearInterval(TIMER);
    scoreRender();
  }
}

//answer is right
function answerIsCorrect(){
  document.getElementById(runningQuestion)
}

function answerIsWrong(){
  document.getElementById(runningQuestion)
}

//score render
function scoreRender(){
  scoreDiv.style.display = "block";
  // calc score
  const scorePerCent = Math.round(100 * 
  score/questions.length);
  // Scoreboard
  scoreDiv.innerHTML += "<p>"+ scorePerCent +"</p>";
}
