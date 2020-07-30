import { getState, registerEvent, setState } from './store';
import Route from './route';
import './index.scss';

const pageRoute = (path) => {
  const app = document.querySelector('.App');
  app.innerHTML = Route(path);
};

const App = () => {
  const path = getState('path');

  // fetch('/api/hbkhist', { method: 'GET' }).then((res) => res.json()).then((res) => console.log(res)).catch((e) => console.log(e));

  registerEvent('path', pageRoute);

  const app = document.querySelector('.App');

  // 페이지 이동 액션 등록
  app.addEventListener('click', (e) => {
    const navHkbBtn = document.querySelector('.page_nav_hbk');
    const navCalendarBtn = document.querySelector('.page_nav_calendar');
    const navGraphBtn = document.querySelector('.page_nav_graph');

    if (e.target === navHkbBtn) {
      window.history.pushState('hbk', '', '/');
      setState('path', 'hbk');
    } else if (e.target === navCalendarBtn) {
      window.history.pushState('calendar', '', '/calendar');
      setState('path', 'calendar');
    } else if (e.target === navGraphBtn) {
      window.history.pushState('graph', '', '/graph');
      setState('path', 'graph');
    }

    // navigation 월별 이동
    // TODO : container 분리 후 navigation.js에 적용
    const prevMonth = document.querySelector('.prev_month');
    const nextMonth = document.querySelector('.next_month');

    if(e.target === prevMonth){
      const currentMonth = getState('currentMonth');
      let changeMonth = parseInt(currentMonth) - 1;
      if(changeMonth < 1) {
        changeMonth = 12
      }
      setState('currentMonth', changeMonth);
      const month = document.querySelector('.month');
      month.textContent = `${changeMonth}월`;
    }
    if(e.target === nextMonth){
      const currentMonth = getState('currentMonth');
      let changeMonth = parseInt(currentMonth) + 1;
      if(changeMonth > 12) {
        changeMonth = 1
      }
      setState('currentMonth', changeMonth);
      const month = document.querySelector('.month');
      month.textContent = `${changeMonth}월`;
    }
  });

  // popstate 이벤트 발생시, 현재 path를 가져온 뒤, 적절한 view렌더링을 한다.
  window.addEventListener('popstate', () => {
    setState('path', window.history.state);
    pageRoute(window.history.state);
  });

  return Route(path);
};

const app = document.querySelector('.App');
app.innerHTML = App();
