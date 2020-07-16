const express = require('express');
const userSchema = require('../schema/userSchema');
const UserModel = require('../util/dbConnect')(userSchema, 'user');
const { isMatch, createSecurePassword } = require('../util/password');

function createUser(reqBody) {
  const { email, password } = reqBody;
  const { salt, securePassword } = createSecurePassword(password);
  return new UserModel({
    email, salt, password: securePassword,
  });
}
const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  UserModel.findOne({ email: req.body.email }, (err, doc) => {
    if (doc === null) {
      createUser(req.body).save((err) => {
        if (err) res.status(400).send(err);
        res.status(200).send('Create new account successfully');
      });
    } else {
      res.status(400).send('Email is already registered');
    }
  });
});

userRouter.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email }, (err, doc) => {
    if (doc === null || !isMatch(doc.salt, password, doc.password)) {
      res.status(400).send('No match');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      res.status(200).send(doc._id);
    }
  });
});

module.exports = userRouter;
