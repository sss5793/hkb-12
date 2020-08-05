import './login.scss';

const Login = () => (`
    <div class="login-page">
      <div class="login-container">
        <h1>우아한 가계부</h1>
        <a href="/api/user/login">
          <button class="github-btn">
            <img src=${require('../../assets/images/logo-github.svg').default}>
            <span>Login with GitHub<span>
          </button>
        </a>
      </div>
    </div>
  `);

export default Login;
