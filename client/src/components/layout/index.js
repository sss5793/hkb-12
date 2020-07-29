import './layout.scss';
import Header from "./header";
import Container from "./container";

const Layout = (child) => {
    return(
        `<section class="layout">
            ${Header()}
            ${Container(child)}
        </section>`
    );
}

export default Layout;
