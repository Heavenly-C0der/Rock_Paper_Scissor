const moves=["rock","paper","scissors"];
function getComputerChoice(){
    return moves[Math.floor(Math.random() * 3)];
}

const body=document.querySelector("body");

const para=document.createElement("p");
para.textContent="Please click on any button to your Choice, the Game will not be finished until you or the computer gets 5 points.";
body.appendChild(para);

const rock=document.createElement("button");
const paper=document.createElement("button");
const scissors=document.createElement("button");

rock.textContent="rock";
paper.textContent="paper";
scissors.textContent="scissors";

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

let humanScore=0;
let computerScore=0;

rock.addEventListener("click", () => {

    const ComputerChoice=getComputerChoice();
    console.log("The Computer gave:"+ComputerChoice);
    console.log("Your gave: rock");

    if(ComputerChoice==="scissors") console.log("Your Score:"+ ++humanScore+"\nComputer score:"+computerScore);

    else if(ComputerChoice==="rock") {console.log("Its a draw.")}

    else console.log("Your score:"+humanScore+"\nComputer score:"+ ++computerScore);

});

paper.addEventListener("click", () => {

    const ComputerChoice=getComputerChoice();
    console.log("The Computer gave:"+ComputerChoice);
    console.log("Your gave: paper");

    if(ComputerChoice==="rock") console.log("Your Score:"+ ++humanScore+"\nComputer score:"+computerScore);

    else if(ComputerChoice==="paper") {console.log("Its a draw.")}

    else console.log("Your score:"+humanScore+"\nComputer score:"+ ++computerScore);

});

scissors.addEventListener("click", () => {

    const ComputerChoice=getComputerChoice();
    console.log("The Computer gave:"+ComputerChoice);
    console.log("Your gave: scissors");

    if(ComputerChoice==="paper") console.log("Your Score:"+ ++humanScore+"\nComputer score:"+computerScore);

    else if(ComputerChoice==="scissors") {console.log("Its a draw.")}

    else console.log("Your score:"+humanScore+"\nComputer score:"+ ++computerScore);

});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {

        if(humanScore==5){

            rock.setAttribute("disabled","");
            paper.setAttribute("disabled","");
            scissors.setAttribute("disabled","");

            const div=document.createElement("div");
            div.textContent="You scored 5 points!!,You are the winner!!";
            body.appendChild(div);
        }

        else if(computerScore==5){

            rock.disabled=true;
            paper.disabled=true;
            scissors.disabled=true;

            const div=document.createElement("div");
            div.textContent="The Computer scored 5 points!!,You Lose!!";
            body.appendChild(div);
        }

    });
});
