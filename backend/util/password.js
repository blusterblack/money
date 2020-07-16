const crypto = require('crypto');

function createSecurePassword(password) {
  const salt = crypto.randomBytes(8).toString('hex');
  const hash = crypto.createHash('sha256');
  hash.update(password + salt);
  const securePassword = hash.digest('hex');
  return { salt, securePassword };
}
function isMatch(salt, password, securePassword) {
  const hash = crypto.createHash('sha256');
  hash.update(password + salt);
  return hash.digest('hex') === securePassword;
}

module.exports = { createSecurePassword, isMatch };
