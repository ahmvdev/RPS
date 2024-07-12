var computerScore= 0;   //variables for score
var playerScore= 0;


function getComputerChoice(){   //function for getting random computer CHoice from array
    let moves=['rock','paper','scissors']
    var compMove= moves[Math.floor(Math.random()*moves.length)]
    return compMove;
}
function getPlayerChoice(){  // function for getting the human choice with prompt
    var userInp = prompt("Play your Move (Rock, Paper, Scissors):").toLowerCase();
    return userInp;
}


function playGame(playerMove, computerMove){
    console.log("Computer Move: ", playerMove);
    console.log("Player Move: ", computerMove);
    if (playerMove==computerMove){  //checking if its a tie
        console.log("Its a tie")
        }
    else if(playerMove=="rock"){    //logic for player moves and comparing it with computer moves
                if(computerMove=="paper"){
                    console.log("You lose!");
                    computerScore++;
                }
                else if(computerMove=="scissors"){
                    console.log("You win!");
                    playerScore++;
                }
            }
    else if(playerMove=="paper"){
            if(computerMove=="rock"){
                console.log("You win!");
                playerScore++;
            }
            else if(computerMove=="scissors"){
                console.log("you lose!");
                computerScore++;
            }
        }
    else if(playerMove=="scissors"){
        if(computerMove=="rock"){
            console.log("you lose!");
            computerScore++;
        }
        else if(computerMove=="paper"){
            console.log("you win!");
            playerScore++;
        }
    }
    }


for (let i=0;i<5;i++){
    playGame(getPlayerChoice(), getComputerChoice());
    console.log(playerScore);
    console.log(computerScore);
}

if (playerScore>computerScore) 
    {console.log("PLAYER WINS!")
    }
else if(computerScore>playerScore){
    console.log("COMPUTER WINS!")
}
else if(computerScore==playerScore){
    console.log("ITS A TIE!")
}