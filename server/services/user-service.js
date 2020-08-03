const LocalStrategy = require('passport-local').Strategy;
const userRepo = require('../repository/user-repo');

const local = (passport) => {
  passport.use(new LocalStrategy({
    // form에서 id와 pw를 가져옵니다.
    usernameField: 'id',
    passwordField: 'pw',
    passReqToCallback: true,
  }, // 인증 요청
  (async (req, id, pw, done) => {
    const user = await userRepo.authenticateUser(id, pw);
    if (id === user[0].userId && pw === user[0].password) {
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
