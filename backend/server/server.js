const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./userRouter');
const walletRouter = require('./walletRouter');

const app = express();
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/wallet', walletRouter);

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('listen on port 3000');
});
