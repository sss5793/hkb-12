import './circle.scss';

const Circle = () => {
  const arr = [
    {
      name : '교통',
      percent : 10,
      amount: 10000,
      offset: 5,
    },
    {
      name : '여가',
      percent : 20,
      amount: 20000,
      offset: 25,
    },
    {
      name : '식비',
      percent : 50,
      amount: 50000,
      offset: 25,
    },
  ];

  const CircleItem = (item, index) => {
    const offset = 25;
    const total = 80;
    const circumference = 31.4;
    const strokeDash = Math.round((item.percent * circumference) / 100);
    return (
    `<circle 
        r="50"
        cx="50" 
        cy="50" 
        class="pie${index+1}" 
        stroke-width="1"
        stroke-dasharray="${item.percent+', '+100}"
      />`
  )};

  return(`
    <div class="circle">
      <svg width="300" height="300" viewBox="0 0 100 100" class="chart">
        <circle r="50" cx="50" cy="50" class="bg"></circle>
        ${arr.map((item, index) => CircleItem(item, index)).join('')}
      </svg>
    </div>
  `)
}


// <circle r="25" cx="50" cy="50" class="pie3"/>
//   <circle r="25" cx="50" cy="50" class="pie2"/>
//   <circle r="25" cx="50" cy="50" class="pie"/>
export default Circle;
