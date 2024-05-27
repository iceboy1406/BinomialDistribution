import formatYLegend from '../util/formatYLegend.js';

function watchBars() {
  const bars = document.querySelectorAll('.graph rect');
  const dataLegend = document.querySelector('.data-legend');
  const dataLegendX = document.querySelector('.data-legend .data-x');
  const dataLegendY = document.querySelector('.data-legend .data-y');

  const xAxises = document.querySelectorAll('.graph text.x-axis');

  if (dataLegend && dataLegendX && dataLegendY) {
    for (const bar of bars) {
      bar.addEventListener('mouseover', (e) => {
        const dataX = e.target.getAttribute('data-x');
        const dataY = e.target.getAttribute('data-y');

        const x = e.target.getAttribute('x').replace('%', '');
        const y = e.target.getAttribute('y').replace('%', '');
        const width = e.target.getAttribute('width').replace('%', '');
        dataLegendX.innerHTML = dataX;
        dataLegendY.innerHTML = `<span class="circle"></span> Peluang: ${formatYLegend(
          Number(dataY),
        )}`;
        dataLegend.setAttribute(
          'style',
          `top: ${100 + Number(y) + 4}%; left: ${Number(x) + 0.5 * width}%;`,
        );
        dataLegend.classList.add('show');
      });

      bar.addEventListener('mouseleave', (e) => {
        if (e.relatedTarget != dataLegend) {
          dataLegend.classList.remove('show');
        }
      });
    }

    for (const xAxis of xAxises) {
      xAxis.addEventListener('mouseover', (e) => {
        const dataX = e.target.getAttribute('data-x');
        const dataY = e.target.getAttribute('data-y');

        const x = e.target.getAttribute('x').replace('%', '');
        dataLegendX.innerHTML = dataX;
        dataLegendY.innerHTML = `<span class="circle"></span> Peluang: ${formatYLegend(
          Number(dataY),
        )}`;
        dataLegend.setAttribute('style', `top: 82.5%; left: ${x}%;`);
        dataLegend.classList.add('show');
      });

      xAxis.addEventListener('mouseleave', (e) => {
        if (e.relatedTarget != dataLegend) {
          dataLegend.classList.remove('show');
        }
      });
    }

    dataLegend.addEventListener('mouseleave', (e) => {
      if (
        e.relatedTarget.nodeName != 'rect' ||
        e.relatedTarget.nodeName != 'text'
      ) {
        dataLegend.classList.remove('show');
      }
    });
  }
}

export default watchBars;
