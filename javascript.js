const moves=["rock","paper","scissors"];
function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)];
}
function getHumanChoice(){
    let HumanChoice;
    do{
        HumanChoice=prompt("Pls enter rock, paper or scissors as your move:").toLowerCase();
    } while(HumanChoice !== "rock" && HumanChoice !== "paper" && HumanChoice !== "scissors");
    return HumanChoice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if (humanChoice === computerChoice)
        console.log("Its a Draw");
    else if ((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") ||(humanChoice==="scissors" && computerChoice==="paper"))
        humanScore++;
    else
        computerScore++;
}

function playGame(){
    for (let i = 0; i < 5; i++) {
        console.log("ROUND "+(i+1)+": ");

        const humanSelection = getHumanChoice();
        console.log("You gave "+humanSelection);

        const computerSelection = getComputerChoice();
        console.log("The Computer gave "+computerSelection);
        
        playRound(humanSelection, computerSelection);
    }
    console.log("You scored:"+humanScore);
    console.log("The Computer scored:"+computerScore);
    if(humanScore>computerScore)
        console.log("Congrats!!You are the Winner!");
    else if(humanScore<computerScore)
        console.log("Sorry,You Lost,The Computer is the winner. Try again next time.");
    else
        console.log("Its a DRAW.");
}
playGame();