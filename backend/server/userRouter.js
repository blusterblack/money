const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();
const userSchema = require('../schema/userSchema');
const { createSecurePassword, isMatch } = require('../util/password');

const uri = process.env.URI;
const connnection = mongoose.createConnection(uri,
  { useUnifiedTopology: true, useNewUrlParser: true });
const User = connnection.model('User', userSchema);

function createUser(data) {
  const { email, password } = data;
  const { salt, securePassword } = createSecurePassword(password);
  const user = new User({
    email, salt, password: securePassword, wallet: [],
  });

  return user;
}

const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
  createUser(req.body).save((err) => {
    if (err) res.status(400).send('Error');
    else res.status(200).send('Success');
  });
});

userRouter.post('/login', (req, resource) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, res) => {
    if (isMatch(res.salt, password, res.password)) {
      // eslint-disable-next-line no-underscore-dangle
      resource.status(200).send(res._id);
    } else {
      resource.status(400).send('No match');
    }
  });
});

module.exports = userRouter;
