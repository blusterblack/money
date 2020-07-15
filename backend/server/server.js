const express = require('express');
const userRouter = require('./userRouter');

const app = express();
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('GET');
});

app.listen('3000', () => {
  // eslint-disable-next-line no-console
  console.log('listen on port 3000');
});
