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

  // const arr = [
  //   {
  //     name: '생활',
  //     percent: 50,
  //     amount: 50000,
  //     dasharray: '50 50 0 0',
  //   },
  //   {
  //     name: '교통',
  //     percent: 20,
  //     amount: 20000,
  //     dasharray: '0 50 20 30',
  //   },
  //   {
  //     name: '식비',
  //     percent: 20,
  //     amount: 10000,
  //     dasharray: '0 70 20 10',
  //   },
  //   {
  //     name: '쇼핑/뷰티',
  //     percent: 4,
  //     amount: 4000,
  //     dasharray: '0 90 4 6',
  //   },
  //   {
  //     name: '의료/건강',
  //     percent: 2,
  //     amount: 2000,
  //     dasharray: '0 94 2 4',
  //   },
  //   {
  //     name: '문화/여가',
  //     percent: 2,
  //     amount: 2000,
  //     dasharray: '0 96 2 2',
  //   },
  //   {
  //     name: '미분류',
  //     percent: 2,
  //     amount: 2000,
  //     dasharray: '0 98 2 0',
  //   },
  // ];

  let offset = 0;
  const CircleItem = (item, index) => {
    if (index !== 0) offset += -arr[index - 1].percent;
    // const percent = index === arr.length - 1 ? 100 : item.percent;
    return `<circle 
        r="25%"
        cx="50%" 
        cy="50%" 
        class="pie item_${index + 1}" 
        stroke-dasharray="${item.dasharray}"
        style="stroke:${fillColor[index]}"
        />`;
  };

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
