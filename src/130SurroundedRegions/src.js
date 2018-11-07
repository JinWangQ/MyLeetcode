/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// check boarder, replace "O" and it's neighbor "O" to 1
// the rest "O"s are surrounded by "X"
// replace "O" to "X" and replace 1 to "O"
var solve = function(board) {
    if (board === null || board.length <= 2 || board[0].length <= 2) return;

    const row = board.length,
        col = board[0].length;

    for (let i = 0; i < row; i++) {
        helper(board, i, 0, row, col); //check [0][0] [1][0] [2][0] ... [row-1][0]
        helper(board, i, col - 1, row, col); //check [0][col-1] [1][col-1] [2][col-1] ... [row-1][col-1]
    }

    for (let j = 1; j + 1 < col; j++) {
        helper(board, 0, j, row, col); //check [0][1] [0][2] ... [0][col-2]
        helper(board, row - 1, j, row, col); //check [row-1][1] [row-1][2] ... [row-1][col-2]
    }

    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            } else if (board[i][j] === 1) {
                board[i][j] = "O";
            }
        }
    return board;
};

var helper = (board, i, j, row, col) => {
    if (board[i][j] === "O") {
        board[i][j] = 1;
        if (i > 1)
            helper(board, i - 1, j, row, col);
        if (j > 1)
            helper(board, i, j - 1, row, col);
        if (i + 1 < row)
            helper(board, i + 1, j, row, col);
        if (j + 1 < col)
            helper(board, i, j + 1, row, col);
    }
};


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

//dfs 
//better performance
//replace "O" on the border and their neighbor "O" to "V"(using dfs)
//then "V" -> "O", "O" -> "X"


var solve = function(board) {
    if (board === null || board.length <= 2 || board[0].length <= 2) return;

    const row = board.length,
        col = board[0].length;

    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++) {
            if (i === 0 || j === 0 || i === row - 1 || j === col - 1)
                if (board[i][j] === "O")
                    dfs(board, i, j, row, col);
        }
    let temp;
    for (let i = 0; i < row; i++)
        for (let j = 0; j < col; j++) {
            temp = board[i][j];

            board[i][j] = temp === "V" ? "O" : temp === "O" ? "X" : temp;
        }


    return board;
};

const dfs = (board, i, j, row, col) => {
    if (board[i][j] === "V") return;

    board[i][j] = "V";
    if (i > 0 && board[i - 1][j] === "O") dfs(board, i - 1, j, row, col);
    if (j > 0 && board[i][j - 1] === "O") dfs(board, i, j - 1, row, col);
    if (i < row - 1 && board[i + 1][j] === "O") dfs(board, i + 1, j, row, col);
    if (j < col - 1 && board[i][j + 1] === "O") dfs(board, i, j + 1, row, col);
};