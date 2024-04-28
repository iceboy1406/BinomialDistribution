/**
 * @param {number} b - binomial probability (0.0 - 1.0)
 */

function formatYLegend(b) {
  if (b == 1) return '1.0';
  if (b == 0) return '0.0';

  const decimalPointLength = b.toString().length - 2;
  const candidate = b.toFixed(Math.min(decimalPointLength, 6));

  // confirm that no 0 at the end even after set precision to 6
  return candidate.replace(/\.?0*$/, '');
}

export default formatYLegend;
