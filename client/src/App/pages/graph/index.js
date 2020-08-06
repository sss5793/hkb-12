import './graph.scss';
import { Graph, ExpenseFilter } from '../../components';
import { getState, setState, registerEvent } from '../../store';
import { getMonthHistory, getAllExpense, numberWithCommas } from '../../utils';

const GraphPage = () => {
  const expenseType = getState('expenseType');
  const category = getState('category');
  const currentYear = getState('currentYear');
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  setState('monthHistory', getMonthHistory(currentYear, currentMonth, hkbHistory));

  // 1. 지출 데이터만 가져온다.

  function init() {
    const monthHistory = getState('monthHistory');
    const expenseCategory = category.filter((item) => item.type === '지출');
    let categoryHistList = [];
    // 2. 카테고리 별로 amount를 계산한다.
    expenseCategory.map((cate) => {
      let categoryName = '';
      let amount = 0;
      monthHistory.map((item) => {
        if (cate.name === item.category) {
          categoryName = item.category;
          amount += item.amount;
        }
      });
      if (!categoryName) return;
      categoryHistList = categoryHistList.concat({
        name: categoryName,
        amount,
      });
    });
    const monthExpense = getAllExpense(monthHistory);
    return { categoryHistList, monthExpense };
  }

  const { categoryHistList, monthExpense } = init();

  const circleBar = Graph.Circle(categoryHistList) + Graph.Bar(categoryHistList);
  const expenseTypeContents = expenseType === 'category' ? circleBar : Graph.Line();

  function onGraphChange(list, monthExpense) {
    const categoryType = Graph.Circle(list) + Graph.Bar(list);
    const type = getState('expenseType');
    const graphContainer = document.querySelector('.graph_container');
    const expenseTypeContent = type === 'category' ? categoryType : Graph.Line();
    graphContainer.innerHTML = expenseTypeContent;
    // 지출 금액 바꾸기
    const monthAllExpense = document.querySelector('.expense_filter .month_all_expense');
    monthAllExpense.textContent = `${numberWithCommas(monthExpense)}원`;
    const dateAllExpense = document.querySelector('.expense_filter .date_all_expense');
    dateAllExpense.textContent = `${numberWithCommas(monthExpense)}원`;
  }

  function onChange() {
    const { categoryHistList, monthExpense } = init();
    onGraphChange(categoryHistList, monthExpense);
  }

  registerEvent('expenseType', onChange);
  registerEvent('monthHistory', onChange);

  return `
        <div class="graph">
          ${ExpenseFilter(monthExpense, monthExpense)}
          <div class="graph_container">${expenseTypeContents}</div>
        </div>`;
};

export default GraphPage;
