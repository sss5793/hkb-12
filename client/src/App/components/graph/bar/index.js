import './bar.scss';
import { numberWithCommas, getAllPercent } from '../../../utils';

const Bar = (data) => {
  const fillColor = [
    '#93dad7',
    '#29b6ae',
    '#29abb6',
    '#2a90b6',
    '#2975b6',
    ' #3458a2',
    '#3c64b5',
  ];
  const arr = getAllPercent(data);

  const BarItem = (item, index) => `
  <div class='bar'>
    <p class='name'>${item.name}</p>
    <p class='percent'>${Math.round(item.percent)}%</p> 
    <svg viewBox="0 0 100 4">
      <rect x="0" width=${item.percent} height="4" y='0' fill="${fillColor[index]}">${item.name}</rect>
    </svg>
    <p class='amount'>${numberWithCommas(item.amount)}원</p> 
  </div>`;

  return `
    <div class="bar_graph">
      ${arr.map((item, index) => BarItem(item, index)).join('')}
    </div>
  `;
};

export default Bar;
