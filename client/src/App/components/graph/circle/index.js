import './circle.scss';

const Circle = () => {
  const arr = [
    {
      name : '식비',
      percent : 50,
      amount: 50000,
    },
    {
      name : '교통',
      percent : 10,
      amount: 10000,
    },
    {
      name : '여가',
      percent : 20,
      amount: 20000,
    },
  ];

  // const BarItem = (item, index) => (
  //   `
  //    <g class="bar">
  //      <text y=${index * 5 + index} dy="1em">
  //         ${item.name}
  //      </text>
  //      <text x="10" y=${index * 5 + index} dy="1em">
  //         ${item.percent}%
  //      </text>
  //      <rect x="20" width=${item.percent} height="5" y=${index * 5 + index}>${item.name}</rect>
  //      <text x=${25 + item.percent} y=${index * 5 + index} dy="1em">
  //         ${item.amount}원
  //      </text>
  //    </g>`
  // )

  return(`
    <div class="circle">
      <svg width="100" height="100" class="chart">
        <circle r="25" cx="50" cy="50" class="pie3"/>
        <circle r="25" cx="50" cy="50" class="pie2"/>
        <circle r="25" cx="50" cy="50" class="pie"/>
      </svg>
    </div>
  `)
}

export default Circle;
