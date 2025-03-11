export function calculateScore(serializedScore: string): number {
  let total = 0;
  let spares = 0;
  let strikes = 0;
  for (const attempt of serializedScore) {
    const extra = (spares + strikes) * 10;
    spares = Math.max(0, spares - 1);
    strikes = Math.max(0, strikes - 1);
    if (attempt === "X") {
      total = total + 10;
      strikes = strikes + 2;
    } else if (attempt === "/") {
      total = total + 10;
      spares = spares + 1;
    } else if (attempt === "-") {
      continue;
    } else {
      total = total + Number(attempt);
    }
    total = total + extra;
  }
  return total;
}
