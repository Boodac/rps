function getComputerChoice(roll = Math.random()){
    if(roll > (2/3)) {
        return 'rock';
    }
    else if(roll > (1/3)) {
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

function getHumanChoice(input = prompt("(R)ock, (P)aper, or (S)cissors?")){
    input.toLowerCase();
    switch (input){
        case 'rock':
        case 'r':
            return 'rock';
        case 'paper':
        case 'p':
            return 'paper';
        case 'scissors':
        case 's':
            return 'scissors';
        default:
            return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    let successBool = 0;

    function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()){
        console.log(humanChoice);
        console.log(computerChoice);    
        switch (humanChoice){
            case 'rock':
                if(computerChoice==='rock') successBool = 0;
                else if(computerChoice==='paper') successBool = -1;
                else if(computerChoice==='scissors') successBool = 1;
                break;
            case 'scissors':
                if(computerChoice==='rock') successBool = -1;
                else if(computerChoice==='paper') successBool = 1;
                else if(computerChoice==='scissors') successBool = 0;
                break;
            case 'paper':
                if(computerChoice==='rock') successBool = 1;
                else if(computerChoice==='paper') successBool = 0;
                else if(computerChoice==='scissors') successBool = -1;
        }
        
        console.log("You chose " + humanChoice + " and they chose " + computerChoice);
        if(successBool===-1) { console.log("You lose!"); computerScore+=1; }
        else if (successBool===1) { console.log("You win!"); humanScore+=1; }
        else { console.log("It's a draw!"); playRound(); }
    }

    for(let i = 0; i<5; i++){
        playRound();
    }
}

playGame();
console.log("Your score: " + humanScore + " | Their Score : " + computerScore);
if (humanScore > computerScore) {
    console.log("You won the game!");
}
else console.log("Better luck next time. You lose.");