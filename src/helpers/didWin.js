export function didWin(board) {
  /* check rows and columns */
  for (let i = 0; i < board.length; i++) {
    //rows
    if (hasWinner(board[i][0], board[i][1], board[i][2])) {
      return true;
    }
    //columns
    if (hasWinner(board[0][i], board[1][i], board[2][i])) {
      return true;
    }
  }

  /* check diagonals */
  // left to right
  if (hasWinner(board[0][0], board[1][1], board[2][2])) {
    return true;
  }

  // right to left
  if (hasWinner(board[0][2], board[1][1], board[2][0])) {
    return true;
  }

  //no winner at this time
  return false;
}

function hasWinner(slot1, slot2, slot3) {
  // check if any of the three necessary slots are empty squares
  if (!slot1 || !slot2 || !slot3) {
    return false;
  }

  // when all slots have a value, return true if those values are equivalent
  return slot1 === slot2 && slot2 === slot3;
}
