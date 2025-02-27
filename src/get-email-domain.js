const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const atIndex = email.lastIndexOf('@')
  const domain = email.slice(atIndex + 1)
  const cleanDomain = domain.split(/[?#]/)[0]
  return cleanDomain;
}

module.exports = {
  getEmailDomain
};
