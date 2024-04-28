import { form } from './domElements.js';
import visualize from './visualize.js';
function handleSubmit() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    visualize(formProps.n, formProps.p);
  });
}

export default handleSubmit;
