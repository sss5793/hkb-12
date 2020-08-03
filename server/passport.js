const { local } = require('./services/user-service');

module.exports = (passport) => {
  // user-service에서 local 인증 성공시,
  // serializeUser 메서드를 이용하여 사용자 정보를 Session에 저장할 수 있다.
  passport.serializeUser((user, done) => {
    console.log('serialize');
    done(null, user);
  });

  // 인증 후, 페이지 접근시 마다 사용자 정보를 Session에서 읽어옴.
  passport.deserializeUser((user, done) => {
    console.log('deserialize');
    done(null, user);
  });

  local(passport);
};
