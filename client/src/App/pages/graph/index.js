import './graph.scss';
import { Graph, ExpenseFilter } from '../../components';
import { getState, setState, registerEvent } from '../../store';
import { getMonthHistory } from '../../utils';

const GraphPage = () => {
  const expenseType = getState('expenseType');
  const category = getState('category');
  const currentMonth = getState('currentMonth');
  const hkbHistory = getState('hkbHistory');
  setState('monthHistory', getMonthHistory(currentMonth, hkbHistory));

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
    return categoryHistList;
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

  const categoryHistList = init();

  const circleBar =
    Graph.Circle(categoryHistList) + Graph.Bar(categoryHistList);
  const expenseTypeContents =
    expenseType === 'category' ? circleBar : Graph.Line();

  function onGraphChange(list) {
    const categoryType = Graph.Circle(list) + Graph.Bar(list);
    const type = getState('expenseType');
    const graphContainer = document.querySelector('.graph_container');
    const expenseTypeContent = type === 'category' ? categoryType : Graph.Line();
    graphContainer.innerHTML = expenseTypeContent;
  }
  
  function onChange() {
    const categoryHistList = init();
    onGraphChange(categoryHistList);
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
