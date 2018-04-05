/**
 * @param {character[][]} board
 * @return {boolean}
 * ---------
 * scan the board, use three 2-dimentional array to record the exist
 * number of the row, column and subbox
 */
var isValidSudoku = function(board) {
	let row = twodarr(),
		col = twodarr(),
		subbox = twodarr();
	for (let i = 0; i < board.length; ++i)
		for (let j = 0; j < board[i].length; ++j)
			if (board[i][j] != '.') {
				let num = board[i][j] - 1,
					//if the number in board is 8, it actually stores at index[7]
					k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
				//calculte the number of subbox
				// 0 1 2
				// 3 4 5
				// 6 7 8
				if (row[i][num] || col[j][num] || subbox[k][num])
					return false;
				row[i][num] = 1;
				col[j][num] = 1;
				subbox[k][num] = 1;
			}
	return true;
};

var twodarr = function() {
	let arr = new Array(9);
	for (let i = 0; i < 9; i++)
		arr[i] = new Array(9);
	for (i = 0; i < 9; i++)
		for (let j = 0; j < 9; j++)
			arr[i][j] = 0;
	return arr;
};