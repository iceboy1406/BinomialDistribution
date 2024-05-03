/**
 * Get min and max x to visualize (not all x being visualized)
 * @param {number} n - the number of trials
 * @param {number} p - probability of getting success
 * @param {number} maxX - maximum x
 * @param {number} maxData - maximum data length
 * @return {{start : number, end : number}}
 */
function getDataRange(n, p, maxX, maxData) {
  if (n <= maxData) return { start: 0, end: n };
  return { start : maxX - Math.round(p * maxData), end : maxX + Math.round((1 - p) * maxData) };
}

export default getDataRange;
