import './bar.scss';

const Bar = () => {
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

  const BarItem = (item, index) => (
    `
     <g class="bar">
       <text y=${index * 5 + index} dy="1em">
          ${item.name}
       </text>
       <text x="10" y=${index * 5 + index} dy="1em">
          ${item.percent}%
       </text>
       <rect x="20" width=${item.percent} height="5" y=${index * 5 + index}>${item.name}</rect>
       <text x=${25 + item.percent} y=${index * 5 + index} dy="1em">
          ${item.amount}원
       </text>
     </g>`
  )

  return(`
    <div>
        <svg viewBox="0 0 100 100">
            ${arr.map((item, index) => (BarItem(item, index))).join("")}
        </svg>
    </div>
  `)
}

export default Bar;
