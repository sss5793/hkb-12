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

  // 액션 등록
  app.addEventListener('click', (event) => {
    const { target } = event;

    // 페이지 네이게이션
    if (target.classList.contains('nav_btn')) {
      const navBtns = document.querySelectorAll('.nav_btn');

      navBtns.forEach((navBtn) => navBtn.classList.remove('active'));
      target.classList.add('active');

      if (target.id === 'page_nav_hkb') {
        window.history.pushState('hbk', '', '/');
        setState('path', 'hbk');
      } else if (target.id === 'page_nav_calendar') {
        window.history.pushState('calendar', '', '/calendar');
        setState('path', 'calendar');
      } else if (target.id === 'page_nav_graph') {
        window.history.pushState('graph', '', '/graph');
        setState('path', 'graph');
      }
    }

    // navigation 월별 이동
    // TODO : container 분리 후 navigation.js에 적용
    const prevMonth = document.querySelector('.prev_month');
    const nextMonth = document.querySelector('.next_month');

    if (event.target === prevMonth) {
      const currentMonth = getState('currentMonth');
      let changeMonth = parseInt(currentMonth) - 1;
      if (changeMonth < 1) {
        changeMonth = 12;
      }
      setState('currentMonth', changeMonth);
      const month = document.querySelector('.month');
      month.textContent = `${changeMonth}월`;
    }
    if (event.target === nextMonth) {
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
