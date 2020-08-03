import './graph.scss';
import { Graph, ExpenseFilter } from '../../components';
import {getState, registerEvent} from "../../store";

const GraphPage = () => {
     const expenseType = getState('expenseType');
     const category = Graph.Circle() + Graph.Bar();
     const expenseTypeContents = expenseType === 'category' ? category : Graph.Line();

     function onChange() {
          const expenseType = getState('expenseType');
          const graphContainer = document.querySelector('.graph_container');
          const expenseTypeContents = expenseType === 'category' ? category : Graph.Line();
          graphContainer.innerHTML = expenseTypeContents;
     }
     registerEvent('expenseType',onChange);

     return `
        <div class="graph">
          ${ExpenseFilter()}
          <div class="graph_container">${expenseTypeContents}</div>
        </div>`
};

export default GraphPage;
