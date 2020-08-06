import { numberWithCommas } from '../../utils';
import { registerEvent, getState } from "../../store";
import './hkbSum.scss';

const HkbSum = (income, expense) => {
  const allIncome = income;
  const allExpense = expense;
  // TODO: checkbox 색상 변경해주기

  function onChangeIncome() {
    const allIncome = getState('allIncome');
    const allIncomeDom = document.querySelector('.all_income');
    allIncomeDom.textContent = `${numberWithCommas(allIncome)} 원`;
  }

  function onChangeExpense() {
    const allExpense = getState('allExpense');
    const allExpenseDom = document.querySelector('.all_expense');
    allExpenseDom.textContent = `${numberWithCommas(allExpense)} 원`;
  }

  registerEvent('allIncome',onChangeIncome);
  registerEvent('allExpense',onChangeExpense);

  return `
  <div class='hkb_sum'>
    <div class='row'>
      <input type='checkbox' id='income' checked/>
      <label for="income" class='income'>
        <p class='label'>수입</p>
        <p class="all_income">${numberWithCommas(allIncome)} 원</p>
      </label>
    </div>
    <div class='row'>
      <input type='checkbox' id='expense' checked/>
      <label for="expense" class='expense'>
        <p class='label'>지출</p>
        <p class="all_expense">${numberWithCommas(allExpense)} 원</p>
      </label>
    </div>
  </div>`;
};

export default HkbSum;
