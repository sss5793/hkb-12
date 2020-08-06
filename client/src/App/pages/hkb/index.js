import {
  HkbForm, HkbSum, DailyHistory,
} from '../../components';
import { getState, setState, registerEvent } from '../../store';
import {
  getDaysHistory, getAllIncome, getAllExpense, getMonthHistory,
} from '../../utils';

const HkbPage = () => {
  const currentYear = getState('currentYear');
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  setState('monthHistory', getMonthHistory(currentYear, currentMonth, hkbHistory));

  function init() {
    const monthHistory = getState('monthHistory');
    const monthIncome = getAllIncome(monthHistory);
    const monthExpense = getAllExpense(monthHistory);
    const daysHistory = getDaysHistory(monthHistory);
    const days = Object.keys(daysHistory).sort().reverse();

    return { days, daysHistory, monthIncome, monthExpense };
  }

  const initData = init();
  const { monthIncome, monthExpense, daysHistory, days } = initData;

  function onChange() {
    const histList = document.querySelector('.history_list');
    const initData = init();
    const { monthIncome, monthExpense, daysHistory, days } = initData;
    histList.innerHTML = days.map((day) => DailyHistory(new Date(day), daysHistory[day])).join('');
    setState('allIncome', monthIncome);
    setState('allExpense', monthExpense);
  }

  registerEvent('monthHistory', onChange);

  return (`
    <div class="hkb_page">
      ${HkbForm()}
      ${HkbSum(monthIncome, monthExpense)}
      <div class='history_list'>
        ${days.map((day) => DailyHistory(new Date(day), daysHistory[day])).join('')}
      </div>
    </div>
  `);
};

export default HkbPage;
