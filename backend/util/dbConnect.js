const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function connect(schema, databaseName) {
  const uri = process.env.URI;
  const connnection = mongoose.createConnection(uri,
    { useUnifiedTopology: true, useNewUrlParser: true });
  return connnection.model(databaseName, schema);
};
