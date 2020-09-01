const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./userRouter');
const walletRouter = require('./walletRouter');
const transactionRouter = require('./transactionRouter');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/wallet', walletRouter);
app.use('/transaction', transactionRouter);

app.get('/', (req, res) => {
  res.send('ping');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listen on port ${port}`);
});
