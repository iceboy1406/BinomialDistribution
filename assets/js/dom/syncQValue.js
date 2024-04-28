import getQ from '../util/getQ.js';
import { qInput, pInput } from './domElements.js';

/**
 * Synchronize value of q when p changed, value of q is 1 - p
 */
function syncQValue() {
  pInput.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
      if (Number(value) >= 0 && Number(value) <= 1) {
        qInput.value = getQ(Number(value)).toString();
      }
    } else {
      qInput.value = '';
    }
  });
}

export default syncQValue;
