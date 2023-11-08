/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/


let val;
// value for playing
const min = 1,
      max = 10,
      winingNum = getwinningNum(min, max);
let guestLife = 3;
let around_wining = 0;

// basically use to reload the again



//  selecting element from the dom


const submitButton = document.getElementById('btn'),
      inputField = document.querySelector('#guess-input');
      minField = document.querySelector('.min-num');
      maxField = document.querySelector('.max-num');
      messageLog = document.querySelector('.message');
      game = document.querySelector('#game');

      maxField.textContent = max;
      minField.textContent = min;



// 

game.addEventListener('mousedown', function(e)
{
    if (e.target.className === "play")
    {
        window.location.reload();
    }

    
});
 
// ading event listiner to the submit button

submitButton.addEventListener('click', function(e){


    let guessValue = parseInt(inputField.value, 10);

    // input of input field validation
    if (isNaN(guessValue) || guessValue < min || guessValue > max)
    {
        message(`Enter value in the range of ${min} to ${max}`, 'red');
        inputField.style.borderColor = 'red'
        inputField.value = "";
    }
else{

    if (guessValue === winingNum)
    {
        gameOver(`Congratulation you guess right the correct number is ${winingNum}, You won!!`, true);
 
    }
    else
    {
        guestLife -=1;
        message(`Sorry you lost this round.. try again your guesslife ${guestLife}`, 'red');
        inputField.style.borderColor = "red";

        if (guestLife == 0)
        {
            gameOver(`Opps! You lost game over the wining number is ${winingNum}`, false);
        }

    }
}

inputField.value = "";
   
});

/// this function is for lodging message 

function message(mgs, color)
{
    messageLog.textContent = mgs;
    messageLog.style.color = color;

};



// this function will be called for eveery win or lost 
// and will disabled the field for play agaun option

function gameOver(msg, check)
{
    let color;
    (check) ? color = 'green':'red';

    message(msg, color);
    inputField.style.borderColor = color;
    inputField.disabled = "true";


    submitButton.value = "Start_Again";
    inputField.placeholder = "click for another round... "
    submitButton.className += "play";


}


function getwinningNum(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}