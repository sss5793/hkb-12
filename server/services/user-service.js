const LocalStrategy = require('passport-local').Strategy;
const userRepo = require('../repository/user-repo');

const local = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'pw',
    passReqToCallback: true,
  }, // 인증 요청
  (async (req, id, pw, done) => {
    if (id === 'admin' && pw === 'admin') {
      const user = await userRepo.authenticateUser(id, pw);
      console.log('로그인 성공');
      return done(null, user[0]);
    }
    console.log('계정이 없습니다.');
    return done(null, false);
  })));
};

module.exports = {
  local,
};
