const t = require('./index');

beforeEach(() => {
	t.resetScore();
});

test('Score should be Love all', () => {
	expect(t.getScore()).toEqual('Love all');
});

test('Player1 score should be 15 after player1 scores', () => {
	t.player1score();
	expect(t.getPlayer1score()).toEqual('15');
});

test('Score should be 15 love after player 1 has scored', () => {
	t.player1score();
	expect(t.getScore()).toEqual('15 Love');
});

test('Score should be 15 all after both players have scored', () => {
	t.player1score();
	t.player2score();
	expect(t.getScore()).toEqual('15 all');
});

test('Score should be Love 15 after player 2 has scored first', () => {
	t.player2score();
	expect(t.getScore()).toEqual('Love 15');
});

test('Player1 score should be 30 when scored twice', () => {
	t.player1score();
	t.player1score();
	expect(t.getPlayer1score()).toEqual('30');
});

test('Score should be 30 Love after player one scores twice', () => {
	t.player1score();
	t.player1score();
	expect(t.getScore()).toEqual('30 Love');
});

test('Player2 score should be 30 when scored twice', () => {
	t.player2score();
	t.player2score();
	expect(t.getPlayer2score()).toEqual('30');
});

test('Score should be Love 30 after player two scores twice', () => {
	t.player2score();
	t.player2score();
	expect(t.getScore()).toEqual('Love 30');
});

test('Score should be 15 30 after player two scores twice', () => {
	t.player1score();
	t.player2score();
	t.player2score();
	expect(t.getScore()).toEqual('15 30');
});

test('Score should be 40 Love after player one scores thrice', () => {
	t.player1score();
	t.player1score();
	t.player1score();
	expect(t.getScore()).toEqual('40 Love');
});

test('Score should be Deuce after each player scores thrice', () => {
	t.player2score();
	t.player2score();
	t.player2score();
	t.player1score();
	t.player1score();
	t.player1score();
	expect(t.getScore()).toEqual('Deuce');
});

test('Deuce and place 1 scores', () => {
	t.player2score();
	t.player2score();
	t.player2score();
	t.player1score();
	t.player1score();
	t.player1score();
	t.player1score();
	expect(t.getScore()).toEqual('Player 1 advantage');
});

test('Player one scores 4 times and wins the game', () => {
	t.player1score();
	t.player1score();
	t.player1score();
	t.player1score();
	expect(t.getScore()).toEqual('Game player 1');
});

test('Player two scores 4 times and wins the game', () => {
	t.player2score();
	t.player2score();
	t.player2score();
	t.player2score();
	expect(t.getScore()).toEqual('Game player 2');
});

test('Deuce and place 2 scores', () => {
	t.player2score();
	t.player2score();
	t.player2score();
	t.player1score();
	t.player1score();
	t.player1score();
	t.player2score();
	expect(t.getScore()).toEqual('Player 2 advantage');
});
