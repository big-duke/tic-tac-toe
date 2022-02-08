const MARK_CODES = {
  X: 10005,
  O: 9711,
  EMPTY: 8203,
};

export function markSymbol(mark) {
  switch (mark) {
    case "X":
      return String.fromCharCode(MARK_CODES.X);

    case "O":
      return String.fromCharCode(MARK_CODES.O);

    default:
      return String.fromCharCode(MARK_CODES.EMPTY);
  }
}
