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
