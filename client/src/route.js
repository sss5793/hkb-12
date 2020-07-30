import { Hkb, CalendarPage, Graph } from './pages';

const Route = (path) => {
  let page;
  switch (path) {
    case 'hbk':
      page = Hkb();
      console.log('내역 페이지');
      break;
    case 'calendar':
      page = CalendarPage();
      console.log('달력 페이지');
      break;
    case 'graph':
      page = Graph();
      console.log('통계 페이지');
      break;
    default:
      page = Hkb();
  }

  return page;
};

export default Route;
