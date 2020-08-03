import './expenseFilter.scss';
import { getAllExpense, numberWithCommas } from "../../utils";
import { getState } from "../../store";

const ExpenseFilter = () => {
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = hkbHistory.filter(
  (item) => item.createdAt.getMonth() + 1 === currentMonth,
  );
  const monthExpense = getAllExpense(monthHistory);
  return`
    <div class="expense_filter">
        <div class="filter">
            <label><input type="radio" name="expense_type" value="category"> 카테고리별 지출</label>
            <label><input type="radio" name="expense_type" value="days">일별 지출</label>
        </div>
        <div class="month_amount">
            <p>이번 달 지 출 금액</p>
            <p>${numberWithCommas(monthExpense)}원</p>
        </div>
    </div>
  `
};

export default ExpenseFilter;
