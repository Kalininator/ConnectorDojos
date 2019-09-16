let p1score = 0;
let p2score = 0;

function formatScore(score) {
	const scores = ['Love', '15', '30', '40'];
	return scores[score];
}
function getPlayer1score() {
	return formatScore(p1score);
}

function getPlayer2score() {
	return formatScore(p2score);
}

function score(playerScore) {
	// if (playerScore === 30) {
	// 	return playerScore + 10;
	// }
	return playerScore + 1;
}

function player1score() {
	p1score = score(p1score);
}

function player2score() {
	p2score = score(p2score);
}

function getScore() {
	if (p1score === 4 && p2score < 3) {
		return 'Game player 1';
	}
	if (p2score === 4 && p1score < 3) {
		return 'Game player 2';
	}
	if (p2score === 4 && p1score === 3) {
		return 'Player 2 advantage';
	}
	if (p1score + p2score === 7) {
		return 'Player 1 advantage';
	}
	if (p1score === p2score) {
		if (p1score === 3) {
			return 'Deuce';
		}
		return `${formatScore(p1score)} all`;
	}
	return `${formatScore(p1score)} ${formatScore(p2score)}`;
}
function resetScore() {
	p1score = 0;
	p2score = 0;
}

module.exports = {
	player1score,
	player2score,
	getScore,
	getPlayer1score,
	getPlayer2score,
	resetScore,
};
