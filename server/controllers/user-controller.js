/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-shadow */
const UserService = require('../services/user-service');
const passport = require('passport');

function localLogin(req, res, next) {
  if (!req.user) {
    return res.json('로컬 로그인을 다시 해주세요');
  }
  return res.json('welcome from local');
}

async function githubLogin(req, res, next) {
  if (!req.user) {
    return res.json('깃헙 로그인을 다시 해주세요');
  }
  const user = await UserService.findUserById(req.user);
  return res.redirect('/hkb');
}

module.exports = {
  localLogin,
  githubLogin,
};
