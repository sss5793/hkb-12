import { getState, registerEvent, setState } from './store';
import Route from './route';
import './assets/reset.scss';
import './index.scss';

const pageRoute = (path) => {
  const app = document.querySelector('.App');
  app.innerHTML = Route(path);
};

const App = () => {
  const path = getState('path');

  fetch('/api/hbkhist', { method: 'GET' }).then((res) => res.json()).then((res) => console.log(res)).catch((e) => console.log(e));

  registerEvent('path', pageRoute);

  const app = document.querySelector('.App');

  // 페이지 이동 액션 등록
  app.addEventListener('click', (e) => {
    const goHkbBtn = document.querySelector('.go_hbk');
    const goCalendarBtn = document.querySelector('.go_calendar');
    const goGraphBtn = document.querySelector('.go_graph');

    if (e.target === goHkbBtn) {
      window.history.pushState('hbk', '', '/');
      setState('path', 'hbk');
    } else if (e.target === goCalendarBtn) {
      window.history.pushState('calendar', '', '/calendar');
      setState('path', 'calendar');
    } else if (e.target === goGraphBtn) {
      window.history.pushState('graph', '', '/graph');
      setState('path', 'graph');
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
