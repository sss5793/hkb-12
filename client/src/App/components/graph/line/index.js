import './line.scss';
import { getState } from "../../../store";

const Line = () => {
  const currentMonth = getState('currentMonth');
  const lastDate = new Date( '2020', currentMonth, 0).getDate();
  const maxAmount = 200;

  let xLabel = [];
  for(let i=1; i <= lastDate; i++){
    if(i%5 === 1) {
      xLabel = [ ...xLabel, i ]
    }
  }

  let yLabel = [];
  for(let i=maxAmount; i >= 0; i--){
    if(i%20 === 0) {
      yLabel = [ ...yLabel, i ]
    }
  }

  // 데이터 형태 => x 초기 51, y 초기 209
  const data = [
    '51,209',
    '80,190',
    '110,170',
    '140,150',
    '170,130',
    '200,110',
    '230,90',
    '260,70',
    '290,50',
    '310,30',
    '330,10',
  ];

  const yMax = 10 + (yLabel.length - 1) * 20;
  return(`
    <div class="line">
        <svg viewBox="0 0 500 250" class="chart">
            <g class="grid x-grid" id="xGrid">
              <line x1="50" x2="50" y1="0" y2=${yMax}></line>
            </g>
            <g class="grid y-grid" id="yGrid">
              <line x1="50" x2="500" y1=${yMax} y2=${yMax}></line>
            </g>
            <g class="labels x-labels">
                ${xLabel.map((item, index) => `<text x=${100 + index * 50} y=${yMax + 20}>${currentMonth+'.'+item}</text>`).join('')}
            </g>
            <g class="labels y-labels">
              ${yLabel.map((item, index) => `<text x="0" y=${10 + index * 20}>${item}만원</text>`).join('')}
            </g>
            <g class="graph">
              <polyline
               fill="none"
               stroke="#87d0cb"
               stroke-width="2"
               stroke-linecap="round"
               points="${data.join(" ")}"
               x="50"
               />
            </g>
            <g class="circle" data-setname="Our first data set">
              ${data.map((item) => `<circle cx=${item.split(',')[0]} cy=${item.split(',')[1]} r="2"></circle>`)}
            </g>
        </svg>
    </div>
  `)
}

export default Line;
