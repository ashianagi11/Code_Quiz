//getting access to html elements using JS DOM maniplation 
var startQuiz = document.getElementById("start");
var questionTitle = document.getElementById('question-title'); 
var choice1 = document.getElementById('choice1'); 
var choice2 = document.getElementById('choice2'); 
var choice3 = document.getElementById('choice3'); 
var choice4 = document.getElementById('choice4'); 


//displaying the questions
var currentIndex = 0; 
startQuiz.addEventListener("click", function() {
    // use event delegation here: maybe call to another function. 
    enableClicks();
    if(currentIndex === 0) {
        questionTitle.innerHTML = questions[0].q; 
        choice1.innerHTML = questions[0].o.a;
        choice2.innerHTML  = questions[0].o.b;
        choice3.innerHTML  = questions[0].o.c;
        choice4.innerHTML  = questions[0].o.d;
        currentIndex++
        startQuiz.innerHTML = 'continue';
    } else if(currentIndex === questions.length - 1){ 
        questionTitle.innerHTML = questions[questions.length - 1].q; 
        choice1.innerHTML  = questions[questions.length - 1].o.a;
        choice2.innerHTML  = questions[questions.length - 1].o.b;
        choice3.innerHTML  = questions[questions.length - 1].o.c;
        choice4.innerHTML  = questions[questions.length - 1].o.d;
        startQuiz.innerHTML = 'start new quiz'; //might change
    } else {
        newQuestion(currentIndex);
        currentIndex++
    }
})

function newQuestion(currentIndex) {
    questionTitle.innerHTML = questions[currentIndex].q; 
    choice1.innerHTML  = questions[currentIndex].o.a;
    choice2.innerHTML  = questions[currentIndex].o.b;
    choice3.innerHTML  = questions[currentIndex].o.c;
    choice4.innerHTML  = questions[currentIndex].o.d;
    //call to another function that checks whether the answer is correct or nah 
    //automatically call the next question --> means how do you update currentIndex and pass back to newQuestion? 
}

//improvement tip: function enableClicks(choice, currentIndex)? 
function enableClicks() {
    choice1.addEventListener('click', function() {
        choice1.style.fontWeight = 'bold';
        checkAnswer(choice1, currentIndex);
        startQuiz.addEventListener('click', function() {
            choice1.style.fontWeight = 'normal';
        })
    }); 
    choice2.addEventListener('click', function() { 
        choice2.style.fontWeight = 'bold';
        checkAnswer(choice2, currentIndex);
        startQuiz.addEventListener('click', function() {
            choice2.style.fontWeight = 'normal';
        })
    }); 
    choice3.addEventListener('click', function() {
        choice3.style.fontWeight = 'bold';
        checkAnswer(choice3, currentIndex);
        startQuiz.addEventListener('click', function() {
            choice3.style.fontWeight = 'normal';
        })
    }); 
    choice4.addEventListener('click', function() {
        choice4.style.fontWeight = 'bold';
        checkAnswer(choice4, currentIndex);
        startQuiz.addEventListener('click', function() {
            choice4.style.fontWeight = 'normal';
        })
    }); 
}

function checkAnswer(choice, currentIndex) {
    correctAnswer = questions[currentIndex].a; 
    console.log(correctAnswer, choice.innerText); 
    if(choice.innerText === correctAnswer) {
        console.log('correct'); 
    } else {
        console.log('incorrect');
    }
}

