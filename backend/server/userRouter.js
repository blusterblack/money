const express = require('express');
const userSchema = require('../schema/userSchema');
const UserModel = require('../util/dbConnect')(userSchema, 'user');
const { isMatch, createSecurePassword } = require('../util/password');

const userRouter = express.Router();
function createUser(reqBody) {
  const { email, password } = reqBody;
  const { salt, securePassword } = createSecurePassword(password);
  return new UserModel({
    email, salt, password: securePassword,
  });
}

async function register(req, res) {
  const existUser = await UserModel.findOne({ email: req.body.email });
  if (existUser !== null) {
    res.status(409).send('Email is already registered.');
  } else {
    try {
      const newUser = await createUser(req.body).save();
      res.status(200).send(newUser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user === null || !isMatch(user.salt, password, user.password)) {
      res.status(400).send('No match');
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

userRouter.post('/login', login);
userRouter.post('/register', register);

module.exports = userRouter;
