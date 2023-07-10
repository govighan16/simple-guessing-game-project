const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let secretNumber = 16;

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
        console.log('Correct!')
        return true;
    }
}

let askGuess = function() {
    rl.question('Enter a guess: ', (number) => {
        if(checkGuess(Number(number)) == true) {
            console.log('You win!')
            rl.close();
        } else {
            askGuess()
        }
    });
    
}

askGuess()
