var num = 8;
var guess = prompt('Guess a number between 1 and 10');
var guess = Number(guess);

if (guess < num) {alert('Too low')}
else if (guess > num) {alert('Too high');}
else {alert('You were right!');}