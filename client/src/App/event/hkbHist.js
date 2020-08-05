import {getState, registerEvent, setState} from "../store";
import {numberWithCommas} from "../utils";

export function HkbHistClickEvent(e) {
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
};


export function HkbHistInputEvent(e) {
  // 통계 페이지 카테고리 별, 일별 라디오 버튼 toggle
  // expenseType 상태 바꿔주면서 그래프 바꿔주기
    const amountInput = document.querySelector('.hkb_form .amount');
    if (e.target === amountInput) {
      amountInput.value = numberWithCommas(e.target.value);
    }
};
