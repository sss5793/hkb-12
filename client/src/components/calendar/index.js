import './calendar.scss';

const today = new Date();
const ko_days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const en_days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const day = () => {
  const days = ko_days.map((value, idx) => `<div class='day ${en_days[idx]}'>${value}</div>`).join('');
  return `<div class='week'>${days}</div>`;
};

const setCalendarData = (year, month) => {
  const setDate = new Date(year, month - 1, 1);
  const firstDayName = setDate.getDay();
  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();
  const prevLastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    0,
  ).getDate();

  let startDayCount = 1;
  let lastDayCount = 1;

  const weekList = [];

  for (let i = 0; i < 5; i++) {
    const dayList = [];
    for (let j = 0; j < 7; j++) {
      // 지난달 날짜
      if (i === 0 && j < firstDayName) {
        dayList.push(`<div class='calendar__day ${en_days[j]} past' id='${(prevLastDay - (firstDayName - 1) + j)}'><span>${(prevLastDay - (firstDayName - 1) + j)}</span></div>`);
      // 이번달 날짜
      } else if (i >= 0 && startDayCount <= lastDay) {
        dayList.push(`<div class='calendar__day ${en_days[j]}' id='${startDayCount}'><span>${startDayCount}</span></div>`);
        startDayCount += 1;
      // 다음달 날짜
      } else if (startDayCount > lastDay) {
        dayList.push(`<div class='calendar__day ${en_days[j]} future' id='${lastDayCount}'><span>${lastDayCount}</span></div>`);
        lastDayCount += 1;
      }
    }
    weekList.push(dayList);
  }
  return weekList.map((week) => `<div class='week'>${week.join('')}</div>`).join('');
};

const Calendar = () => {
  // 달력 데이터를 가공하는 함수에 년,월을 인자로 넘겨주어 실행합니다.
  const calendar = setCalendarData(today.getFullYear(), today.getMonth() + 1);

  return (`
    <div class='calendar'>
      ${day()}
      ${calendar}
    </div>
  `);
};

export default Calendar;
