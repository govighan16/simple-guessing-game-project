const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let randomInRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let secretNumber = randomInRange(0, 100)
let numAttempts = 5;

let checkGuess = function(n) {
    if(n > secretNumber) {
        console.log('Too high')
        return false;
    }
    if(n < secretNumber) {
        console.log('Too low')
        return false;
    }
    if(n === secretNumber) {
        console.log('Correct! 😎')
        return true;
    }
}

let askGuess = function() {
    rl.question('Enter a guess: ', (number) => {
        if(checkGuess(Number(number)) == true) {
            console.log('You win!')
            rl.close();
        } else {
            numAttempts--;
            if (numAttempts == 0) {
                console.log('You lose 🥲, ' + ` the correct number was ${secretNumber}`)
                rl.close();
            } else {
            askGuess()
            }
        }
    });
    
}


let handleSecondQuestion = (answer) => {
    rl.question('Enter a min number: ', (min) => {
        console.log(`I'm thinking of a number between ${min} and ${answer}...`)
        secretNumber = randomInRange(min, answer)
        askGuess();
    })
}

let askRange = function() {
    rl.question('Enter a max number: ', (max) => {
        handleSecondQuestion(max);

    })
}

let askLimit = function() {
    rl.question('Enter the number of turns: ', (turns) => {
        numAttempts = Number(turns);
        askRange();
    })
}



//askGuess()
//askRange();
askLimit();
