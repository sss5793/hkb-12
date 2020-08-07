import Item from './item';
import { getState, registerEvent } from '../../../../store';

const getNameList = (data) => {
  const list = data.map((item) => item.name);
  return list;
};

function onChange() {
  const payment = getState('payment');
  const list = document.querySelector('.list');
  list.innerHTML = getNameList(payment)
    .map((item) => Item(item))
    .join('');
  if (window.location.pathname === '/hkb') {
    const select = document.querySelector('.col .payment');
    select.innerHTML = `<option value="">선택하세요.</option>
    ${getNameList(payment)
    .map((item) => `<option value="${item}">${item}</option>`)
    .join('')}`;
  }
}

const List = () => {
  const payment = getState('payment');
  registerEvent('payment', onChange);
  return `<div class="list">
  ${getNameList(payment)
    .map((item) => Item(item))
    .join('')}
  </div>`;
};

export default List;
