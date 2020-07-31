import { Calendar } from '../../components';
import { getState } from '../../store';

const CalendarPage = () => {
  const currentMonth = getState('currentMonth');

  return (`<div class="calendar_page">${Calendar(currentMonth)}</div>`);
};

export default CalendarPage;
