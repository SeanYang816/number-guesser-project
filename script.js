let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor(Math.random()*10)
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) =>{
    let num1 = Math.abs(secretNumber - humanGuess);
    let num2 = Math.abs(secretNumber - computerGuess);
    if(num1 > num2){
        //human loses
        return false;
    }else if( num2 > num1 ){
        // human win
        return true;
    }else{
        //tie, therefore human win
        return true;
    }
}

const updateScore = (winner) =>{
    winner === 'human' ?
    humanScore++:
    computerScore++;
    
}

const advanceRound = () =>{
    currentRoundNumber ++;
}

const outOfRange = (userInput) =>{
    if(userInput >= 10){
        alert('please input number between 0 - 9');
        humanGuessInput.value = 0;
    }else{
    }
}