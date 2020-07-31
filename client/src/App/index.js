import { getState, registerEvent, setState } from './store';
import Route from './route';
import './index.scss';
import { Layout } from './components';

const pageRoute = (path) => {
  const layout = document.querySelector('.contents');
  layout.innerHTML = Route(path);
};

const App = () => {
  const path = getState('path');

  const app = document.querySelector('.App');

  // 페이지 이동 액션 등록
  app.addEventListener('click', (e) => {
    const navHkbBtn = document.querySelector('.page_nav_hbk');
    const navCalendarBtn = document.querySelector('.page_nav_calendar');
    const navGraphBtn = document.querySelector('.page_nav_graph');

    if (e.target === navHkbBtn) {
      window.history.pushState('hbk', '', '/');
      setState('path', 'hbk');
      navHkbBtn.classList.add('active');
      navCalendarBtn.classList.remove('active');
      navGraphBtn.classList.remove('active');
    } else if (e.target === navCalendarBtn) {
      window.history.pushState('calendar', '', '/calendar');
      setState('path', 'calendar');
      navHkbBtn.classList.remove('active');
      navCalendarBtn.classList.add('active');
      navGraphBtn.classList.remove('active');
    } else if (e.target === navGraphBtn) {
      window.history.pushState('graph', '', '/graph');
      setState('path', 'graph');
      navHkbBtn.classList.remove('active');
      navCalendarBtn.classList.remove('active');
      navGraphBtn.classList.add('active');
    }

    // navigation 월별 이동
    // TODO : container 분리 후 navigation.js에 적용
    const prevMonth = document.querySelector('.prev_month');
    const nextMonth = document.querySelector('.next_month');

    if (e.target === prevMonth) {
      const currentMonth = getState('currentMonth');
      let changeMonth = parseInt(currentMonth) - 1;
      if (changeMonth < 1) {
        changeMonth = 12;
      }
      setState('currentMonth', changeMonth);
      const month = document.querySelector('.month');
      month.textContent = `${changeMonth}월`;
    }
    if (e.target === nextMonth) {
      const currentMonth = getState('currentMonth');
      let changeMonth = parseInt(currentMonth) + 1;
      if (changeMonth > 12) {
        changeMonth = 1;
      }
      setState('currentMonth', changeMonth);
      const month = document.querySelector('.month');
      month.textContent = `${changeMonth}월`;
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/graph') {
      window.history.pushState('graph', '', '/graph');
      setState('path', 'graph');
    } else if (window.location.pathname === '/calendar') {
      window.history.pushState('calendar', '', '/calendar');
      setState('path', 'calendar');
    } else {
      window.history.pushState('hbk', '', '/');
      setState('path', 'hbk');
    }
    registerEvent('path', pageRoute);
  });

  // popstate 이벤트 발생시, 현재 path를 가져온 뒤, 적절한 view렌더링을 한다.
  window.addEventListener('popstate', () => {
    setState('path', window.history.state);
    pageRoute(window.history.state);
  });

  // return Route(path);
  return Layout(Route(path));
};

export default App;
