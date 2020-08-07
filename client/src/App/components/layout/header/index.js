import './header.scss';
import ModalBtn from './modalBtn';

const Header = () => (
  `<header class="header">
    <div class="title">가계부</div>
    ${ModalBtn()}
  </header>`
);

export default Header;
