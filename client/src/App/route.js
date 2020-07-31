import { Hkb, CalendarPage, Graph } from './pages';

const Route = (path) => {
  let page;
  switch (path) {
    case 'hbk':
      page = Hkb();
      break;
    case 'calendar':
      page = CalendarPage();
      break;
    case 'graph':
      page = Graph();
      break;
    default:
      page = Hkb();
  }

  return page;
};

export default Route;
