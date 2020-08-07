import './container.scss';
import Navigation from './navigation';

const Container = (child) => (
  `<div class="container">
    ${Navigation()}
    <div class="contents">
      ${child}
    </div>
  </div>`
);

export default Container;
