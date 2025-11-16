let p1Choice = null;
let p2Choice = null;

const p1Img = document.getElementById("p1-img");
const p2Img = document.getElementById("p2-img");
const p1Ready = document.getElementById("p1-ready");
const p2Ready = document.getElementById("p2-ready");
const p1Banner = document.getElementById("p1-banner");
const p2Banner = document.getElementById("p2-banner");
const playAgainBtn = document.getElementById("playAgainBtn");
const resultBox = document.getElementById("result");

const choices = {
  rock: { beats: "scissors", leftImg: "assets/rock_left", rightImg: "assets/rock_right" },
  paper: { beats: "rock", leftImg: "assets/paper_left", rightImg: "assets/paper_right" },
  scissors: { beats: "paper", leftImg: "assets/sci_left", rightImg: "assets/sci_right" }
};

function setChoice(player, choice) {
  if (player === 1) {
    p1Choice = choice;
    p1Ready.classList.add("ready");
  } else {
    p2Choice = choice;
    p2Ready.classList.add("ready");
  }

  if (p1Choice && p2Choice) {
    decideWinner();
  }
}

function decideWinner() {
	
	p1Img.src = choices[p1Choice].leftImg + ".jpg";
    p2Img.src = choices[p2Choice].rightImg + ".jpg";
	
  if (p1Choice === p2Choice) {
    p1Banner.textContent = "TIE";
    p2Banner.textContent = "TIE";
    resultBox.textContent = "It's a tie!";
  } else if (choices[p1Choice].beats === p2Choice) {
    p1Banner.textContent = "WINNER";
    p2Banner.textContent = "LOSER";
    resultBox.textContent = "Player 1 Wins!";
  } else {
    p2Banner.textContent = "WINNER";
    p1Banner.textContent = "LOSER";
    resultBox.textContent = "Player 2 Wins!";
  }

  // Show Play Again button
  playAgainBtn.classList.remove("hidden");
}

// KEY PRESS CONTROLS
window.addEventListener("keydown", (e) => {
  if (!p1Choice) {
    if (e.key === "a" || e.key === "A") setChoice(1, "rock");
    if (e.key === "w" || e.key === "W") setChoice(1, "paper");
    if (e.key === "d" || e.key === "D") setChoice(1, "scissors");
  }

  if (!p2Choice) {
    if (e.key === "ArrowLeft") setChoice(2, "rock");
    if (e.key === "ArrowUp") setChoice(2, "paper");
    if (e.key === "ArrowRight") setChoice(2, "scissors");
  }
  if (e.code === "Space") {
    if (!playAgainBtn.classList.contains("hidden")) {
      playAgainBtn.click();
    }
  }
});

// PLAY AGAIN RESET LOGIC
playAgainBtn.addEventListener("click", function () {
  // Clear choices
  p1Choice = null;
  p2Choice = null;

  // Reset images
  p1Img.src = "assets/question.jpg";
  p2Img.src = "assets/question.jpg";

  // Reset indicators
  p1Ready.classList.remove("ready");
  p2Ready.classList.remove("ready");

  // Reset banners
  p1Banner.textContent = "";
  p2Banner.textContent = "";

  // Reset result text
  resultBox.textContent = "";

  // Hide button
  playAgainBtn.classList.add("hidden");
});
