import './circle.scss';
import { getAllPercent, createDashArray } from '../../../utils';

const Circle = (data) => {
  const fillColor = [
    '#93dad7',
    '#29b6ae',
    '#29abb6',
    '#2a90b6',
    '#2975b6',
    '#3458a2',
    '#3c64b5',
  ];

  const prevArr = getAllPercent(data);
  const arr = createDashArray(prevArr);

  const CircleItem = (item, index) => `<circle 
        r="25%"
        cx="50%" 
        cy="50%" 
        class="pie item_${index + 1}" 
        stroke-dasharray="${item.dasharray}"
        style="stroke:${fillColor[index]}"
        />`;

  const LabelItem = (item, index) => `
      <div class='item' id='item_${index + 1}'>
        <div class='fill' style='background-color:${fillColor[index]}'></div>
        <div class='name'>${item.name}</div>
      </div>
    `;

  return `
    <div class="circle">
      <svg width="300" height="300" viewBox="0 0 64 64" class="chart">
        ${arr.map((item, index) => CircleItem(item, index)).join('')}
        <circle r="25%" cx="50%" cy="50%" class="pie_animation" stroke-dasharray="0 100" style="stroke:#fff"/>
        </g>
      </svg>
      <div class='label'>
        ${arr.map((item, index) => LabelItem(item, index)).join('')}
      </div>
    </div>
  `;
};
export default Circle;
