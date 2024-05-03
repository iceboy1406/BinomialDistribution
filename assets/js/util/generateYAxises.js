/**
 * Generate Y Axises of probability, calculate for get minimum 4 axises
 * @param {number} max - Maximum probability from 0.0 - 1.0
 * @return {string[]}
 */
function generateYAxises(max) {
  let increment = 0.1;
  let precision = 1;

  if (max <= 0.1) {
    increment = 0.0125;
    precision = 4;
  } else if (max <= 0.2) {
    increment = 0.025;
    precision = 3;
  } else if (max <= 0.4) {
    increment = 0.05;
    precision = 2;
  }

  const result = [];
  for (let i = 0.0; i <= max; i += increment) {
    result.push(i.toFixed(precision));
  }

  return result;
}

export default generateYAxises;
