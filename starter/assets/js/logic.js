const startButton = document.getElementById('start');
const firstAnswer = document.getElementById('question0');
const secondAnswer = document.getElementById('question1');
const thirdAnswer = document.getElementById('question2');
const fourthAnswer = document.getElementById('question3');
const fifthAnswer = document.getElementById('question4');

const question0 = document.getElementById('question0');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const question4 = document.getElementById('question4');

question0.classList.add('hide');
question1.classList.add('hide');
question2.classList.add('hide');
question3.classList.add('hide');
question4.classList.add('hide');


//A start button that when clicked the first question appears.
startButton.addEventListener('click', startQuiz);

function startQuiz () {
   console.log('started');
   startButton.classList.add('hide');
   question0.classList.remove('hide');
   
   //Functions that open sequentially each subsequent question
   firstAnswer.addEventListener('click', next);
   function next () {
      question0.classList.add('hide');
      question1.classList.remove('hide');
   }
   
   secondAnswer.addEventListener('click', next2);
   function next2 () {
      question1.classList.add('hide');
      question2.classList.remove('hide');
   }
   
   thirdAnswer.addEventListener('click', next3);
   function next3 () {
      question2.classList.add('hide');
      question3.classList.remove('hide');
   }

   fourthAnswer.addEventListener('click', next4);
   function next4 () {
      question3.classList.add('hide');
      question4.classList.remove('hide');
   }

   fifthAnswer.addEventListener('click', next5);
   function next5 () {
      question4.classList.add('hide');
      question5.classList.remove('hide');
   }

   //When clicked on a start button - a timer starts
   var timerEl = document.getElementById('time');
  
   function countdown() {
      var timeLeft = 50;
      timerEl.innerText = timeLeft;

      var timeInterval = setInterval(function () {
       
        timeLeft--;
        timerEl.innerText = timeLeft;
    
        if (timeLeft <= 0){
          clearInterval(timeInterval);
        }
      },1000);
    }
    countdown();
    
}


//sound: When clicked on an incorrect answer
function soundClick() {
   var audio = new Audio();
   
   audio.src = "assets/sfx/incorrect.wav";
   audio.autoplay = true;
   
  }
//sound: When clicked on a correct answer
function soundCorrect() {
   var audio2 = new Audio();
   
   audio2.src = "assets/sfx/correct.wav";
   audio2.autoplay = true;
  }


 

