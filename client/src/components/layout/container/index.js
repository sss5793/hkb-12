import './container.scss';
import Navigation from './navigation';

const Container = (child) => (
  `<div class="container">
      ${Navigation()}
      ${child}
  </div>`
);

export default Container;
