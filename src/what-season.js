const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!'
  }
  if(!Date.parse(date)) {
    throw new Error('Invalid date!')
  } else if(Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
    }
  const monthNum = date.getMonth()

  if(monthNum >= 11 || monthNum <= 1) {
    return 'winter'
  } else if(monthNum >= 2 && monthNum <= 4) {
    return 'spring'
  } else if(monthNum >= 5 && monthNum <= 7) {
    return 'summer'
  } else  {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
