'use strict';

// Importing functions from the controller
const {
  signUp,
  login,
  logout,
} = require('../controllers/userController');

// Importing the express router
const userRouter = require('express').Router();

userRouter.route('/')
  .post(signUp)

userRouter.route('/login')
  .post(login);

userRouter.route('/logout')
  .post(logout);

module.exports = userRouter;
