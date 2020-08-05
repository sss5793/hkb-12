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
  if (path === '/graph') {
    const graphPage = document.querySelector('.graph');
    graphPage.addEventListener('click', GraphEvent);
    graphPage.addEventListener('mouseover', GraphMouseOver);
    graphPage.addEventListener('mouseout', GraphMouseOut);
  } else if (path === '/calendar') {

  } else if (path === '/hkb') {
    const hkbPage = document.querySelector('.hkb_page');
    hkbPage.addEventListener('click', HkbHistClickEvent);
    hkbPage.addEventListener('input', HkbHistInputEvent);
  } else {

  }
};

const App = () => {
  const path = getState('path');

  const app = document.querySelector('.App');

  // 네비게이션 액션 등록
  app.addEventListener('click', NavigationEvent);

  window.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/hkb') {
      window.history.pushState('/hkb', '', '/hkb');
      setState('path', '/hkb');
      pageRoute('/hkb');
    } else if (window.location.pathname === '/graph') {
      window.history.pushState('/graph', '', '/graph');
      setState('path', '/graph');
      pageRoute('/graph');
    } else if (window.location.pathname === '/calendar') {
      window.history.pushState('/calendar', '', '/calendar');
      setState('path', '/calendar');
      pageRoute('/calendar');
    } else {
      window.history.pushState('/', '', '/');
      setState('path', '/');
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
