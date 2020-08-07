import './layout.scss';
import Header from './header';
import Container from './container';
import Modal from '../modal';

const Layout = (child) => (
  `<section class="layout">
      ${Header()}
      ${Container(child)}
      ${Modal()}
    </section>`
);

export default Layout;
