import didWin, { hasWinner } from '.';

describe('didWin', () => {
  it('wins when three in a row horizontally', () => {
    const board = [['X', 'X', 'X'], ['O', 'X', 'O'], ['X', 'O', 'O']];
    expect(didWin(board)).toBe(true);
  });

  it('wins when three in a row diagonally', () => {
    const board = [['O', 'X', 'X'], ['X', 'O', 'O'], ['X', 'O', 'O']];
    expect(didWin(board)).toBe(true);
  });

  it('does not win when full draw on turn 9', () => {
    const board = [['O', 'X', 'X'], ['X', 'O', 'O'], ['X', 'O', 'X']];
    expect(didWin(board)).toBe(false);
  });
});

describe('hasWinner', () => {
  it('returns true when all three args are the same', () => {
    expect(hasWinner(1, 1, 1)).toBe(true);
  });
  it('returns false when one arg is not the same', () => {
    expect(hasWinner(1, 0, 1)).toBe(false);
  });
});
