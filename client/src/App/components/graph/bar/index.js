import './bar.scss';
import { numberWithCommas } from "../../../utils";

const Bar = () => {
  const fillColor = [ '#93dad7', '#29b6ae', '#29abb6', '#2a90b6', '#2975b6',' #3458a2', '#3257a3'];
  // 데이터 형태
  const arr = [
    {
      name : '생활',
      percent : 50,
      amount: 50000,
    },
    {
      name : '교통',
      percent : 20,
      amount: 20000,
    },
    {
      name : '식비',
      percent : 10,
      amount: 10000,
    },
    {
      name : '쇼핑/뷰티',
      percent : 2,
      amount: 2000,
    },
    {
      name : '의료/건강',
      percent : 2,
      amount: 2000,
    },
    {
      name : '문화/여가',
      percent : 2,
      amount: 2000,
    },
    {
      name : '미분류',
      percent : 2,
      amount: 2000,
    },
  ];

  const BarItem = (item, index) => (
    `
     <g class="bar">
       <text x='2' y=${index * 5 + index} dy="1.2em" >
          ${item.name}
       </text>
       <text x="15" y=${index * 5 + index} dy="1.2em" class="percent">
          ${item.percent}%
       </text>
       <rect x="25" width=${item.percent} height="4" y=${index * 5 + index} fill="${fillColor[index]}">${item.name}</rect>
       <text x='98' y=${index * 5 + index} dy="1.2em" class="amount" text-anchor="end">
          ${numberWithCommas(item.amount)}원
       </text>
     </g>
     ${ index + 1 !== arr.length ?
      `<g class="grid y-grid" id="yGrid">
        <line x1="0" x2="100" y1="${(index+1) * 5 + index}" y2="${(index+1) * 5 + index}"></line>
       </g>` : ''
      }`
  )

  return(`
    <div class="bar_graph">
        <svg viewBox="0 0 100 ${arr.length * 6 - 1}">
            ${arr.map((item, index) => (BarItem(item, index))).join("")}
        </svg>
    </div>
  `)
}

export default Bar;
