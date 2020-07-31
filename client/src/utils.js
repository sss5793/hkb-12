export const numberWithCommas = (num) => {
  // 숫자만 입력 가능하게, 앞자리에 0 빼주기
  let commaNum = num.toString().replace(/^[0]|[^0-9,]/g, '');
  // 반점 제거
  commaNum = commaNum.toString().split(',').join('');
  // 3자리마다 콤마 넣어주기
  commaNum = commaNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (!commaNum) commaNum = 0;

  return commaNum;
};

export const getMonth = (date) => {
  const month =
    date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  return month;
};

export const getWeek = (date) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[date];
  return dayOfWeek;
};

export const daysOfHistory = (history) => {
  const daysHistory = [];
  history.forEach((element) => {
    const date = element.createdAt;
    const d = `${date.getFullYear()}${getMonth(date)}${date.getDate()}`;
    daysHistory[d] = daysHistory[d] || [];
    daysHistory[d].push(element);
  });
  return daysHistory;
};

export const getAllIncome = (history) => {
  let dayAllIncome = 0;
  history.forEach((item) => {
    if (item.type === '수입') {
      dayAllIncome += item.amount;
    }
  });

  return dayAllIncome;
};

export const getAllExpense = (history) => {
  let dayAllExpense = 0;
  history.forEach((item) => {
    if (item.type === '지출') {
      dayAllExpense += item.amount;
    }
  });

  return dayAllExpense;
};
