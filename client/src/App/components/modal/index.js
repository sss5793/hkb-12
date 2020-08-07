import ModalHeader from './header';
import Payment from './payment';
import './modal.scss';

const Modal = () => `
  <div class="modal">
    <div class="modal-container">
      ${ModalHeader()}
      ${Payment()}
    </div>
    <div class="modal-bg"></div>
  </div>
  `;

export default Modal;
