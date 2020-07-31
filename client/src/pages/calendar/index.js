import { Layout, Calendar } from '../../components';

const CalendarPage = () => (
  Layout(`<div class="calendar_page">${Calendar()}</div>`)
);

export default CalendarPage;
