import './line.scss';
import { getState } from '../../../store';
import { getAllExpense, numberFormat, getDateAverage } from '../../../utils';

const Line = (dayHistory, dateAverage) => {
  const currentMonth = getState('currentMonth');
  const lastDate = new Date('2020', currentMonth, 0).getDate();
  const monthHistory = getState('monthHistory');
  const monthExpense = getAllExpense(monthHistory);

  let xLabel = [];
  for (let i = 1; i <= lastDate; i++) {
    if (i % 5 === 1) {
      xLabel = [...xLabel, i];
    }
  }

  let yLabel = [];
  for (let i = 0; i <= 10; i++) {
    yLabel = [...yLabel, i * (monthExpense / 10)];
  }

  // 데이터 형태 => x 초기 100, y 초기 190
  let data = [];
  for (let i = 1; i <= lastDate; i++) {
    if (dayHistory[i]) {
      // console.log(dayHistory[i]);
      // console.log((190 * yLabel[1]) / dayHistory[i]);
      data = [...data, `${100 + (i - 1) * 10},${(210 * yLabel[1]) / dayHistory[i]}`];
    }else {
      data = [...data, `${100 + (i - 1) * 10},210`];
    }
  }

  console.log(dateAverage);
  const averageY = ((210 * yLabel[2]) / parseInt(dateAverage));
  console.log(yLabel[1], averageY);

  const yMax = 30 + (yLabel.length - 1) * 20;
  return `
    <div class="line">
        <svg viewBox="0 0 500 250" class="chart">
            <g class="grid y-grid" id="yGrid">
              ${yLabel
                .map(
                  (item, index) =>
                    `<line x1="50" x2="500" y1=${yMax - (index + 1) * 20} y2=${
                      yMax - (index + 1) * 20
                    }></line>`
                )
                .join('')}
                <line x1="50" x2="500" y1=${averageY} y2=${averageY} stroke-dasharray="5,5" stroke='#29b7ae'></line>
              <line x1="50" x2="500" y1=${yMax} y2=${yMax} stroke='#9b9797'></line>
            </g>
            <g class="labels x-labels">
                ${xLabel
                  .map(
                    (item, index) =>
                      `<text class='xLabel' x=${100 + index * 50} y=${
                        yMax + 20
                      }>${currentMonth + '.' + item}</text>`
                  )
                  .join('')}
            </g>
            <g class="labels y-labels">
              ${yLabel
                .reverse()
                .map(
                  (item, index) =>
                    `<text x="0" y=${10 + index * 20}>${numberFormat(
                      item
                    )}</text>`
                )
                .join('')}
            </g>
            <g class="graph">
              <polyline
               fill="none"
               stroke="#87d0cb"
               stroke-width="2"
               stroke-linecap="round"
               points="${data.join(' ')}"
               x="50"
               />
            </g>
            <g class="circle" data-setname="Our first data set">
              ${data
                .map(
                  (item) =>
                    `<circle cx=${item.split(',')[0]} cy=${
                      item.split(',')[1]
                    } r="2"></circle>`
                )
                .join('')}
            </g>
        </svg>
    </div>
  `;
};

export default Line;
