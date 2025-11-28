
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let compChoices = ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * compChoices.length);
        return compChoices[randomIndex];
    }

    function getHumanChoice() {
        let humChoice = prompt("Choose rock, paper, or scissors:");
        return humChoice;
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }

        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`\n Round ${i} `);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }


    console.log("\n GAME OVER ");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final score: ${humanScore} - ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final score: ${humanScore} - ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: ${humanScore} - ${computerScore}`);
    }
}


playGame();