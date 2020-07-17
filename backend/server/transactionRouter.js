const express = require('express');
const transactionSchema = require('../schema/transactionSchema');
const TransactionModel = require('../util/dbConnect')(transactionSchema, 'transaction');
const walletSchema = require('../schema/walletSchema');
const WalletSModel = require('../util/dbConnect')(walletSchema, 'wallet');

function createTransaction(reqBody) {
  const {
    walletId, category, detail, amount,
  } = reqBody;
  return new TransactionModel({
    walletId, category, detail, amount, date: Date.now(),
  });
}
const transactionRouter = express.Router();
transactionRouter.post('/:walletId', (req, res) => {
  createTransaction(req.body).save((error) => {
    if (error) res.status(400).send(error);
    const { walletId } = req.params;
    WalletSModel.findById(walletId, (err, doc) => {
      WalletSModel.findByIdAndUpdate(walletId, { balance: doc.balance - req.body.amount }, (err1, doc1) => { res.send(doc1); });
    });
  });
});

transactionRouter.get('/:walletId', (req, res) => {
  const { walletId } = req.params;

  TransactionModel.find({ walletId }, (err, doc) => {
    res.send(doc);
  });
});

module.exports = transactionRouter;
