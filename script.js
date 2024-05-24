//player choices are stored in an array inside an object
let gameBoard={
    board:[ [null,null,null],
            [null,null,null],
            [null,null,null]
          ]
    
}
//Players name and score are stored in an array
let players={player1:null,player2:null,player1Count:0,player2Count:0};
let winnerFound=false;
//Creates the players and store their names in the players array
function playerCreator(){
    let createPlayer=(name)=>{
        (players.player1===null)?players.player1=name:players.player2=name;
        return players;
    };
    return {createPlayer};
}

let gameControls=(function(){
    let activePlayer=Object.keys(players)[0];

    let switchPlayer=()=>{
        (activePlayer==="player1")?activePlayer="player2":activePlayer="player1";
    };

    let getActivePlayer=()=>activePlayer;
    //Checks whether you are playing with computer or human
    let computerCheck=()=>{
        if(activePlayer==="player2"&&players.player2==="Computer"){
            gamePlay();
        }
    }
    let resetActivePlayer=()=>{
        activePlayer=Object.keys(players)[0];
    }

    let gamePlay=(colSel,rowSel)=>{
        let random;
        let randomGenerator=()=>{
            random=Math.floor(Math.random()*9);
            return random;
        }
        //Operates the computer choices from the randomly generated number (random)
        let computerChoice=function(){
            if(random===0&&gameBoard.board[0][0]===null){
                gameBoard.board[0][0]="O";
                document.querySelector("#i0").textContent="O";
            }
            else if(random===1&&gameBoard.board[0][1]===null){
                gameBoard.board[0][1]="O";
                document.querySelector("#i1").textContent="O";
            }
            else if(random===2&&gameBoard.board[0][2]===null){
                gameBoard.board[0][2]="O";
                document.querySelector("#i2").textContent="O";
            }
            else if(random===3&&gameBoard.board[1][0]===null){
                gameBoard.board[1][0]="O";
                document.querySelector("#i3").textContent="O";
            }
            else if(random===4&&gameBoard.board[1][1]===null){
                gameBoard.board[1][1]="O";
                document.querySelector("#i4").textContent="O";
            }
            else if(random===5&&gameBoard.board[1][2]===null){
                gameBoard.board[1][2]="O";
                document.querySelector("#i5").textContent="O";
            }
            else if(random===6&&gameBoard.board[2][0]===null){
                gameBoard.board[2][0]="O";
                document.querySelector("#i6").textContent="O";
            }
            else if(random===7&&gameBoard.board[2][1]===null){
                gameBoard.board[2][1]="O";
                document.querySelector("#i7").textContent="O";
            }
            else if(random===8&&gameBoard.board[2][2]===null){
                gameBoard.board[2][2]="O";
                document.querySelector("#i8").textContent="O";
            }
            else{
                randomGenerator();//Generates another random number if the the cell same as the random number is not null or already selected
                computerChoice();
            }
        };
        if(activePlayer==="player1"){
            gameBoard.board[colSel][rowSel]="X";
        }
        //When you are playing against computer
        else if(activePlayer==="player2"&&players.player2==="Computer"){
            randomGenerator();
            computerChoice();
        }
        else{
            gameBoard.board[colSel][rowSel]="O";
        }
        if(!winnerFound){
            gameWinner();
            switchPlayer();
            getActivePlayer();
        }
    }
//Checks whether the game is finished or not
    let gameWinner=()=>{
        if(gameBoard.board[0][0]===gameBoard.board[0][1]&&gameBoard.board[0][1]===gameBoard.board[0][2]&&gameBoard.board[0][2]!=null){
            if(gameBoard.board[0][0]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[1][0]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[1][2]&&gameBoard.board[1][2]!=null){
            if(gameBoard.board[1][0]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[2][0]===gameBoard.board[2][1]&&gameBoard.board[2][1]===gameBoard.board[2][2]&&gameBoard.board[2][2]!=null){
            if(gameBoard.board[2][0]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[0][0]===gameBoard.board[1][0]&&gameBoard.board[1][0]===gameBoard.board[2][0]&&gameBoard.board[2][0]!=null){
            if(gameBoard.board[0][0]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[0][1]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[2][1]&&gameBoard.board[2][1]!=null){
            if(gameBoard.board[0][1]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[0][2]===gameBoard.board[1][2]&&gameBoard.board[1][2]===gameBoard.board[2][2]&&gameBoard.board[2][2]!=null){
            if(gameBoard.board[0][2]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[0][0]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[2][2]&&gameBoard.board[2][2]!=null){
            if(gameBoard.board[0][0]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
        else if(gameBoard.board[0][2]===gameBoard.board[1][1]&&gameBoard.board[1][1]===gameBoard.board[2][0]&&gameBoard.board[2][0]!=null){
            if(gameBoard.board[0][2]==="X"){
                players.player1Count+=1;
                assignWinner(players.player1);
                winnerFound=true;
                activePlayer="player2";
                return "player1";
            }
            else{
                players.player2Count+=1;
                assignWinner(players.player2);
                winnerFound=true;
                return "player2";
            } 
        }
    }
    return {switchPlayer,gamePlay,gameWinner,activePlayer,computerCheck,resetActivePlayer};

})();
//DOM 

document.querySelector("#myForm").addEventListener("submit",(e)=>{
    e.preventDefault;//Prevents the form from doing the default action after the Start button is clicked
    startGame();
});
//Operates when a player clicks one of the board cells
document.querySelectorAll(".board-choice").forEach((element)=>{
    element.addEventListener("click",(e)=>{
        let clickedId=e.target.id;
        playGame(clickedId,e);
        gameControls.computerCheck();
    });
});
//Removes all the data and texts from the game after the restart button is clicked
document.querySelector("#restart").addEventListener("click",()=>{
    resetBoard();
    players={player1:null,player2:null,player1Count:0,player2Count:0};
    document.querySelector("#player1-win").textContent="";
    document.querySelector("#player2-win").textContent="";
    document.querySelector("#player-1").textContent="Player-1";
    document.querySelector("#player-2").textContent="Player-2";
    document.querySelector("#myDialog").show();
});
//After play again button is clicked it clears all the data in the cells
document.querySelector("#reset-game").addEventListener("click",()=>{
    resetBoard();
});
//Fills the player2 input area with Computer after play with computer button is clicked
document.querySelector("#computer").addEventListener("click",()=>{
    document.querySelector("#player-2").value="Computer";
});
//For clearing all the cells
function resetBoard(){
    document.querySelectorAll(".board-choice").forEach((element)=>{
        element.textContent="";
    });
    gameBoard={
        board:[ [null,null,null],
                [null,null,null],
                [null,null,null]
              ] 
    }
    winnerFound=false;
    document.querySelector("#winner-report").textContent="";
    document.querySelector("#game-direction").textContent="";
    gameControls.resetActivePlayer();
}
/*This function operates after filling the players input and start button is clicked
 its used for storing the players names as well as showing their names in the screen */
function startGame(){
    let create=playerCreator();
    let player1=document.querySelector("#player-1");
    let player2=document.querySelector("#player-2");
    create.createPlayer(player1.value);
    create.createPlayer(player2.value);
    document.querySelector("#myDialog").close();

    let player1Name=document.querySelector("#player1-name");
    let player2Name=document.querySelector("#player2-name");
    player1Name.textContent=player1.value;
    player2Name.textContent=player2.value;
    player1.value="";
    player2.value="";
}
//This function is used for altering the cells after players click one of the cells
function playGame(clickedId,e){
    if(clickedId==="i0"&&gameBoard.board[0][0]==null){
        gameControls.gamePlay(0,0);
        e.target.textContent=gameBoard.board[0][0];
    }
    else if(clickedId==="i1"&&gameBoard.board[0][1]==null){
        gameControls.gamePlay(0,1);
        e.target.textContent=gameBoard.board[0][1];
    }
    else if(clickedId==="i2"&&gameBoard.board[0][2]==null){
        gameControls.gamePlay(0,2);
        e.target.textContent=gameBoard.board[0][2];
    }
    else if(clickedId==="i3"&&gameBoard.board[1][0]==null){
        gameControls.gamePlay(1,0);
        e.target.textContent=gameBoard.board[1][0];
    }
    else if(clickedId==="i4"&&gameBoard.board[1][1]==null){
        gameControls.gamePlay(1,1);
        e.target.textContent=gameBoard.board[1][1];
    }
    else if(clickedId==="i5"&&gameBoard.board[1][2]==null){
        gameControls.gamePlay(1,2);
        e.target.textContent=gameBoard.board[1][2];
    }
    else if(clickedId==="i6"&&gameBoard.board[2][0]==null){
        gameControls.gamePlay(2,0);
        e.target.textContent=gameBoard.board[2][0];
    }
    else if(clickedId==="i7"&&gameBoard.board[2][1]==null){
        gameControls.gamePlay(2,1);
        e.target.textContent=gameBoard.board[2][1];
    }
    else if(clickedId==="i8"&&gameBoard.board[2][2]==null){
        gameControls.gamePlay(2,2);
        e.target.textContent=gameBoard.board[2][2];
    }
}
//For assigning the winner of the game 
function assignWinner(playerName){
    let winnerReporter=document.querySelector("#winner-report");
    let gameDirection=document.querySelector("#game-direction");
    let player1WinCount=document.querySelector("#player1-win");
    let player2WinCount=document.querySelector("#player2-win");

    winnerReporter.textContent=`The round winner is ${playerName}`;
    gameDirection.textContent="Click play again for another round and click reset to start a new game!";
    player1WinCount.textContent=players.player1Count;
    player2WinCount.textContent=players.player2Count;
}













