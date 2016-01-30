//store the human player score and the computer (bot)
//score in variables
var humanScore = 0;
var computerScore = 0;

//write a 'play' function that handles the different conditions of gameplay
//depending on being passed an argument string for "rock", "paper",
//or "scissors" - the human user choice
function play(humanPlay) {
  //call the return function to get a random 'bot' choice
  var computerPlay = getComputerPlay();

  //update the #status to display who played what
  //use jQuery .html()
$("#status").html("You selected "+humanPlay+" The bot selected "+computerPlay);
  //write a conditional block for a human "rock" choice
if (humanPlay==="rock"){
  //this will have a nested conditional for the "computer" choice
  if (ComputerPlay==="rock"){
    //Game tied
  }
  else if(ComputerPlay==="paper"){
    // You lose
    computerScore++;
  }
  else if(ComputerPlay==="scissors"){
    //You Win
    humanScore ++;
  }
}
//use jQuery .append() to update the #status
$("#status").append()
  //write a conditional block for a human "paper" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()to update the #status
  else if (humanPlay==="paper"){
    if (ComputerPlay==="paper"){
      //Game tied
    }
    else if(ComputerPlay==="rock"){
      // You Win
    }
    else if(ComputerPlay==="scissors"){
      //You Lose
    }
  }


  //write a conditional block for a human "scissors" choice
  //this will have a nested conditional for the "computer" choice
  //use jQuery .append()to update the #status

  //update the #humanScore and #computerScore elements
  //use jQuery .html()to update the #status

}


//write a function that randomly picks a 'bot' choice from
//an array of options and returns it
function getComputerPlay() {

  //Sets the values of rock, paper, scissors to the array
  var plays = ["rock","papers","scissors"];

  //Math.random is randomizing function in javascript. Math.floor rounds off the number to a lowest closest integer

  var i = Math.floor(Math.random * plays.length);
  var play = plays [i];
  return play;
}

//define three click handler functions for the
//#rock, #paper and #scissors buttons. They should all call a
//generic 'play' function, passing in "rock", "paper", or "scissors"
//as a string argument.
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

//bind the #rock, #paper and #scissors buttons to their
//relevant click handler functions
$('#rock').click(playRock);
$('#paper').click(playPaper);
$('#scissors').click(playScissors);
