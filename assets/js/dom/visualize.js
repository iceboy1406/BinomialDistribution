import { graph, visualizationSection, yAxisList } from '../dom/domElements.js';
import generateBinomialProbabilityDistribution from '../math/binomialProbabilityDistribution.js';
import generateYAxises from '../util/generateYAxises.js';
import getDataRange from '../math/getDataRange.js';
import watchBars from './watchBars.js';

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
  const range = getDataRange(n, p, max.x, 40);
  const sampleFromResult = result.slice(range.start, range.end + 1);

  // Show visualization section (before it's hidden)
  visualizationSection.classList.add('show');
  // Y axis plots number
  yAxisList.innerHTML = yAxises
    .map((data) => `<p class="y-axis">${data}</p>`)
    .join('');

  // Reset graph contents before add new data
  graph.innerHTML = '';
  // Draw y plot lines
  graph.innerHTML += yAxises
    .map(
      (_, index) =>
        `<line x1="0%" x2="100%" y1="-${
          (index / (yAxises.length - 1)) * 95 + 5
        }%" y2="-${
          (index / (yAxises.length - 1)) * 95 + 5
        }%" stroke="#1e293b" strokeLength="1" />`,
    )
    .join('');
  // Draw y axis line
  graph.innerHTML += `<line x1="0%" x2="0%" y1="-5%" y2="-100%" stroke="#1e293b" strokeLength="1" />`;

  // X Axis numbers
  graph.innerHTML += sampleFromResult
    .map((data, index) => {
      const biggestData = sampleFromResult[sampleFromResult.length - 1].x;

      let fontSize = biggestData < 10 ? 16 : 12;
      let textWidth = biggestData < 10 ? 9.61 : 7.2;

      return `<text
      x="${
        index * (100 / sampleFromResult.length) +
        50 / sampleFromResult.length -
        0.05 * (String(data.x).length * textWidth)
      }%"
      y="0%"
      fill="#334155"
      font-size="${fontSize}px"
      data-y="${data.b}"
      data-x="${data.x}"
      class="x-axis"
    >${data.x}</text>`;
    })
    .join('');

  // Draw bars
  graph.innerHTML += sampleFromResult
    .map(
      (data, index) =>
        `<rect
          width="${(4 / 6) * (100 / sampleFromResult.length)}%"
          height="${(data.b / maxYCeiled) * 95}%"
          x="${
            index * (100 / sampleFromResult.length) +
            (1 / 6) * (100 / sampleFromResult.length)
          }%"
          y="-${(data.b / maxYCeiled) * 95 + 5}%"
          fill="#6366f1"
          style="--data-h-animate: ${
            (data.b / maxYCeiled) * 95
          }%; --data-y-animate: -${(data.b / maxYCeiled) * 95 + 5}%;"
          data-y="${data.b}"
          data-x="${data.x}"
          class="animate"
        />`,
    )
    .join('');

    watchBars();
}

export default visualize;
