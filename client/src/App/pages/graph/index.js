import './graph.scss';
import { Graph, ExpenseFilter } from '../../components';
import { getState, registerEvent } from '../../store';
import { getMonthHistory } from '../../utils';

const GraphPage = () => {
  const expenseType = getState('expenseType');
  const category = getState('category');

  // 1. 지출 데이터만 가져온다.
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  const monthHistory = getMonthHistory(currentMonth, hkbHistory);
  // 2. 카테고리 별로 amount를 계산한다.
  const expenseCategory = category.filter((item) => item.type === '지출');
  let categoryHistList = [];
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
    categoryHistList = categoryHistList.concat({ name: categoryName, amount });
  });
  // console.log(categoryHistList);
  // 3. 계산한 amount로 percent를 구한다.

  const circleBar =
    Graph.Circle(categoryHistList) + Graph.Bar(categoryHistList);
  const expenseTypeContents =
    expenseType === 'category' ? circleBar : Graph.Line();

  function onChange() {
    const type = getState('expenseType');
    const graphContainer = document.querySelector('.graph_container');
    const expenseTypeContent = type === 'category' ? circleBar : Graph.Line();
    graphContainer.innerHTML = expenseTypeContent;
  }
  registerEvent('expenseType', onChange);

  return `
        <div class="graph">
          ${ExpenseFilter()}
          <div class="graph_container">${expenseTypeContents}</div>
        </div>`;
};

export default GraphPage;
