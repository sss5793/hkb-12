import './hkb.scss';
import {
  HkbForm, HkbSum, DailyHistory,
} from '../../components';
import { getState } from '../../store';
import { daysOfHistory, getAllIncome, getAllExpense } from '../../utils';

const HkbPage = () => {
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = hkbHistory.filter(
    (item) => item.createdAt.getMonth() + 1 === currentMonth,
  );
  const monthIncome = getAllIncome(monthHistory);
  const monthExpense = getAllExpense(monthHistory);

  const daysHistory = daysOfHistory(monthHistory);
  const days = Object.keys(daysHistory);

  const temp = [];
  for ( let i = 0 ; i < days.length; i++){
    temp.push(new Date(days[i]).getTime())
  }
  temp.sort();
  const tmpDate = temp.reverse();

  return (`
    <div class="hkb_page">
      ${HkbForm()}
      ${HkbSum(monthIncome, monthExpense)}
      <div class='history_list'>
        ${tmpDate.map((day) => DailyHistory(new Date(day), daysHistory[new Date(day)])).join('')}
      </div>
    </div>
  `);
};

export default HkbPage;
