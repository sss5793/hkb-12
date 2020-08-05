export const EndPoints = {
  // 모든 거래 내역을 가져옵니다.
  GET_HKBHIST :{
    method : 'GET',
    url: 'api/hkbhist',
  },
  // 새로운 거래 내역을 만듭니다.
  POST_HKBHIST :{
    method : 'POST',
    url: 'api/hkbhist',
  },
  // {id} 거래 내역을 업데이트 합니다.
  PUT_HKBHIST :{
    method : 'PUT',
    url: 'api/hkbhist?id=',
  },
  // {id} 거래 내역을 삭제합니다
  DELETE_HKBHIST :{
    method : 'DELETE',
    url: 'api/hkbhist?id=',
  },
  // 모든 결제수단을 가져옵니다.
  GET_PAYMENT :{
    method : 'GET',
    url: 'api/payment',
  },
  // 새로운 결제수단을 만듭니다
  POST_PAYMENT :{
    method : 'POST',
    url: 'api/payment',
  },
  // {name} 결제수단을 삭제합니다
  DELETE_PAYMENT :{
    method : 'DELETE',
    url: 'api/payment?name=',
  },
  // {type} 타입별 결제수단을 가져옵니다.
  GET_CATEGORY :{
    method : 'GET',
    url: 'api/category?type=',
  },
  // 새로운 사용자를 등록합니다.
  POST_USER :{
    method : 'POST',
    url: 'api/user',
  },
  // 새로운 사용자를 등록합니다.
  GET_LOGIN :{
    method : 'GET',
    url: 'api/user/login',
  },
};
