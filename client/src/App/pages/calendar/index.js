import { Calendar, HkbSum } from '../../components';
import { getState, setState, registerEvent } from '../../store';
import { getDaysHistory, getAllIncome, getAllExpense, getMonthHistory } from '../../utils';

const CalendarPage = () => {
  const currentYear = getState('currentYear');
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  setState('monthHistory', getMonthHistory(currentYear, currentMonth, hkbHistory));

  function init() {
    const monthHistory = getState('monthHistory');
    const monthIncome = getAllIncome(monthHistory);
    const monthExpense = getAllExpense(monthHistory);
    const daysHistory = getDaysHistory(monthHistory);

    return { daysHistory, monthIncome, monthExpense };
  }

  const initData = init();
  const { monthIncome, monthExpense, daysHistory } = initData;

  function onChange() {
    const calendarPage = document.querySelector('.calendar_container');
    const initData = init();
    const currentYear = getState('currentYear');
    const currentMonth = getState('currentMonth');
    const { monthIncome, monthExpense, daysHistory } = initData;
    calendarPage.innerHTML = Calendar(currentYear, currentMonth, daysHistory);
    setState('allIncome', monthIncome);
    setState('allExpense', monthExpense);
  }

  registerEvent('monthHistory', onChange);

  return (`
    <div class="calendar_page">
      ${HkbSum(monthIncome, monthExpense)}
      <div class='calendar_container'>
        ${Calendar(currentYear, currentMonth, daysHistory)}
      </div>
    </div>
  `);
};

export default CalendarPage;
