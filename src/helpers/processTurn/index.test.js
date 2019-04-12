import processTurn from '.';

describe('processTurn', () => {
  it('is a pure function and does not modify the board argument', () => {
    const board = [[null, 'X', 'X'], ['O', 'X', 'O'], ['X', 'O', 'O']];
    const position = { row: 0, col: 0 };

    const { updatedBoard } = processTurn(board, position, 'X', 8);

    // make sure they are different in memory
    expect(updatedBoard).not.toBe(board);
    // make sure position is the same
    expect(position).toEqual({ row: 0, col: 0 });
  });

  it('places the player mark', () => {
    const board = [[null, 'X', 'X'], ['O', 'X', 'O'], ['X', 'O', 'O']];
    const position = { row: 0, col: 0 };

    const { updatedBoard } = processTurn(board, position, 'X', 8);

    expect(updatedBoard[0][0]).not.toBe(null);
    expect(updatedBoard[0][0]).toBe('X');
  });

  it('increments the turn and changes the text', () => {
    const board = [[null, null, null], [null, null, null], [null, null, null]];
    const position = { row: 0, col: 0 };

    const { nextTurn, nextMessage } = processTurn(board, position, 'X', 0);
    expect(nextTurn).toBe(1);
    expect(nextMessage).toContain('Player two');
  });
});
