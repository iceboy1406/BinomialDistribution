import formatYLegend from '../util/formatYLegend.js';

function watchBars() {
  const bars = document.querySelectorAll('.graph rect');
  const dataLegend = document.querySelector('.data-legend');
  const dataLegendX = document.querySelector('.data-legend .data-x');
  const dataLegendY = document.querySelector('.data-legend .data-y');

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
          `top: ${(100 + Number(y)) * 5.25 + 20}px; left: ${
            (Number(x) + 0.5 * Number(width)) * 10
          }px;`,
        );
        dataLegend.classList.add('show');
      });

      bar.addEventListener('mouseout', (e) => {
        if (e.relatedTarget != dataLegend) {
          dataLegend.classList.remove('show');
        }
      });
    }
    dataLegend.addEventListener('mouseout', (e) => {
      console.log('mouse out', { r: e.relatedTarget.nodeName });
      if (e.relatedTarget.nodeName != 'rect') {
        dataLegend.classList.remove('show');
      }
    });
  }
}

export default watchBars;
