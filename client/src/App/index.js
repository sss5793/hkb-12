import { getState, registerEvent, setState } from './store';
import Route from './route';
import './index.scss';
import { Layout } from './components';
import {
  GraphEvent,
  HkbHistClickEvent,
  HkbHistInputEvent,
  GraphMouseOver,
  GraphMouseOut,
  NavigationEvent,
} from './event';

const pageRoute = (path) => {
  const layout = document.querySelector('.contents');
  layout.innerHTML = Route(path);
};

const App = () => {
  const path = getState('path');

  const app = document.querySelector('.App');

  // 네비게이션 액션 등록
  app.addEventListener('click', NavigationEvent);

  window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/graph') {
      window.history.pushState('graph', '', '/graph');
      setState('path', 'graph');
      pageRoute('graph');
      app.addEventListener('click', GraphEvent);
      app.addEventListener('mouseover', GraphMouseOver);
      app.addEventListener('mouseout', GraphMouseOut);
    } else if (window.location.pathname === '/calendar') {
      window.history.pushState('calendar', '', '/calendar');
      setState('path', 'calendar');
      pageRoute('calendar');
    } else {
      window.history.pushState('hbk', '', '/');
      setState('path', 'hbk');
      pageRoute('hbk');
      app.addEventListener('click', HkbHistClickEvent);
      app.addEventListener('input', HkbHistInputEvent);
    }
    registerEvent('path', pageRoute);
  });

  // popstate 이벤트 발생시, 현재 path를 가져온 뒤, 적절한 view렌더링을 한다.
  window.addEventListener('popstate', () => {
    setState('path', window.history.state);
    pageRoute(window.history.state);
  });

  // return Route(path);
  return path === '/' ? Route(path) : Layout(Route(path));
};

export default App;
