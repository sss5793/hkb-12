import './navigation.scss';
import {getState, setState} from '../../../../store';

const Navigation = () => {
  const currentMonth = getState('currentMonth');
  const path = getState('path');
  console.log(path);

  return `<div class="nav">
      <div class="month_update">
        <button class="prev_month"> < </button>
        <p class="month">${currentMonth}월</p>
        <button class="next_month"> > </button>
      </div>
      <div class="page_nav">
        <button class="page_nav_hbk ${path === 'hbk' ? 'active' : ''}">내역</button>
        <div class="bar"></div>
        <button class="page_nav_calendar ${path === 'calendar' ? 'active' : ''}">달력</button>
        <div class="bar"></div>
        <button class="page_nav_graph ${path === 'graph' ? 'active' : ''}">통계</button>
      </div>
    </div>`
};

export default Navigation;
