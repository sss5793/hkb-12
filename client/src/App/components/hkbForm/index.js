import './hkbForm.scss';
import { getState, setState } from '../../store';
import { numberWithCommas, getMonth, getDate } from '../../utils';

const HkbForm = () => {
  const categoryList = ['식비', '생활', '교통'];
  const paymentList = ['국민은행', '현대카드'];

  const histDate = new Date();
  const amount = 0;

  const dateFormat = (date) => {
    const year = date.getFullYear();
    const month = getMonth(date);
    const day = getDate(date);
    const dateForm = `${year}-${month}-${day}`;
    return dateForm;
  };

  const app = document.querySelector('.App');

  app.addEventListener('input', (e) => {
    const amountInput = document.querySelector('.hkb_form .amount');
    if (e.target === amountInput) {
      amountInput.value = numberWithCommas(e.target.value);
    }
  });

  app.addEventListener('click', (e) => {
    e.preventDefault();
    const confirm = document.querySelector('.hkb_form .confirm');
    if (e.target === confirm) {
      // 데이터 추가하기
      // 비었으면 return..
      const form = document.querySelector('.hkb_form');
      const category = form.querySelector('.category');
      const payment = form.querySelector('.payment');
    }

    const incomeBtn = document.querySelector('.hkb_form .income');
    const expenseBtn = document.querySelector('.hkb_form .expense');
    if (e.target === incomeBtn) {
      incomeBtn.classList.add('active');
      expenseBtn.classList.remove('active');
      setState('currentType', '수입');
    }
    if (e.target === expenseBtn) {
      incomeBtn.classList.remove('active');
      expenseBtn.classList.add('active');
      setState('currentType', '지출');
    }
  });

  return `
  <div class='hkb_form'>
    <div class='row'>
      <div class='col'>
        <label>분류</label>
        <button class='income active'>수입</button>
        <button class='expense'>지출</button>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
        <label>날짜</label>
        <input type="date" value="${dateFormat(histDate)}"/>
      </div>
      <div class='col'>
        <label>카테고리</label>
        <select class='category' name="category">
          <option value="">선택하세요.</option>
          ${categoryList
            .map((item) => `<option value="${item}">${item}</option>`)
            .join()}
        </select>
      </div>
      <div class='col'>
        <label>결제수단</label>
        <select class='payment' name="payment">
        <option value="">선택하세요.</option>
          ${paymentList
            .map((item) => `<option value="${item}">${item}</option>`)
            .join()}}
        </select>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
        <label>금액</label>
        <div class='amount_input_box'>
          <input type='text' class='amount' value='${numberWithCommas(
            amount
          )}'/>
          <span>원</span>
        </div>
      </div>
      <div class='col'>
        <label>내용</label>
        <input type='text' value=''/>
      </div>
    </div>
    <div class='row'>
      <button class='confirm'>확 인</button>
    </div>
  </div>
  `;
};

export default HkbForm;
