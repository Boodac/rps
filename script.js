document.title = '["rock", "paper", "scissors"]';
const choices = ["rock", "paper", "scissors"];
const body = document.querySelector("body");
body.style = "display: flex;flex-direction:column;justify-content: center";
let humanScore = 0;
let computerScore = 0;
let successBool = 0;
let draws = 0;

const container = document.createElement("div");
container.style = "display: flex; justify-content: center; gap: 1rem;margin-top:1rem";

// let us create the buttons
choices.forEach((choice) => {
    const button = document.createElement("button");
    button.style = "padding: 1rem 2rem;border:1px solid black;border-radius:0.5rem;";
    button.textContent = choice.charAt(0).toUpperCase()+choice.slice(1);
    button.id = choice;
    button.addEventListener('click', () => {
        playRound(choice);
    })
    container.appendChild(button);
});

const resetBtn = document.createElement("button");
resetBtn.style = "padding: 1rem 2rem; border:1px solid black;border-radius:0.5rem;";
resetBtn.textContent = "Reset Scores";
resetBtn.addEventListener('click', () => {
    reset();
});
body.appendChild(resetBtn);

// let's create the results display
const results = document.createElement("div");
results.classList.add = "results";
results.style = "display: flex; flex-direction: column; justify-content: center; text-align: center";

const tally = document.createElement("p");
tally.classList.add = "tally";
tally.style = "text-align: center;"

body.appendChild(container);
body.appendChild(tally);
body.appendChild(results);

// returns 1 if first player won, 2 if second player won, 0 if draw
function whoWins(first, second) {
    let firstIndex = choices.indexOf(first);
    let secondIndex = choices.indexOf(second);
    if(firstIndex === secondIndex) return 0;
    else if(firstIndex === 0 && secondIndex === choices.length-1) return 1;
    else if(secondIndex === 0 && firstIndex === choices.length-1) return 2;
    else if(firstIndex > secondIndex) return 1;
    else return 2;
}

function getComputerChoice(roll = Math.random()) {
    let compChoice = '';
    for(let i = choices.length, j = 0;i > 0;i--,j++){
        let comparison = ((choices.length-(j+1))/choices.length);
        if(roll < comparison) {;
            continue;
        }
        else {
            compChoice = choices[i-1];
            break;
        }
    }
    return compChoice;
}

function playRound(humanChoice, computerChoice = getComputerChoice()){  
    successBool = whoWins(humanChoice, computerChoice);
    const result = document.createElement("p");
    result.classList.add = "result";
    result.textContent = "You chose " + humanChoice + " and they chose " + computerChoice;
    if(successBool===2) computerScore+=1;
    else if (successBool===1) humanScore+=1;
    else draws += 1;
    results.appendChild(result);
    tally.textContent = "You: " + humanScore + " | Machine: " + computerScore + " | Draws : " + draws; 
    if(humanScore > 4 || computerScore > 4) declareWin(successBool);
}

function reset() {
    tally.textContent = "";
    results.textContent = "";
    humanScore = 0;
    computerScore = 0;
    draws = 0;
    container.style.visibility = "visible";
}

function declareWin(player) {
    results.textContent = "";
    const winMessage = document.createElement("p");
    player===1 ? winMessage.textContent = "You win!" : winMessage.textContent = "The computer wins!";
    tally.appendChild(winMessage);
    container.style.visibility = "hidden";
}