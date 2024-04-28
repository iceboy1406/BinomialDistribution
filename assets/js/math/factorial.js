/**
 * Getting factorial of x, its return x!
 * @param {number} x - 
 * @returns {number}
 */
function factorial(x) {
  if (x == 0) return 1;
  if (x == 1) return 1;

  return x * factorial(x - 1);
}

export default factorial;
