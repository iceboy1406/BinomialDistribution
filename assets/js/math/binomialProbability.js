import getQ from '../util/getQ.js';
import factorial from './factorial.js';

/**
 * @param {number} n - the number of trials
 * @param {number} x - the numbers of success
 * @param {number} p - probability of getting success
 * @returns {number}
 */
function binomialProbability(n, x, p) {
  // nCx
  const combination = factorial(n) / (factorial(x) * factorial(n - x));
  // p^x
  const px = Math.pow(p, x);
  // q^(n-x) = (1-p)^(n-x)
  const qnx = Math.pow(getQ(p), n - x);
  
  return combination * px * qnx;
}

export default binomialProbability;
