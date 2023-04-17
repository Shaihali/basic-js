const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let encrypted = '';
    let keyIndex = 0;

    for (let i = 0; i < messageUpper.length; i++) {
      const charCode = messageUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = keyUpper.charCodeAt(keyIndex % keyUpper.length);
        let encryptedCharCode = ((charCode + keyCharCode) % 26) + 65;
        encrypted += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        encrypted += messageUpper[i];
      }
    }

    return this.direct ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.toUpperCase();
    let decrypted = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessageUpper.length; i++) {
      const charCode = encryptedMessageUpper.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const keyCharCode = keyUpper.charCodeAt(keyIndex % keyUpper.length);
        let decryptedCharCode = (((charCode - keyCharCode) + 26) % 26) + 65;
        decrypted += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        decrypted += encryptedMessageUpper[i];
      }
    }

    return this.direct ? decrypted : decrypted.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
