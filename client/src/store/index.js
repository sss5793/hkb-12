const observer = {
  user: {
    data: 'user1',
    eventHandler: () => {},
  },
  account: {
    data: ['거래 1', '거래 2'],
    eventHandler: () => {},
  },
  path: {
    data: 'hkb',
    eventHandler: () => {},
  },
  currentType: {
    data: '수입',
    eventHandler: () => {},
  },
  currentMonth: {
    data: new Date().getMonth() + 1,
    eventHandler: () => {},
  },
  hkbHistory: {
    data: [
      {
        category: '쇼핑/뷰티',
        content: '미용실',
        payment: '현대카드',
        amount: 26000,
        type: '지출',
        createdAt: new Date(),
      },
      {
        category: '식비',
        content: '맥도날드',
        payment: '현대카드',
        amount: 26000,
        type: '지출',
        createdAt: new Date(),
      },
      {
        category: '월급',
        content: '월급',
        payment: '국민은행',
        amount: 2000000,
        type: '수입',
        createdAt: new Date(),
      },
      {
        category: '식비',
        content: '홍콩반점',
        payment: '현대카드',
        amount: 6000,
        type: '지출',
        createdAt: new Date('2020-07-29'),
      },
      {
        category: '식비',
        content: '홍콩반점',
        payment: '현대카드',
        amount: 6000,
        type: '지출',
        createdAt: new Date('2020-07-28'),
      },
      {
        category: '식비',
        content: '홍콩반점',
        payment: '현대카드',
        amount: 6000,
        type: '지출',
        createdAt: new Date('2020-06-29'),
      },
    ],
    eventHandler: () => {},
  },
};

function registerEvent(key, eventHandler) {
  // 등록된 키에 이벤트를 등록해준다.
  // 데이터가 바뀌고 나서 실행하고 싶은 이벤트를 등록하면 될 것 같다.
  observer[key].eventHandler = eventHandler;
}

function getState(key) {
  // store에 등록한 키의 데이터를 리턴시켜준다.
  return observer[key].data;
}

function setState(key, data) {
  // store에 등록한 키의 데이터를 업데이트 한다.
  observer[key].data = data;
  // 데이터가 변경되고 등록된 이벤트를 실행한다.
  observer[key].eventHandler(observer[key].data);
}

export { registerEvent, setState, getState };
