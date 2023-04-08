console.log("Hello world!");

let min = 1, max = 10, winningNum = getWinningNum(min, max), guessesLeft = 3;

// Get winning number
function getWinningNum(min, max) {
    return Math.floor(Math.random() *(max-min + 1) + min);
}

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;   


// Play again event
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})


function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change color
    guessInput.style.borderColor = color;
    message.style.color = color;
    // set message
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}



// Add Event
guessBtn.addEventListener('click', guessEvent,false);

function guessEvent(event) {
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won
    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct, YOU WIN`)
    } else {
        // wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){ 
            gameOver(false,`Game over, you lost. The correct number was ${winningNum}`)

        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = ''

            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
};

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
};