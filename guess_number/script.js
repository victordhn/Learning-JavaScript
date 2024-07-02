/* 
* DOM Manipulation 
* document.querySelector('.class').textContent
? document.querySelector('.class').value (from input)

* for buttons
* document.querySelector('.class').addEventListener('type',function)
! exemplo: 
document.querySelector('.check').addEventListener('click', function() {
console.log(document.querySelector('.guess').value)
} )

*/

'use strict';
console.log(document.querySelector('.label-score').textContent);

let secretNumber = Math.floor(Math.random()*20)+1;
console.log(secretNumber)

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (Number(document.querySelector('.score').textContent)!==0) { 

        if (!guess || guess > 20 || guess < 1) {
            document.querySelector('.message').textContent = '⛔ invalid guess!';} 
            
            
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Congrats! You won';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#106729';
            document.querySelector('.number').style.width = '30rem'
            if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent) { 
                document.querySelector('.highscore').textContent = document.querySelector('.score').textContent; }}
                
        else if (guess > secretNumber) {
            document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent)-1;
            document.querySelector('.message').textContent = 'You guessed too high!';}

        else if (guess < secretNumber) {
            document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent)-1;
            document.querySelector('.message').textContent = 'You guessed too low!';}}
    else {
        document.querySelector('.message').textContent = 'You lost! Game over'}        
    
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random()*20)+1;
    console.log(secretNumber)
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = '' 
})