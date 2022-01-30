const subTitle = document.getElementById("randomPhrase");

const subTitles = [
  "Quel gioco con i sassi",
  "Rated 5/10 on multiplayer.it",
  "Divertiti, è un gioco!",
  "Il record assoluto è di by xX_TrustedInstaller_Xx con undefined Punti!",
  "Secondo me esce carta",
  "Ma una volta non c'era la candela?",
  "Ma è forbici o forbice?",
  "Il DNS, l'HTTP...",
  "Ciao gamer, facciamo un gioco!",
  "Ci sono un paio di easter egg, trovali tutti!"
];

function randomPhrase() {
  subTitle.classList.toggle("hide");
  subTitle.innerHTML = subTitles[Math.floor(Math.random() * subTitles.length)];

  setTimeout(randomPhrase, 1400);
}
randomPhrase();

const cmd = document.getElementById("cmd");
const form = document.getElementById("consoleForm");
const hint = document.getElementById("hint");

form.addEventListener("submit", function (e) {
  let arg = "";
  e.preventDefault();
  cmd.placeholder = "Type a command or use 'play' to play the game";

  if (cmd.value.includes("play") || cmd.value.includes("gioca")) {
    //Play the game

    //Arguments
    if (cmd.value.includes("--win")) {
      arg = "win"; //Always win
    } else if (cmd.value.includes("--impossible")) {
      arg = "impossible"; //Never Win
    }
    //Redirect
    window.location.href = "./game.html" + (arg ? "?args=" + arg : "");
  }

  //help
  if (cmd.value === "help") {
    hint.classList.toggle("hidden");
  }

  //su easter egg
  if (cmd.value === "su") {
    cmd.placeholder = "check console for a surprise 🤫";

    console.log(
      "%cAccess to mainframe granted",
      "color: green; font-size: x-large; font-weight: bold"
    );
    console.log("Just kidding, non sei dentro 🤡");
  }

  //sudo rm -rf /
  if (cmd.value === "sudo rm -rf /") {
    //Remove the main div
    const e = document.getElementsByClassName("main")[0];
    e.remove();
    //Remove background
    const body = document.getElementsByTagName("body")[0];
    body.style.background = "black";

    // Create error element
    const error = document.createElement("span");
    error.classList.add("typewriter");
    error.innerText =
      'server@root ~ $ FATAL ERROR: Unable to find <div class="Main">.';

    //request F11
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.webkitRequestFullscreen) {
      /* Safari */
      body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) {
      /* IE11 */
      body.msRequestFullscreen();
    }

    //Put error on screen
    body.appendChild(error);
  }

  cmd.value = "";
});
