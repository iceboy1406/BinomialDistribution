import { graph, yAxisList } from '../dom/domElements.js';
import generateBinomialProbabilityDistribution from '../math/binomialProbabilityDistribution.js';
import findMax from '../math/findMax.js';
import formatYLegend from '../util/formatYLegend.js';
import generateYAxises from '../util/generateYAxises.js';
import getDataRange from './getDataRange.js';

/**
 * Visualize the Binomial Probability Distribution
 * @param {number} n - the number of trials
 * @param {number} p - probability of getting success
 */
function visualize(n, p) {
  const result = generateBinomialProbabilityDistribution(n, p);
  const max = findMax(result);
  const maxYCeiled = Math.ceil(max.b * 10) / 10;
  const yAxises = generateYAxises(maxYCeiled);
  const range = getDataRange(n, p, max.x);

  yAxisList.innerHTML = yAxises
    .map((data) => `<p class="y-axis">${data}</p>`)
    .join('');

  graph.innerHTML = '';
  graph.innerHTML += result
    .slice(range.start, range.end + 1)
    .map(
      (data) =>
        `<div class="block" style="height: ${(data.b / maxYCeiled) * 100}%">
        <div class="data">
          <div class="data-legend">
            <p class="data-x">${data.x}</p>
            <p class="data-y">
              <span class="circle"></span> Peluang: ${formatYLegend(data.b)}
            </p>
          </div>
          <p class="x-axis">${data.x}</p>
        </div>
      </div>`,
    )
    .join('');
  graph.innerHTML += `
    <div class="graph-lines">
      ${yAxises
        .map(
          (data) =>
            `<div class="graph-line${data == '0.0' ? 'zero' : ''}"></div>`,
        )
        .join('')}
    </div>
  `;
}

export default visualize;
