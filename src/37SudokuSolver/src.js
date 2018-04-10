/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
	if (board == null || board.length === 0)
		return;
	solve(board);
};

var solve = function(board) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] == '.') {
				for (let c = '1'; c <= '9'; c++) {
					// check if c is valid in row, col and subbox
					if (isValidSudoku(board, i, j, c)) {
						board[i][j] = c.toString();

						if (solve(board))
							return true;
						else
							board[i][j] = '.';
					}
				}
				return false;
			}
		}
	}
	return true;
};

var isValidSudoku = function(board, row, col, c) {
	for (let i = 0; i < 9; i++) {
		if (board[i][col] != '.' && board[i][col] == c) return false; // check row
		if (board[row][i] != '.' && board[row][i] == c) return false; // check col
		let k = 3 * Math.floor(row / 3) + Math.floor(i / 3),
			l = 3 * Math.floor(col / 3) + i % 3;
		if (board[k][l] != '.' && board[k][l] == c) return false; // check subbox

		//e.g (row = 0, col = 0)
		//row[0,0][1,0][2,0][3,0][4,0][5,0]...
		//col[0,0][0,1][0,2][0,3][0,4][0,5]...
		//box[0,0][0,1][0,2][1,0][1,1][1,2][2,0][2,1][2,2]
	}
	return true;
};