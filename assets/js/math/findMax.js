/**
 * @typedef BinomialProbability
 * @type {object}
 * @property {number} x - Number of successes
 * @property {number} b - The Binomial Probability
 */

/**
 * Find maximum value of binomial probability distributions
 * @param {BinomialProbability[]} binomialProbabilities - binomial probability distributions
 * @return {BinomialProbability}
 */
function findMax(binomialProbabilities) {
  let max = { x: 0, b: 0 };
  binomialProbabilities.forEach((binomialProbability) => {
    if (binomialProbability.b > max.b) {
      max = binomialProbability;
    }
  });

  return max;
}

export default findMax;
