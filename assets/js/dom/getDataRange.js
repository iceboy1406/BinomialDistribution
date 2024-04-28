/**
 *
 * @param {number} n - the number of trials
 * @param {number} p - probability of getting success
 * @param {number} maxX - maximum x
 * @return {{start : number, end : number}}
 */
function getDataRange(n, p, maxX) {
  if (n <= 30) return { start: 0, end: n };
  let start, end;
  if (p == 0.5) {
    start = maxX - 15;
    end = maxX + 15;
  } else if (p < 0.5) {
    start = Math.max(maxX - Math.round(p * 30), 0);
    end = start + 30;
  } else {
    end = Math.min(maxX + Math.round(p * 30), n);
    start = end - 30;
  }

  return { start, end };
}

export default getDataRange;
