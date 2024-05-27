const choices=['rock','paper','scissors'];
let humanScore=0,computerScore=0;
let userChoice=null;
const getComputerChoice=()=>{
    return choices[Math.floor(Math.random()*3)]
}

const getHumanChoice=()=>{
 return userChoice= prompt("Input your choice");
}

const playRound=(humanChoice,computerChoice)=>{
    const transformedHumanChoice=humanChoice.toLowerCase();
    if(transformedHumanChoice===computerChoice){
        console.log("It's a draw!")
    }else if(transformedHumanChoice==="rock"&&computerChoice==="paper"){
        console.log('You lost! Paper beats rock');
        computerScore++;
    }else if(transformedHumanChoice==="paper"&&computerChoice==="scissors"){
        console.log('You lost! Scissors beats paper');
        computerScore++;
    }else if(transformedHumanChoice==="scissors"&&computerChoice==="rock"){
        console.log('You lost! Rock beats Scissors');
        computerScore++;
    }
    else{
        console.log(`you won! ${transformedHumanChoice} beats ${computerChoice}`)
        humanScore++;
    }
}

function playGame(){
    let i=0;
    while(i<5){
        playRound(getHumanChoice(),getComputerChoice());
        i++;
    }
    if(humanScore>computerScore){
        console.log('You Won by', humanScore);
    }else{
        console.log('Computer won by ', computerScore);
    }
}

playGame();
