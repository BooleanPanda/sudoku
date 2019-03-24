module.exports = function solveSudoku(matrix) {
  
  function solve (matrix) {
    let loc = find (matrix);
    let row = loc[0];
    let col = loc[1];
    if (row===9){
      return true;
    } 
    for (let num = 1; num<10; num++) {
      if (rowCheck(matrix, row, num) && columnCheck(matrix, col, num) && boxCheck(matrix, row, col, num)) {
        matrix[row][col]=num;
        if (solve(matrix)) {
          return true;
        } else {
          matrix[row][col]=0;
        }
      }
    }
  }

  solve(matrix);
  return matrix;

  function find(matrix){
    for (let row = 0; row<9; row++) {
      for (let col =0; col<9; col++){
        if (matrix[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return [9];
  }
  
  function rowCheck(matrix, row, num) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] == num) {
        return false;
      }
    }
    return true;
  }

  function columnCheck(matrix, col, num) {
    for (let row = 0; row < 9; row++)
        if (matrix[row][col] == num) {
          return false;
        }
    return true;    
  }

  function boxCheck(matrix, row, col, num) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
    for (let r = 0; r < 3; r++) {
      for (var c = 0; c < 3; c++){
        if (matrix[row + r][col + c] == num){
          return false;
        }
      }
    }
    return true;
  }
}