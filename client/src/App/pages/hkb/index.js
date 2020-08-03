import {
  HkbForm, HkbSum, DailyHistory,
} from '../../components';
import { getState } from '../../store';
import {
  getDaysHistory, getAllIncome, getAllExpense, getMonthHistory,
} from '../../utils';

const HkbPage = () => {
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = getMonthHistory(currentMonth, hkbHistory);
  const monthIncome = getAllIncome(monthHistory);
  const monthExpense = getAllExpense(monthHistory);

  const daysHistory = getDaysHistory(monthHistory);
  const days = Object.keys(daysHistory).sort().reverse();

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
