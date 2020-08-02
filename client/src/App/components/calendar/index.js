import './calendar.scss';

const today = new Date();
const ko_days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const en_days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const day = () => {
  const days = ko_days.map((value, idx) => `<div class='day ${en_days[idx]}'>${value}</div>`).join('');
  return `<div class='week'>${days}</div>`;
};

const setCalendarData = (year, month, history) => {
  const setDate = new Date(year, month - 1, 1);
  // 해당 월의 첫째 날을 구합니다.
  const firstDayName = setDate.getDay();

  // 해당 월의 마지막 날을 구합니다.
  const lastDay = new Date(
    year,
    month,
    0,
  ).getDate();

  // 이전 달의 마지막 날을 구합니다.
  const prevLastDay = new Date(
    year,
    month - 2,
    0,
  ).getDate();

  // 매월 일수가 달라지므로 이번 달 날짜 개수를 세기 위한 변수를 만들고 초기화 합니다.
  let startDayCount = 1;
  let lastDayCount = 1;

  const weekList = [];

  for (let i = 0; i < 6; i++) {
    const dayList = [];
    for (let j = 0; j < 7; j++) {
      // 지난달 날짜
      let dayNum;
      let className = '';
      let mon = month;
      if (i === 0 && j < firstDayName) {
        className = 'past';
        mon = month - 1;
        dayNum = prevLastDay - (firstDayName - 1) + j;
      // 이번달 날짜
      } else if (i >= 0 && startDayCount <= lastDay) {
        dayNum = startDayCount++;
      // 다음달 날짜
      } else if (startDayCount > lastDay) {
        className = 'future';
        mon = month + 1;
        dayNum = lastDayCount++;
      }

      // 일요일부터 다음달 날짜가 나올시, 그냥 리턴한다.
      if (j === 0 && className === 'future') break;

      dayList.push(`
        <div class='calendar__day ${en_days[j]} ${className}' id='${year}.${mon}.${dayNum}'>
          <div>${dayNum}</div>
          <div>${history.hasOwnProperty(`${year}.${mon}.${dayNum}`) ? history[`${year}.${mon}.${dayNum}`].map(i => i.amount).join('<br/>') : ''}</div>
        </div>
      `);
    }
    weekList.push(dayList);
  }
  return weekList.map((week) => `<div class='week'>${week.join('')}</div>`).join('');
};

const Calendar = (currentMonth, history) => {
  // 달력 데이터를 가공하는 함수에 년,월을 인자로 넘겨주어 실행합니다.
  const calendar = setCalendarData(today.getFullYear(), currentMonth, history);
  return (`
    <div class='calendar'>
      ${day()}
      ${calendar}
    </div>
  `);
};

export default Calendar;
