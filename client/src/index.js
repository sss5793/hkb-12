import { registerNotify, setState,getState } from "./store";

function init() {
    // 초기 데이터
    const user = getState('user');
    console.log(user);
    // 이벤트 등록
    registerNotify('user',(data) => console.log(data));
    registerNotify('account',(data) => console.log(data));

    // 데이터 변경
    setState('user', '사용자 1');
}

init();
