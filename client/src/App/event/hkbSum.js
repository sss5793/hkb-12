import { HkbSum } from '../components';

function hkbSumEvent(e) {
  const incomeCheck = document.querySelector('.hkb_sum #income');
  const expenseCheck = document.querySelector('.hkb_sum #expense');
  console.log()
  if (e.target.closest("#income_check")) {
    if (incomeCheck.checked) {
      incomeCheck.checked = false;
      const incomeArr = document.querySelectorAll('.income_amount');
      [...incomeArr].forEach((item) => {
        item.style.display = 'none';
      });
    } else {
      incomeCheck.checked = true;
      const incomeArr = document.querySelectorAll('.income_amount');
      const displayVal = window.location.pathname === '/hkb' ? 'revert' : 'block';
      [...incomeArr].forEach((item) => {
        item.style.display = displayVal;
      });
    }
  }

  if (e.target.closest("#expense_check")) {
    if (expenseCheck.checked) {
      expenseCheck.checked = false;
      const expenseArr = document.querySelectorAll('.expense_amount');
      [...expenseArr].forEach((item) => {
        item.style.display = 'none';
      });
    } else {
      expenseCheck.checked = true;
      const expenseArr = document.querySelectorAll('.expense_amount');
      const displayVal = window.location.pathname === '/hkb' ? 'revert' : 'block';
      [...expenseArr].forEach((item) => {
        item.style.display = displayVal;
      });
    }
  }
}

export default hkbSumEvent;
