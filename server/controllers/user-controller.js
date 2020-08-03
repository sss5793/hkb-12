/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-shadow */
const passport = require('passport');

function loginUser(req, res, next) {
  if (!req.user) {
    return res.json('로그인을 다시 해주세요');
  }
  return res.json('welcome');
}

module.exports = {
  loginUser,
};
