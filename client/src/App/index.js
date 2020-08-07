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
  OpenModalBtnEvent,
  ModalClickEvent,
} from './event';
import { getAllHkbHist, getCategory, getPayment } from "./apis";

const pageRoute = (path) => {
  const layout = document.querySelector('.contents');
  layout.innerHTML = Route(path);
  const modalBtn = document.querySelector('.open-modal-btn');
  modalBtn.addEventListener('click', OpenModalBtnEvent);
  const modal = document.querySelector('.modal');
  modal.addEventListener('click', ModalClickEvent);
  // TODO : 따로 init 함수로 빼기?
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

    // 분류에 선택 클래스 넣어주기
    const currentType = getState('currentType');
    if(currentType === '수입') {
      const incomeBtn = document.querySelector('.hkb_form .income');
      incomeBtn.classList.add('active');
    }else {
      const expenseBtn = document.querySelector('.hkb_form .expense');
      expenseBtn.classList.add('active');
    }
  } else {

  }
};

const App = () => {
  const path = getState('path');

  const app = document.querySelector('.App');

  // 네비게이션 액션 등록
  app.addEventListener('click', NavigationEvent);

  window.addEventListener('DOMContentLoaded', async () => {
    if(window.location.pathname !== '/') {
      const histRes = await getAllHkbHist();
      if(histRes.success){
        const data = histRes.payload.map((item) => ({ ...item, createdAt: new Date(item.createdAt)}));
        setState('hkbHistory',data);
      }
      const categoryRes = await getCategory();
      if(categoryRes.success){
        setState('category',categoryRes.payload);
      }
      const paymentRes = await getPayment();
      if(paymentRes.success){
        setState('payment',paymentRes.payload);
      }
    }

    let menu;
    if (window.location.pathname === '/hkb') {
      window.history.pushState('/hkb', '', '/hkb');
      setState('path', '/hkb');
      pageRoute('/hkb');
      menu = document.querySelector('#page_nav_hkb');
      menu.classList.add('active');
    } else if (window.location.pathname === '/graph') {
      window.history.pushState('/graph', '', '/graph');
      setState('path', '/graph');
      pageRoute('/graph');
      menu = document.querySelector('#page_nav_graph');
      menu.classList.add('active');
    } else if (window.location.pathname === '/calendar') {
      window.history.pushState('/calendar', '', '/calendar');
      setState('path', '/calendar');
      pageRoute('/calendar');
      menu = document.querySelector('#page_nav_calendar');
      menu.classList.add('active');
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
