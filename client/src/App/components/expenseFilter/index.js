import './expenseFilter.scss';
import { getAllExpense, numberWithCommas } from '../../utils';
import { getState } from '../../store';

const ExpenseFilter = () => {
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = hkbHistory.filter((item) => item.createdAt.getMonth() + 1 === currentMonth);
  const monthExpense = getAllExpense(monthHistory);

  return `
    <div class="expense_filter">
        <div class="filter">
            <div class="radio expense_type_category">
                <label><input type="radio" id="expense_type_category" name="expense_type" value="category" checked > 카테고리별 지출</label>
            </div>
            <div class="radio expense_type_days">
                <label><input type="radio" id="expense_type_days" name="expense_type" value="days" > 일별 지출</label>
            </div>
        </div>
        <div class="amount_average">
          <div class="month_amount">
              <p>이번 달 지출 금액</p>
              <p class="all_expense">${numberWithCommas(monthExpense)}원</p>
          </div>
         <div class="date_amount">
              <p>이번 달 일평균</p>
              <p class="all_expense">${numberWithCommas(monthExpense)}원</p>
          </div>
        </div>
    </div>
  `;
};

export default ExpenseFilter;
