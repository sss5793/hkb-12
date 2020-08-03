import './dailyHistory.scss';
import CaseHistory from './caseHistory';
import {
  getWeek, numberWithCommas, getAllIncome, getAllExpense,
} from '../../utils';

const DailyHistory = (date, data) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const week = getWeek(date.getDay());
  const dayAllIncome = getAllIncome(data);
  const dayAllExpense = getAllExpense(data);

  return `
    <table class='daily_history'>
      <th>
        <span>${month}월 ${day}일</span>
        <span class='week'>${week}</span>
      </th>
      <th></th>
      <th colspan='2'>
        <span class='income_amount'>+${numberWithCommas(dayAllIncome)}원</span>
        <span class='expense_amount'>-${numberWithCommas(dayAllExpense)}원</span>
      </th>
      ${data.map((item) => CaseHistory(item)).join('')}
    </table>
  `;
};

export default DailyHistory;
