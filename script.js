//getting access to html elements using JS DOM maniplation 
var startQuiz = document.getElementById("start");
var questionTitle = document.getElementById('question-title'); 
var a = document.getElementById('choice1'); 
var b = document.getElementById('choice2'); 
var c = document.getElementById('choice3'); 
var d = document.getElementById('choice4'); 
var answer = document.getElementById('answer');
var time = document.getElementById('time');
var score = document.getElementById('final-score');

//global variables 
var currentIndex = 0; 
var currentTime = 75;  
var interval;

//when start button is clicked, this will 
//trigger the first Q to appear & start timer.  
startQuiz.addEventListener("click", function() {
    generateQuestion(currentIndex);
    timer();
    enableClicks(); 
}); 

//the timer function
function timer() {
    interval = setInterval(function() {
       time.innerHTML = currentTime--; 
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
function generateQuestion(index) {
    //what does this function do after the last question is answered?
    if(index === questions.length) {
        clearInterval(interval);
        return score.innerHTML = time.innerHTML; 
    }
    questionTitle.innerHTML = questions[index].q; 
    a.innerHTML = questions[index].o.a; 
    b.innerHTML = questions[index].o.b; 
    c.innerHTML = questions[index].o.c;
    d.innerHTML = questions[index].o.d;
}

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
    generateQuestion(currentIndex); 
}


