const express = require('express');
const transactionSchema = require('../schema/transactionSchema');
const TransactionModel = require('../util/dbConnect')(transactionSchema, 'transaction');
const walletSchema = require('../schema/walletSchema');
const WalletModel = require('../util/dbConnect')(walletSchema, 'wallet');

function createTransaction(reqBody) {
  const {
    walletId, category, detail, amount,
  } = reqBody;
  return new TransactionModel({
    walletId, category, detail, amount, date: Date.now(),
  });
}

async function saveTransaction(req, res) {
  const { walletId } = req.params;
  try {
    const wallet = await WalletModel.findById(walletId);
    if (wallet === null) {
      throw new Error('No such wallet');
    }
    const newTransaction = await createTransaction(req.body).save();
    await WalletModel.findByIdAndUpdate(walletId,
      { balance: wallet.balance - req.body.amount });
    res.status(200).send(newTransaction);
  } catch (err) {
    res.status(400).send(err);
  }
}
async function getTransaction(req, res) {
  const { walletId } = req.params;
  try {
    const transaction = await TransactionModel.find({ walletId });
    res.status(200).send(transaction);
  } catch (err) {
    res.status.send(err);
  }
}

const transactionRouter = express.Router();
transactionRouter.get('/:walletId', getTransaction);
transactionRouter.post('/:walletId', saveTransaction);
module.exports = transactionRouter;
