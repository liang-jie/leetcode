/**
 * 数学的分拆数实验代码
 */
var spiralOrder = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    for(let r = 0; r < row/2 && r < col/2; r++) {
        let endRow = row - r - 1;
        let endCol = col - r - 1;
        for(let i = r; i <= endCol; i++) {
            console.log(matrix[r][i]);
        }

        for(let i = r + 1; i <= endRow; i++) {
            console.log(matrix[i][col - 1 -r]);
        }

        if (r < endRow && r < endCol) {
            for(let i = endCol - 1; i >= r; i--) {
                console.log(matrix[row - 1 -r][i]);
            }
            for(let i = endRow - 1; i > r; i--) {
                console.log(matrix[i][r]);
            }
        }
    }
};


// loop([
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ])
loop([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],
    [17,18,19,20]
])