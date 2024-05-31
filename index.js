const btnContainer=document.createElement("div");
const rockBtn=document.createElement("button");
rockBtn.innerText="Rock";
const paperBtn=document.createElement("button");
paperBtn.innerText="Paper";
const scissorBtn=document.createElement("button");
scissorBtn.innerText="Scissors";


btnContainer.addEventListener("click",(event)=>{
    playGame(event.target.innerText)
})


btnContainer.appendChild(paperBtn);
btnContainer.appendChild(scissorBtn);
btnContainer.appendChild(rockBtn);
document.body.appendChild(btnContainer);

const ResultDiv=document.createElement("div");

const choices=['rock','paper','scissors'];

let humanScore=0,computerScore=0;
let userChoice=null;
const getComputerChoice=()=>{
    return choices[Math.floor(Math.random()*3)]
}


const playRound=(humanChoice,computerChoice)=>{
    const transformedHumanChoice=humanChoice.toLowerCase();
    if(transformedHumanChoice===computerChoice){
        ResultDiv.textContent="It's a draw!"
    }else if(transformedHumanChoice==="rock"&&computerChoice==="paper"){
        ResultDiv.textContent="You lost! Paper beats rock";
        ++computerScore;
    }else if(transformedHumanChoice==="paper"&&computerChoice==="scissors"){
        ResultDiv.textContent="You lost! Scissors beats paper";
        ++computerScore;
    }else if(transformedHumanChoice==="scissors"&&computerChoice==="rock"){
        ResultDiv.textContent='You lost! Rock beats Scissors';
        ++computerScore;
    }
    else{
        ResultDiv.textContent=`you won! ${transformedHumanChoice} beats ${computerChoice}`;
        ++humanScore;
    }
}

const scoreDiv=document.createElement("div");
scoreDiv.textContent=`Human: ${humanScore} Computer: ${computerScore}`
document.body.append(scoreDiv);
document.body.appendChild(ResultDiv);

function playGame(humanChoice){
    playRound(humanChoice,getComputerChoice());
    scoreDiv.textContent=`Human: ${humanScore} Computer: ${computerScore}`
}
