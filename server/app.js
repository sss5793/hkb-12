const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');

const indexRouter = require('./routes/index');

const app = express();
// 세션 설정
app.use(session({
  secret: 'cats',
  resave: true,
  saveUninitialized: false,
})); // 세션 활성화

require('./passport')(passport);

app.use(passport.initialize());
app.use(passport.session()); // 로그인 세션 유지
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

module.exports = app;
