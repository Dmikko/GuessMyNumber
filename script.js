'use strict';




let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highscore = 0
let guessHistory =[];

console.log(hiddenNumber)

//linking to buttons - Check button
document.querySelector('.btnCheck').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

//if no input
   if (!guess) {
       document.querySelector('.message').textContent = 'Try with a number!';

   }else if (guess > 20){
       document.querySelector('.message').textContent = 'Only between 1-20';

       //if correct guess
   }else if (guess === hiddenNumber) {
    document.querySelector('.message').textContent = 'You guessed it!';
    document.querySelector('.number').textContent = hiddenNumber;

        //flash on victory, 3 seconds then remove
    document.querySelector('body').classList.add('flashy')
    setTimeout(() => {
        document.querySelector('body').classList.remove('flashy')
    }, 3000);

       if (score < highscore || highscore === 0) {
           highscore = score;
           document.querySelector('.highscore').textContent = highscore;
       }

       //clear the input field
       document.querySelector('.guess').value = '';

       //if wrong guess
   } else if (guess !== hiddenNumber) {

       //add guess to history
       guessHistory.push(guess);
       document.querySelector('.guess-history').textContent = guessHistory.join(', ');

       //increase attempts count
       score++;
       document.querySelector('.score').textContent = score;

           document.querySelector('.message').textContent =
               guess > hiddenNumber ? 'Flying too high friend' : 'Aim higher little one';

           //clear the input field
           document.querySelector('.guess').value = '';
       }
});










//Linking to buttons - Again button
document.querySelector('.btnAgain').addEventListener('click', function(){

    //reset Attempts to 0, generate new hidden number
   score = 0;
   hiddenNumber = Math.trunc(Math.random() * 20) + 1;
   guessHistory = [];

    //reset text
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.guess-history').textContent = '';
})
