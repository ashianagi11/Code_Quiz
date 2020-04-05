//getting access to html elements using JS DOM maniplation //Vanilla JS
var startQuiz = document.getElementById("start");
var startScreen = document.getElementById('start-screen'); 
var questionTitle = document.getElementById('question-title'); 
var a = document.getElementById('choice1'); 
var b = document.getElementById('choice2'); 
var c = document.getElementById('choice3'); 
var d = document.getElementById('choice4'); 
var answer = document.getElementById('answer');
var time = document.getElementById('time');
var score = document.getElementById('final-score');
var endScreen = document.getElementById('end-screen');
//we will add more elements for the highscore stuff. 
var initials = document.getElementById('initials');
var submit = document.getElementById('submit');

//global variables 
var currentIndex = 0; 
var currentTime = 75;  
var interval;

function hide() {
    endScreen.style.display = 'none'; 
}
//note: When using for loop to lopp through questions, 
//vanilla JS will display the last index when you load the page. 

//when start button is clicked, this will 
//trigger the first Q to appear & start timer.  
startQuiz.addEventListener("click", function() {
    generateQuestion(); 
    timer();
    enableClicks(); 
    startScreen.style.display = 'none';
}); 

//the timer function
function timer() {
    interval = setInterval(function() {
       time.innerHTML = currentTime--; 
       console.log(time.innerHTML); 
       if(answer === 'Incorrect') {
           currentTime = currentTime - 15; 
       } 
       if(currentTime === -1) {
           clearInterval(interval)
       } 
   }, 1000) 
}

//function to enable clicks
function enableClicks() {
    a.addEventListener('click', function() {
        generateQuiz(a); 
    })
    b.addEventListener('click', function() {
        generateQuiz(b); 
    })
    c.addEventListener('click', function() {
        generateQuiz(c); 
    })
    d.addEventListener('click', function() {
        generateQuiz(d); 
    })
} 

//generates the next question. 
function generateQuestion() {
    if(currentIndex === questions.length) {
        clearInterval(interval);
        endScreen.style.display = 'block'; 
        return score.innerHTML = time.innerHTML;
    }
    questionTitle.innerHTML = questions[currentIndex].q; 
    a.innerHTML = questions[currentIndex].o.a; 
    b.innerHTML = questions[currentIndex].o.b; 
    c.innerHTML = questions[currentIndex].o.c;
    d.innerHTML = questions[currentIndex].o.d;
}

submit.addEventListener('click', function() {
   localStorage.setItem('initials', initials.value); 
   localStorage.setItem('score', score.innerHTML);
}); 

//the main function for the quiz. 
function generateQuiz(UserChoice) {
    let correctAnswer = questions[currentIndex].a; 
    if(UserChoice.innerHTML === correctAnswer) {
        answer.innerHTML = 'Correct';
    } else {
        answer.innerHTML = 'Incorrect';
        currentTime = currentTime - 15;
    }
    currentIndex++; 
    console.log(currentIndex, 'end'); 
    generateQuestion(); 
}


