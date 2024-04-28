/**
 * @param {number} p
 * Assume p is between 0-1
 * 
 * Return 1 - p with same precision with p
 * 
 * For example when p is 0.8 its will return 0.2 \n
 * 
 * It's needed because IEEE 754 floating point behavior in Javascript.
 */

function getQ(p) {
  if (p == 1) return 0;
  if (p == 0) return 1;

  const decimalPointLength = p.toString().length - 2;
  return Number((1 - p).toFixed(decimalPointLength));
}

export default getQ;
