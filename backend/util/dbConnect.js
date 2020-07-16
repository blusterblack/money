const mongoose = require('mongoose');
require('dotenv').config();
// TODO
module.exports = function connect(schema) {
  const uri = process.env.URI;
  const connnection = mongoose.createConnection(uri,
    { useUnifiedTopology: true, useNewUrlParser: true });
  return connnection.model('User', userSchema);
};
