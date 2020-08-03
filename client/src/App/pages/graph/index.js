import { Graph } from '../../components';

const GraphPage = () => (
  `<div class="graph">
     ${Graph.Circle()}
     ${Graph.Bar()}
   </div>`
);

export default GraphPage;
