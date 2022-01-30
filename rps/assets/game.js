const url = new URL(window.location.href);
const arg = url.searchParams.get("args");
const cpu = document.getElementById("CPU");
const form = document.getElementById("playForm");
const playBtn = document.getElementsByClassName("neon-button")[0];
const title = document.getElementById("title");
const userScore = document.getElementById("userScore");
const cpuScore = document.getElementById("cpuScore");

switch (arg) {
  case "win":
    console.log("you will always win");
    break;

  case "impossible":
    console.log("you will always lose");
    break;

  default:
    console.log("si gioca fr");
    break;
}

function blinkCPU() {
  cpu.classList.toggle("hidden");
  setTimeout(blinkCPU, 500);
}

blinkCPU();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Verify that input is not empty

  if (!document.querySelector('input[name="play"]:checked')) {
    playBtn.classList.toggle("shake");
    playBtn.addEventListener("animationend", () => {
      playBtn.classList.remove("shake");
    });
  } else {
    //If user has selected

    //user selection
    const userPlay = document.querySelector('input[name="play"]:checked').value;

    //Clear all timeouts
    var id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    //Restore CPU Txt Style
    cpu.classList.remove("hidden");

    //Print result

    console.log(userPlay);

    //Possible Computer plays
    const plays = ["rock", "paper", "scissors"];

    let cpuPlay = "";

    //Get play to make user Win
    function getWin(userPlay) {
      switch (userPlay) {
        case "rock":
          cpuPlay = "scissors";
          break;

        case "paper":
          cpuPlay = "rock";
          break;
        case "scissors":
          cpuPlay = "paper";
          break;

        default:
          break;
      }
      return cpuPlay;
    }

    //Get play to make user Lose
    function getLose(userPlay) {
      switch (userPlay) {
        case "rock":
          cpuPlay = "paper";
          break;

        case "paper":
          cpuPlay = "scissors";
          break;
        case "scissors":
          cpuPlay = "rock";
          break;

        default:
          break;
      }
      return cpuPlay;
    }

    //Check for arguments
    switch (arg) {
      case "win":
        console.log("you will always win");
        cpuPlay = getWin(userPlay);
        break;

      case "impossible":
        console.log("you will always lose");
        cpuPlay = getLose(userPlay);
        break;

      default:
        console.log("si gioca fr");
        cpuPlay = plays[Math.floor(Math.random() * plays.length)];
        break;
    }

    cpu.innerHTML = "CPU Draws: " + cpuPlay;

    // Game cases and point assignments
    switch (userPlay + cpuPlay) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        console.log("user wins");
        parseInt(userScore.innerHTML) < 91
          ? (userScore.innerHTML = parseInt(userScore.innerHTML) + 1)
          : null;
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        console.log("computer wins");
        cpuScore.innerHTML = parseInt(cpuScore.innerHTML) + 1;
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        console.log("draw");
        break;
    }

    if (parseInt(userScore.innerHTML) > 10) {
      userScore.classList.add("yellow");
      if (parseInt(userScore.innerHTML) > 25) {
        userScore.classList.remove("yellow");
        userScore.classList.add("orange");
        if (parseInt(userScore.innerHTML) > 50) {
          userScore.classList.remove("orange");
          userScore.classList.add("red");
          if (parseInt(userScore.innerHTML) > 90) {
            userScore.classList.remove("red");
            userScore.classList.add("opShake");
            userScore.innerHTML = "IT'S OVER 9000";
          }
        }
      }
    }
  }
});
