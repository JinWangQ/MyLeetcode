/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	let rows = board.length,
		cols = board[0].length;

	// string -> char array
	let w_array = word.split('');

	if (w_array.length > rows * cols) return false;

	for (let i = 0; i < rows; i++)
		for (let j = 0; j < cols; j++) {
			if (exist_helper(board, i, j, w_array, 0)) return true;
		}
	return false
};

var exist_helper = function(board, i, j, word, n) {
	//match the word
	if (n == word.length) return true;
	//beyond the board
	if (i < 0 || j < 0 || i == board.length || j == board[i].length) return false;
	//cannot find current character
	if (board[i][j] != word[n]) return false;
	//mark the used character from board since A-Z(65-90) a-z(97-122) after ^(XOR) operation, we got a non English character at that position
	board[i][j] = String.fromCodePoint(board[i][j].codePointAt(0) ^ 256);
	let res = exist_helper(board, i, j + 1, word, n + 1) ||
		exist_helper(board, i, j - 1, word, n + 1) ||
		exist_helper(board, i - 1, j, word, n + 1) ||
		exist_helper(board, i + 1, j, word, n + 1);
	//mark back the original character, that's why use ^(XOR) operation
	board[i][j] = String.fromCodePoint(board[i][j].codePointAt(0) ^ 256);
	return res;



};