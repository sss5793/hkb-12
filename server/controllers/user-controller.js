/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-shadow */
const passport = require('passport');

function localLogin(req, res, next) {
  if (!req.user) {
    return res.json('로컬 로그인을 다시 해주세요');
  }
  return res.json('welcome from local');
}

function githubLogin(req, res, next) {
  console.log('controller', req, res);
  if (!req.user) {
    return res.json('깃헙 로그인을 다시 해주세요');
  }
  return res.json('welcome from github');
}

module.exports = {
  localLogin,
  githubLogin,
};
