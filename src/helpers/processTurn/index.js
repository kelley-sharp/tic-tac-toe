function processTurn(board, position, player, turn) {
  //make a deep copy of the current board.
  let updatedBoard = board.map(row => row.map(val => val));

  //put the player mark in place in the new board
  updatedBoard[position.row][position.col] = player;

  //change the player mark to the next player
  let nextPlayer = player === 'X' ? 'O' : 'X';

  //update the message
  let nextMessage =
    player === 'O'
      ? 'Player one (X) - make your move!'
      : 'Player two (O) - make your move!';

  //update the turn
  let nextTurn = turn + 1;

  //return an object containing updated state information
  return { updatedBoard, nextPlayer, nextMessage, nextTurn };
}

export default processTurn;
