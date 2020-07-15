const crypto = require('crypto');

function createSecurePassword(password) {
  const salt = crypto.randomBytes(8).toString('hex');
  const hash = crypto.createHash('sha256');
  hash.update(password + salt);
  const hashedPassword = hash.digest('hex');
  return { salt, hashedPassword };
}
function isMatch(salt, password, hashedPassword) {
  const hash = crypto.createHash('sha256');
  hash.update(password + salt);
  return hash.digest('hex') === hashedPassword;
}

module.exports = { createSecurePassword, isMatch };
