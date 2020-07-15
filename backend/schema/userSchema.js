const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  email: String, password: String, salt: String, wallet: String,
});
module.exports = userSchema;
