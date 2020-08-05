import { getState, registerEvent, setState } from "../store";
import { numberWithCommas, numberWithoutCommas } from "../utils";
import {createHkbHist, getAllHkbHist} from '../apis';

async function getHkbHistory() {
  const res = await getAllHkbHist();
  if(res.success){
    const data = res.payload.map((item) => ({ ...item, createdAt: new Date(item.createdAt)}));
    setState('hkbHistory',data);
  }
}
export async function HkbHistClickEvent(e) {
    const confirm = document.querySelector('.hkb_form .confirm');
    if (e.target === confirm) {
      console.log('내역 추가...');
      // 데이터 추가하기
      // 비었으면 return..
      const form = document.querySelector('.hkb_form');
      const category = form.querySelector('.category');
      const payment = form.querySelector('.payment');
      const createdAt = form.querySelector('.createdAt');
      const amount = form.querySelector('.amount');
      const content = form.querySelector('.content');

      if(!category.value){
        alert('카테고리를 선택해주세요.');
        return false;
      }else if(!payment.value) {
        alert('결제수단을 선택해주세요.');
        return false;
      }else if(parseInt(amount.value) === 0) {
        alert('금액을 입력해주세요.');
        return false;
      }else if(!content.value) {
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

      const res = await createHkbHist(data);
      console.log(res);
      if(res.success){
        getHkbHistory();
      }

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
