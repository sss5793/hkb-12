import './container.scss';
import Navigation from "./navigation";

const Container = (child) => {
    return(
        `<div class="container">
            ${Navigation()}
            ${child}
        </div>`
    );
}

export default Container;
