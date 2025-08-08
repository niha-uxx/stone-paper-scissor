
// --- Stone Paper Scissors Game Logic ---
const choices = [
	{ name: "Stone", icon: "🗿" },
	{ name: "Paper", icon: "📄" },
	{ name: "Scissors", icon: "✂️" }
];

let playerScore = 0;
let computerScore = 0;

const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultP = document.getElementById("result");
const scoreSpan = document.getElementById("score");

function getComputerChoice() {
	const idx = Math.floor(Math.random() * 3);
	return choices[idx];
}

function getResult(player, computer) {
	if (player.name === computer.name) return "Draw!";
	if (
		(player.name === "Stone" && computer.name === "Scissors") ||
		(player.name === "Paper" && computer.name === "Stone") ||
		(player.name === "Scissors" && computer.name === "Paper")
	) {
		playerScore++;
		return "You Win!";
	} else {
		computerScore++;
		return "You Lose!";
	}
}

function play(playerChoiceName) {
	const player = choices.find(c => c.name === playerChoiceName);
	const computer = getComputerChoice();
	playerChoiceSpan.textContent = player.icon + " " + player.name;
	computerChoiceSpan.textContent = computer.icon + " " + computer.name;
	const result = getResult(player, computer);
	resultP.textContent = `Result: ${result}`;
	scoreSpan.textContent = `${playerScore} - ${computerScore}`;
}

document.getElementById("stone-btn").addEventListener("click", () => play("Stone"));
document.getElementById("paper-btn").addEventListener("click", () => play("Paper"));
document.getElementById("scissors-btn").addEventListener("click", () => play("Scissors"));

document.getElementById("reset-btn").addEventListener("click", () => {
	playerScore = 0;
	computerScore = 0;
	playerChoiceSpan.textContent = "-";
	computerChoiceSpan.textContent = "-";
	resultP.textContent = "Result: -";
	scoreSpan.textContent = "0 - 0";
});
