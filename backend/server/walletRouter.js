const express = require('express');
const walletSchema = require('../schema/walletSchema');
const WalletModel = require('../util/dbConnect')(walletSchema, 'wallet');

const walletRouter = express.Router();
function createWallet(reqBody) {
  const { name, balance, userId } = reqBody;
  return new WalletModel({ name, balance, userId });
}

async function saveWallet(req, res) {
  const { name, userId } = req.body;
  const existWallet = await WalletModel.findOne({ name, userId });
  if (existWallet !== null) {
    res.status(409).send('Duplicated wallet name');
  } else {
    try {
      const newWallet = await createWallet(req.body).save();
      res.status(200).send(newWallet);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}
async function getWallet(req, res) {
  const { userId } = req.params;
  try {
    const wallet = WalletModel.find({ userId }, 'name balance _id');
    res.send(wallet);
  } catch (err) {
    res.status(400).send(err);
  }
}
walletRouter.post('/:userId', saveWallet);
walletRouter.get('/:userId', getWallet);

module.exports = walletRouter;
