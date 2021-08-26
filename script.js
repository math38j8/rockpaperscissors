let userChoice = ""; //variabel for bruger-valg
let pcChoice = ""; //variabel for Computer-valg

window.addEventListener("load", randomPCchoice); //når siden er loadet kald næste funktion

function randomPCchoice() { //PC CHOICE
  let PCchoiceNumber = Math.floor(Math.random() * 3) + 1; //laver variabel som finder tilfældigt tal
  if (PCchoiceNumber == 1) { //hvis tallet bliver 1 bliver det sten
    pcChoice = "rock";
  } else if (PCchoiceNumber == 2) { //hvis tallet bliver 2 bliver det papir
    pcChoice = "paper";
  } else if (PCchoiceNumber == 3) { //hvis tallet bliver 3 bliver det saks
    pcChoice = "scissors";
  }
  console.log("PC chose " + pcChoice);
  // 1 = rock
  // 2 = paper
  // 3 = scissors
}

document.querySelector("button.rock").addEventListener("click", chooseRock); //sætter klik på sten-knappen til chooseRock
document.querySelector("button.paper").addEventListener("click", choosePaper); //sætter klik på papir-knappen til choosePaper
document.querySelector("button.scissors").addEventListener("click", chooseScissors); //sætter klik på saks-knappen til chooseScissors

function chooseRock() { //USER CHOICE
    userChoice = "rock";
    console.log("player chose " + userChoice);
    animation();
  }
  
  function choosePaper() { //USER CHOICE
    userChoice = "paper";
    console.log("player chose " + userChoice);
    animation();
  }
  
  function chooseScissors() { //USER CHOICE
    userChoice = "scissors";
    console.log("player chose " + userChoice);
    animation();
  }

  function animation() { //starter shake-animationen
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    console.log("shake");
    setTimeout(findWinner, 2000);
    //findWinner();
  }

  function findWinner() {
    document.querySelector("#player1").classList.remove("shake"); //fjerner shake fra players
    document.querySelector("#player2").classList.remove("shake");

    console.log("finding winner");


  if (pcChoice === "rock") { //hvis PC'en bliver ROCK

    if (userChoice === "rock") { //hvis brugeren vælger ROCK
      document.querySelector("#player1").classList.add("player.rock");
      document.querySelector("#player2").classList.add("player.rock");
      setTimeout(tie, 1000);
      console.log("draw");

    } else if (userChoice === "paper") { //hvis brugeren vælger PAPER
      document.querySelector("#player1").classList.add("player.paper");
      document.querySelector("#player2").classList.add("player.rock");
      setTimeout(win, 1000);
      console.log("you win");

    } else if (userChoice === "scissors") { //hvis brugeren vælger SCISSORS
      document.querySelector("#player1").classList.add("player.scissors");
      document.querySelector("#player2").classList.add("player.rock");
      setTimeout(lose, 1000);
      console.log("you lose");
    }

  } else if (pcChoice == "paper") {
      
    if (userChoice == "rock") {
      document.querySelector("#player1").classList.add("player.rock");
      document.querySelector("#player2").classList.add("player.paper");
      setTimeout(lose, 1000);
      console.log("you lose");
    } else if (userChoice == "paper") {
      document.querySelector("#player1").classList.add("player.paper");
      document.querySelector("#player2").classList.add("player.paper");
      setTimeout(tie, 1000);
      console.log("you tie");
    } else if (userChoice == "scissors") {
      document.querySelector("#player1").classList.add("player.scissors");
      document.querySelector("#player2").classList.add("player.paper");
      setTimeout(win, 1000);
      console.log("you win");
    }
    
  } else if (pcChoice == "scissors") {
    if (userChoice == "rock") {
      document.querySelector("#player1").classList.add("player.rock");
      document.querySelector("#player2").classList.add("player.scissors");
      setTimeout(win, 1000);
      console.log("you win");
    } else if (userChoice == "paper") {
      document.querySelector("#player1").classList.add("player.paper");
      document.querySelector("#player2").classList.add("player.scissors");
      setTimeout(lose, 1000);
      console.log("you lose");
    } else if (userChoice == "scissors") {
      document.querySelector("#player1").classList.add("player.scissors");
      document.querySelector("#player2").classList.add("player.scissors");
      setTimeout(tie, 1000);
      console.log("you tie");
    }
  }
}

function lose() {
    document.querySelector("#lose").classList.remove("hidden");
    setTimeout(restart, 2000);
  }
  
  function win() {
    document.querySelector("#win").classList.remove("hidden");
    setTimeout(restart, 2000);
  }
  
  function tie() {
    document.querySelector("#draw").classList.remove("hidden");
    setTimeout(restart, 2000);
  }
  
  function restart() {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
  
    document.querySelector("#player1").classList.remove("player.rock");
    document.querySelector("#player1").classList.remove("player.paper");
    document.querySelector("#player1").classList.remove("player.scissors");
    document.querySelector("#player2").classList.remove("player.rock");
    document.querySelector("#player2").classList.remove("player.paper");
    document.querySelector("#player2").classList.remove("player.scissors");
  
    randomPCchoice();
  }
  