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
  const yAxises = generateYAxises(Math.ceil(max.b * 10) / 10);
  const range = getDataRange(n, p, max.x);

  yAxisList.innerHTML = yAxises
    .map((data) => `<p class="y-axis">${data}</p>`)
    .join('');

  graph.innerHTML = result
    .slice(range.start, range.end + 1)
    .map(
      (data) =>
        `<div class="block" style="height: ${(data.b / max.b) * 100}%">
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
}

export default visualize;
