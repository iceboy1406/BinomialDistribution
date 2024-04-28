import binomialProbability from './binomialProbability.js';

/**
 * @typedef BinomialProbability
 * @type {object}
 * @property {number} x - Number of successes
 * @property {number} b - The Binomial Probability
 */

/**
 * Generate Binomial Probability Distribution for 0 <= x <= n
 * @param {number} n - the number of trials
 * @param {number} p - probability of getting success
 * @returns {BinomialProbability[]}
 */
function generateBinomialProbabilityDistribution(n, p) {
  const result = [];
  for (let x = 0; x <= n; x ++) {
    result.push({ x, b: binomialProbability(n, x, p) });
  }

  return result;
}

export default generateBinomialProbabilityDistribution;
