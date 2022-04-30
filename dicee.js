var dices = [
	"images/dice1.png",
	"images/dice2.png",
	"images/dice3.png",
	"images/dice4.png",
	"images/dice5.png",
	"images/dice6.png",
];
var player1num = Math.floor(Math.random() * 6);
var player2num = Math.floor(Math.random() * 6);
document.querySelector(".img1").setAttribute("src", dices[player1num]);
document.querySelector(".img2").setAttribute("src", dices[player2num]);
if (player1num > player2num) {
	document.querySelector(".container h1").textContent = "Player1 Wins";
} else if (player2num > player1num) {
	document.querySelector(".container h1").textContent = "Player2 Wins";
} else {
	document.querySelector(".container h1").textContent = "Tie";
}
