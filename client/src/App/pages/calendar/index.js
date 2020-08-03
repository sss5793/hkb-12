import { Calendar, HkbSum } from '../../components';
import { getState } from '../../store';
import { getDaysHistory, getAllIncome, getAllExpense, getMonthHistory } from '../../utils';

const CalendarPage = () => {
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = getMonthHistory(currentMonth, hkbHistory);
  const monthIncome = getAllIncome(monthHistory);
  const monthExpense = getAllExpense(monthHistory);
  const daysHistory = getDaysHistory(hkbHistory);

  return (`
    <div class="calendar_page">
      ${HkbSum(monthIncome, monthExpense)}
      ${Calendar(currentMonth, daysHistory)}
    </div>
  `);
};

export default CalendarPage;
