import { getState, setState } from '../store';
import { getMonthHistory } from '../utils';

const activeNavigation = (target) => {
  const navBtns = document.querySelectorAll('.nav_btn');
  navBtns.forEach((navBtn) => navBtn.classList.remove('active'));
  target.classList.add('active');
};

const setPageHistory = (target) => {
  if (target.id === 'page_nav_hkb') {
    window.history.pushState('/hkb', '', '/hkb');
    setState('path', '/hkb');
  } else if (target.id === 'page_nav_calendar') {
    window.history.pushState('/calendar', '', '/calendar');
    setState('path', '/calendar');
  } else if (target.id === 'page_nav_graph') {
    window.history.pushState('/graph', '', '/graph');
    setState('path', '/graph');
  }
};

export const NavigationEvent = (e) => {
  const { target } = e;
  // 페이지 네이게이션
  if (target.classList.contains('nav_btn')) {
    activeNavigation(target);
    setPageHistory(target);
  }

  // navigation 월별 이동
  // TODO : container 분리 후 navigation.js에 적용
  const prevMonth = document.querySelector('.prev_month');
  const nextMonth = document.querySelector('.next_month');

  if (target === prevMonth) {
    const currentMonth = getState('currentMonth');
    const currentYear = getState('currentYear');
    let changeYear = currentYear;
    let changeMonth = parseInt(currentMonth) - 1;
    if (changeMonth < 1) {
      changeMonth = 12;
      changeYear -= 1;
    }
    setState('currentYear', changeYear);
    setState('currentMonth', changeMonth);
    const hkbHistory = getState('hkbHistory');
    setState('monthHistory', getMonthHistory(changeYear, changeMonth, hkbHistory));
  }
  if (target === nextMonth) {
    const currentMonth = getState('currentMonth');
    const currentYear = getState('currentYear');
    let changeYear = currentYear;
    let changeMonth = parseInt(currentMonth) + 1;
    if (changeMonth > 12) {
      changeMonth = 1;
      changeYear += 1;
    }
    setState('currentYear', changeYear);
    setState('currentMonth', changeMonth);
    const hkbHistory = getState('hkbHistory');
    setState('monthHistory', getMonthHistory(changeYear, changeMonth, hkbHistory));
  }
};
