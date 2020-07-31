import { Layout, Calendar } from '../../components';
import { getState } from '../../store';

const CalendarPage = () => {
  const currentMonth = getState('currentMonth');

  return Layout(`<div class="calendar_page">${Calendar(currentMonth)}</div>`);
};

export default CalendarPage;
