function userchoice(choice) {
  document.querySelector(".hands").style.display = "none";
  document.querySelector(".contest").style.display = "flex";
  var botchoice = ["rock", "paper", "scissors"][bot()];
  console.log(botchoice); //tosee computer choice
  document.getElementById("userimageid").src = uimage(choice);
  document.getElementById("botimageid").src = bimage(botchoice);
  document.getElementById("finalmessage").innerText = result(choice, botchoice);
}

function result(mychoice, computerchoice) {
  var m;
  m = winner(mychoice, computerchoice);
  if (m[0] == 0) {
    var s = document.getElementById("scorecard").innerText;
    s = Number(s);
    s = s - 1;
    document.getElementById("scorecard").innerText = s;
    return "You Lose!";
  } else if (m[0] == 0.5) {
    return "Tied!";
  } else if (m[0] == 1) {
    var s = document.getElementById("scorecard").innerText;
    s = Number(s);
    s = s + 1;
    document.getElementById("scorecard").innerText = s;
    return "You Win!";
  }
}

function winner(mychoice, computerchoice) {
  var show = {
    rock: { rock: 0.5, paper: 0, scissors: 1 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };
  var myscore = show[mychoice][computerchoice];
  console.log(myscore);
  var computerscore = show[computerchoice][mychoice];
  console.log(computerscore);
  console.log(myscore, computerscore);
  return [myscore, computerscore];
}

function bimage(computerchoice) {
  var mine = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png",
  };
  if (computerchoice == "rock") {
    return mine["rock"];
  } else if (computerchoice == "paper") {
    return mine["paper"];
  } else if (computerchoice == "scissors") {
    return mine["scissors"];
  }
}

function uimage(mychoice) {
  var mine = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png",
  };
  if (mychoice == "rock") {
    return mine["rock"];
  } else if (mychoice == "paper") {
    return mine["paper"];
  } else if (mychoice == "scissors") {
    return mine["scissors"];
  }
}

function bot() {
  return Math.floor(Math.random() * 3);
}

//button js
function reset() {
  document.querySelector(".hands").style.display = "flex";
  document.querySelector(".contest").style.display = "none";
}
