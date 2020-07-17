const express = require('express');
const walletSchema = require('../schema/walletSchema');
const WalletSModel = require('../util/dbConnect')(walletSchema, 'wallet');

const walletRouter = express.Router();
function createWallet(reqBody) {
  const { name, balance, userId } = reqBody;
  return new WalletSModel({ name, balance, userId });
}

walletRouter.post('/:userId', (req, res) => {
  createWallet(req.body).save((err) => {
    if (err) res.status(400).send(err);
    else res.status(200).send('Success wallet create');
  });
});

walletRouter.get('/:userId', (req, res) => {
  const { userId } = req.params;
  WalletSModel.find({ userId }, 'name balance _id', (err, doc) => {
    res.send(doc);
  });
});

module.exports = walletRouter;
