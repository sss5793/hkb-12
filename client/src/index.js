import { registerEvent, setState, getState } from "./store";

function init() {
    // 초기 데이터
    const user = getState('user');
    console.log(user);
    // 이벤트 등록
    registerEvent('user',(data) => console.log(data));
    registerEvent('account',(data) => console.log(data));

    // 데이터 변경
    setState('user', '사용자 1');
}

init();
