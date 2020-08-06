import './graph.scss';
import { Graph, ExpenseFilter } from '../../components';
import { getState, setState, registerEvent } from '../../store';
import { getMonthHistory, getDateAverage, getAllExpense } from '../../utils';

const GraphPage = () => {
  const expenseType = getState('expenseType');
  const category = getState('category');
  const currentYear = getState('currentYear');
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  setState(
    'monthHistory',
    getMonthHistory(currentYear, currentMonth, hkbHistory)
  );

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
    // 일별 amount를 계산한다.
    const monthExpense = getAllExpense(monthHistory);
    const dayHistory = [];
    monthHistory.forEach((item) => {
      const date = item.createdAt.getDate();
      dayHistory[date] = dayHistory[date] || 0;
      dayHistory[date] = dayHistory[date] + item.amount;
    });

    const dateAverage = getDateAverage(dayHistory);
    return { categoryHistList, dayHistory, dateAverage };
  }

  // let categoryHistList = [];
  // expenseCategory.map((cate) => {
  //   let categoryName = '';
  //   let amount = 0;
  //   monthHistory.map((item) => {
  //     if (cate.name === item.category) {
  //       categoryName = item.category;
  //       amount += item.amount;
  //     }
  //   });
  //   if (!categoryName) return;
  //   categoryHistList = categoryHistList.concat({ name: categoryName, amount });
  // });
  // console.log(categoryHistList);
  // 3. 계산한 amount로 percent를 구한다.

  const { categoryHistList, dayHistory, dateAverage } = init();

  const circleBar =
    Graph.Circle(categoryHistList) + Graph.Bar(categoryHistList);
  const expenseTypeContents =
    expenseType === 'category' ? circleBar : Graph.Line(dayHistory, dateAverage);

  function onGraphChange(list, dayHistory, dateAverage ) {
    const categoryType = Graph.Circle(list) + Graph.Bar(list);
    const type = getState('expenseType');
    const graphContainer = document.querySelector('.graph_container');
    const expenseTypeContent =
      type === 'category' ? categoryType : Graph.Line(dayHistory, dateAverage);
    graphContainer.innerHTML = expenseTypeContent;
  }

  function onChange() {
    const { categoryHistList, dayHistory, dateAverage } = init();
    onGraphChange(categoryHistList, dayHistory, dateAverage);
  }

  registerEvent('expenseType', onChange);
  registerEvent('monthHistory', onChange);

  return `
        <div class="graph">
          ${ExpenseFilter()}
          <div class="graph_container">${expenseTypeContents}</div>
        </div>`;
};

export default GraphPage;
