import './navigation.scss';
import { getState, registerEvent } from '../../../../store';

const Navigation = () => {
  const currentMonth = getState('currentMonth');
  const currentYear = getState('currentYear');

  function onChange() {
    const month = getState('currentMonth');
    const year = getState('currentYear');
    const yearMonthContent = document.querySelector('.year_month');
    yearMonthContent.textContent = `${year}년 ${month}월`;
  }

  registerEvent('currentMonth', onChange);
  registerEvent('currentYear', onChange);

  return `<div class="nav">
      <div class="month_update">
        <button class="prev_month"> < </button>
        <p class="year_month">${currentYear}년 ${currentMonth}월</p>
        <button class="next_month"> > </button>
      </div>
      <div class="page_nav">
        <button class="nav_btn" id="page_nav_hkb">내역</button>
        <div class="bar"></div>
        <button class="nav_btn" id="page_nav_calendar">달력</button>
        <div class="bar"></div>
        <button class="nav_btn" id="page_nav_graph">통계</button>
      </div>
    </div>`;
};

export default Navigation;
