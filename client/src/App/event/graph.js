import { setState } from '../store';

export function GraphEvent(e) {
  // 통계 페이지 카테고리 별, 일별 라디오 버튼 toggle
  // expenseType 상태 바꿔주면서 그래프 바꿔주기
  const categoryRadio = document.querySelector('#expense_type_category');
  const daysRadio = document.querySelector('#expense_type_days');

  if (e.target.closest('.expense_type_category')) {
    const dateAmount = document.querySelector('.amount_average .date_amount');
    dateAmount.style.display = 'none';
    categoryRadio.checked = true;
    daysRadio.checked = false;
    setState('expenseType', 'category');
  }
  if (e.target.closest('.expense_type_days')) {
    const dateAmount = document.querySelector('.amount_average .date_amount');
    dateAmount.style.display = 'flex';
    categoryRadio.checked = false;
    daysRadio.checked = true;
    setState('expenseType', 'days');
  }
}

export function GraphMouseOver(e) {
  if (e.target.closest('.circle .label .item')) {
    const item = e.target.closest('.label .item');
    const circle = document.querySelector(`.${item.id}`);
    circle.classList.add('pie_hover_animation');
  }
}

export function GraphMouseOut(e) {
  if (e.target.closest('.circle .label .item')) {
    const item = e.target.closest('.label .item');
    const circle = document.querySelector(`.${item.id}`);
    if (circle.classList.contains('pie_hover_animation')) {
      circle.classList.remove('pie_hover_animation');
    }
  }
}
