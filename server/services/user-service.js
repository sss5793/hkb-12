const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const userRepo = require('../repository/user-repo');

const localLogin = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        // form에서 id와 pw를 가져옵니다.
        usernameField: 'id',
        passwordField: 'pw',
        passReqToCallback: true,
      }, // 인증 요청
      async (req, id, pw, done) => {
        const user = await userRepo.authenticateUser(id, pw);
        if (id === user[0].userId && pw === user[0].password) {
          console.log('로그인 성공');
          return done(null, user[0]);
        }
        console.log('계정이 없습니다.');
        return done(null, false);
      },
    ),
  );
};

const githubLogin = (passport) => {
  // console.log('passport...',passport);
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GH_ID,
        clientSecret: process.env.GH_KEY,
        callbackURL: `http://${process.env.SERVER}:3000/api/user/login/callback`,
      }, // 인증 요청
      (accessToken, refreshToken, profile, done) => {
        const { username: userId, displayName: name } = profile;
        // const profileImageUrl = profile.photos[0].value;
        const user = { userId, name };
        done(null, user);
      },
    ),
  );
};

const findUserById = async (data) => {
  let user = await userRepo.findUserById(data.userId);
  if (!user) {
    await userRepo.createUser(data);
    user = await userRepo.findUserById(data.userId);
  }
  return user;
};

module.exports = {
  localLogin,
  githubLogin,
  findUserById,
};
