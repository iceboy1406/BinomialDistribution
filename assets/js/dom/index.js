import handleSubmit from './handleSubmit.js';
import syncQValue from './syncQValue.js';

function watchDOM() {
  syncQValue();
  handleSubmit();
}

export default watchDOM;
