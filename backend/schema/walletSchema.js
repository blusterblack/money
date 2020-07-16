const mongoose = require('mongoose');

const { Schema } = mongoose;
const walletSchema = new Schema({
  name: String, balance: mongoose.Decimal128, userId: mongoose.ObjectId,
});
module.exports = walletSchema;
