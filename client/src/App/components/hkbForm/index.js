import './hkbForm.scss';
import { getState, registerEvent } from '../../store';
import { numberWithCommas, getFullDate } from '../../utils';

const HkbForm = () => {
  const currentType = getState('currentType');
  const category = getState('category').filter(
    (item) => item.type === currentType
  );
  const payment = getState('payment');

  const histDate = new Date();
  const amount = 0;

  const getNameList = (data) => {
    const list = data.map((item) => item.name);
    return list;
  };

  function onChange() {
    // 거래 내역에서 분류가 바뀔 때 update 해주어야 할 것 - 분류, 카테고리
    const currentType = getState('currentType');
    const category = getState('category').filter(
      (item) => item.type === currentType
    );
    const hkbForm = document.querySelector('.hkb_form');
    const categorySelect = hkbForm.querySelector('.category');
    categorySelect.innerHTML =
      '<option value="">선택하세요.</option>' +
      getNameList(category)
        .map((item) => `<option value="${item}">${item}</option>`)
        .join('');
    // 분류 버튼 클릭
    const incomeBtn = document.querySelector('.hkb_form .income');
    const expenseBtn = document.querySelector('.hkb_form .expense');
    if (currentType === '수입') {
      incomeBtn.classList.add('active');
      expenseBtn.classList.remove('active');
    } else {
      incomeBtn.classList.remove('active');
      expenseBtn.classList.add('active');
    }
  }

  registerEvent('currentType', onChange);

  return `
  <div class='hkb_form'>
    <div class='row'>
      <div class='col'>
        <label>분류</label>
        <button class='income'>수입</button>
        <button class='expense'>지출</button>
      </div>
      <div class='col right'>
        <button class='contents_remove'>내용 지우기</button>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
        <label>날짜</label>
        <input type="date" class="createdAt" value="${getFullDate(
          histDate,
          '-'
        )}"/>
      </div>
      <div class='col'>
        <label>카테고리</label>
        <select class='category' name="category">
          <option value="">선택하세요.</option>
          ${getNameList(category)
            .map((item) => `<option value="${item}">${item}</option>`)
            .join('')}
        </select>
      </div>
      <div class='col'>
        <label>결제수단</label>
        <select class='payment' name="payment">
        <option value="">선택하세요.</option>
          ${getNameList(payment)
            .map((item) => `<option value="${item}">${item}</option>`)
            .join('')}
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
        <input type='text' class="content" value=''/>
      </div>
    </div>
    <div class='row'>
      <button class='confirm'>확 인</button>
    </div>
  </div>
  `;
};

export default HkbForm;
