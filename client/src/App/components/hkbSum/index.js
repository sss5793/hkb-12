import { numberWithCommas } from '../../utils';
import './hkbSum.scss';

const HkbSum = (income, expense) => {
  const allIncome = income;
  const allExpense = expense;
  // TODO: checkbox 색상 변경해주기
  return `
  <div class='hkb_sum'>
    <div class='row'>
      <input type='checkbox' id='income' checked/>
      <label for="income" class='income'>
        <p class='label'>수입</p>
        <p>${numberWithCommas(allIncome)} 원</p>
      </label>
    </div>
    <div class='row'>
      <input type='checkbox' id='expense' checked/>
      <label for="expense" class='expense'>
        <p class='label'>지출</p>
        <p>${numberWithCommas(allExpense)} 원</p>
      </label>
    </div>
  </div>`;
};

export default HkbSum;
