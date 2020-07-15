const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const userSchema = require('../schema/userSchema');

function createUser() {
  // TODO
}
const userRouter = express.Router();
userRouter.use(bodyParser.json());
console.log(process.env);

const uri = process.env.URI;
const connnection = mongoose.createConnection(uri,
  { useUnifiedTopology: true, useNewUrlParser: true });
const User = connnection.model('User', userSchema);

userRouter.post('/register', (req, res) => {
  createUser(req.body).save();
  res.send('Save successfully');
});

module.exports = userRouter;
