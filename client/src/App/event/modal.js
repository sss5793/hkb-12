import { getState, setState } from '../store';
import {
  createPayment,
  getPayment,
  removePayment,
} from '../apis';
import { getAllExpense } from '../utils';

export function OpenModalBtnEvent(e) {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('open');
}

async function getAllPayments() {
  const res = await getPayment();
  if (res.success) {
    setState('payment',res.payload);
  }
}

export async function ModalClickEvent(e) {
  if (e.target.closest('.modal-header .close-btn') || e.target.closest('.modal-bg')) {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('open');
  } else if (e.target.closest('.delete-btn')) { // 삭제
    const name = e.target.closest('.delete-btn').previousElementSibling.innerText;
    const res = await removePayment(name);
    if (res.success) {
      getAllPayments();
    } else {
      alert("결제수단을 삭제하는데 실패하였습니다.");
    }
  } else if (e.target.closest('.register')) { // 등록
    let payment = document.querySelector('.input-payment');

    if (!payment.value) {
      alert('결제수단을 입력해주세요.');
      return false;
    }

    const res = await createPayment({ name: payment.value });

    if (res.success) {
      getAllPayments();
      payment.value = '';
    } else {
      alert('결제수단은 생성하는데 실패하였습니다.');
    }
  }
}
