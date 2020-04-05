//high score page variables 
var highscore = document.getElementById('highscores');

highscore.innerHTML = localStorage.getItem('initials'); 
