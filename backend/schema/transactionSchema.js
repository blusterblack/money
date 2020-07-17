const mongoose = require('mongoose');

const { Schema } = mongoose;
const transactionSchema = new Schema({
  walletId: mongoose.ObjectId,
  category: String,
  detail: String,
  date: Date,
  amount: mongoose.Decimal128,
});
module.exports = transactionSchema;
