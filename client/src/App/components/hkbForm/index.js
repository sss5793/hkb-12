import './hkbForm.scss';
import { getState, setState } from '../../store';
import { numberWithCommas, getMonth } from '../../utils';

const HkbForm = () => {
  const categoryList = ['식비', '생활', '교통'];
  const paymentList = ['국민은행', '현대카드'];

  const histDate = new Date();
  const amount = 0;

  const dateFormat = (date) => {
    const year = date.getFullYear();
    const month = getMonth(date);
    const day = date.getDate();
    const dateForm = `${year}-${month}-${day}`;
    return dateForm;
  };

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
