const observer = {
  user: {
    data: 'user1',
    eventHandler: null,
  },
  account: {
    data: ['거래 1', '거래 2'],
    eventHandler: null,
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

export {
  registerEvent,
  setState,
  getState,
};
