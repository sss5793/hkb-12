import {getState, registerEvent, setState} from "./store";
import Route from "./route";
import './assets/reset.scss';
import './index.scss';

const pageRoute = (path) => {
    const app = document.querySelector('.App');
    app.innerHTML = Route(path);
};

const App = () => {
    const path = getState('path');

    registerEvent('path', pageRoute);

    const app = document.querySelector('.App');

    // 페이지 이동 액션 등록
    app.addEventListener('click', (e) => {
        const goHkbBtn = document.querySelector('.go_hbk');
        const goCalendarBtn = document.querySelector('.go_calendar');
        const goGraphBtn = document.querySelector('.go_graph');

        if(e.target === goHkbBtn){
            history.pushState('hbk', '', '/');
            setState('path','hbk');
        }else if (e.target === goCalendarBtn){
            history.pushState('calendar', '', '/calendar');
            setState('path','calendar');
        }else if (e.target === goGraphBtn){
            history.pushState('graph', '', '/graph');
            setState('path','graph');
        }
    });

    //popstate 이벤트 발생시, 현재 path를 가져온 뒤, 적절한 view렌더링을 한다.
    window.addEventListener("popstate", () => {
        setState('path',history.state);
        pageRoute(history.state);
    });

    return Route(path);
};

const app = document.querySelector('.App');
app.innerHTML = App();


