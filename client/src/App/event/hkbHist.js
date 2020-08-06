import { getState, setState } from '../store';
import {
  numberWithCommas,
  numberWithoutCommas,
  getFullDate,
  getMonthHistory,
} from '../utils';
import {
  createHkbHist,
  getAllHkbHist,
  removeHkbHist,
  updateHkbHist,
} from '../apis';

async function getHkbHistory() {
  const res = await getAllHkbHist();
  if (res.success) {
    const data = res.payload.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt),
    }));
    setState('hkbHistory', data);
    const currentYear = getState('currentYear');
    const currentMonth = getState('currentMonth');
    setState('monthHistory', getMonthHistory(currentYear, currentMonth, data));
  }
}

function resetForm() {
  const form = document.querySelector('.hkb_form');
  const category = form.querySelector('.category');
  const payment = form.querySelector('.payment');
  const createdAt = form.querySelector('.createdAt');
  const amount = form.querySelector('.amount');
  const content = form.querySelector('.content');
  const contentsRemoveBtn = form.querySelector('.contents_remove');

  category.value = '';
  payment.value = '';
  createdAt.value = getFullDate(new Date(), '-');
  amount.value = 0;
  content.value = '';
  contentsRemoveBtn.innerText = '내용 지우기';
}

export async function HkbHistClickEvent(e) {
  const contentsRemoveBtn = document.querySelector(
    '.hkb_form .contents_remove'
  );
  // 내용 지우기 버튼 클릭
  if (e.target === contentsRemoveBtn) {
    if (contentsRemoveBtn.innerText !== '삭제') {
      resetForm();
    } else {
      // 현재 데이터 아이디 db에서 삭제하기
      const currentHistId = getState('currentHistId');
      const res = await removeHkbHist(currentHistId);
      if (res.success) {
        getHkbHistory();
        setState('currentType', '수입');
        setState('currentHistId', null);
        resetForm();
      }
    }
  }

  const confirm = document.querySelector('.hkb_form .confirm');
  // 확인 버튼 클릭
  if (e.target === confirm) {
    // 데이터 추가하기
    // 비었으면 return..
    const form = document.querySelector('.hkb_form');
    const category = form.querySelector('.category');
    const payment = form.querySelector('.payment');
    const createdAt = form.querySelector('.createdAt');
    const amount = form.querySelector('.amount');
    const content = form.querySelector('.content');

    if (!category.value) {
      alert('카테고리를 선택해주세요.');
      return false;
    }
    if (!payment.value) {
      alert('결제수단을 선택해주세요.');
      return false;
    }
    if (parseInt(amount.value) === 0) {
      alert('금액을 입력해주세요.');
      return false;
    }
    if (!content.value) {
      alert('내용을 입력해주세요.');
      return false;
    }

    const data = {
      category: category.value,
      payment: payment.value,
      amount: numberWithoutCommas(amount.value),
      createdAt: new Date(createdAt.value),
      content: content.value,
    };

    const currentHistId = getState('currentHistId');
    if (currentHistId) {
      const res = await updateHkbHist(currentHistId, data);
      if (res.success) {
        getHkbHistory();
        resetForm();
      }
    } else {
      const res = await createHkbHist(data);
      if (res.success) {
        getHkbHistory();
        resetForm();
      }
    }
  }

  // 분류 버튼 클릭
  const incomeBtn = document.querySelector('.hkb_form .income');
  const expenseBtn = document.querySelector('.hkb_form .expense');
  if (e.target === incomeBtn) {
    setState('currentType', '수입');
  }
  if (e.target === expenseBtn) {
    setState('currentType', '지출');
  }

  // case_history 컴포넌트 클릭
  if (e.target.closest('.case_history')) {
    const caseHistory = e.target.closest('.case_history');
    const form = document.querySelector('.hkb_form');
    const categoryNode = form.querySelector('.category');
    const paymentNode = form.querySelector('.payment');
    const createdAtNode = form.querySelector('.createdAt');
    const amountNode = form.querySelector('.amount');
    const contentNode = form.querySelector('.content');

    const histIdName = caseHistory.id;
    const histId = histIdName.split('_')[1];
    const hkbHistory = getState('hkbHistory');
    const selectData = hkbHistory.filter(
      (item) => item.id === parseInt(histId)
    );
    setState('currentHistId', parseInt(histId));
    const {
      category,
      payment,
      amount,
      content,
      createdAt,
      type,
    } = selectData[0];
    // form안에 내용 바꿔주기
    setState('currentType', type);
    categoryNode.value = category;
    paymentNode.value = payment;
    amountNode.value = numberWithCommas(amount);
    contentNode.value = content;
    createdAtNode.value = getFullDate(new Date(createdAt), '-');
    // form안에 내용 바꿔주고, 내용 지우기 버튼 삭제로 바꾸기
    contentsRemoveBtn.textContent = '삭제';
  }
}

export function HkbHistInputEvent(e) {
  // 통계 페이지 카테고리 별, 일별 라디오 버튼 toggle
  // expenseType 상태 바꿔주면서 그래프 바꿔주기
  const amountInput = document.querySelector('.hkb_form .amount');
  if (e.target === amountInput) {
    amountInput.value = numberWithCommas(e.target.value);
  }
}
