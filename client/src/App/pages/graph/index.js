import './graph.scss';
import { Graph, ExpenseFilter } from '../../components';

const GraphPage = () => (
  `<div class="graph">
     ${ExpenseFilter()}
     ${Graph.Circle()}
     ${Graph.Bar()}
   </div>`
);

export default GraphPage;
