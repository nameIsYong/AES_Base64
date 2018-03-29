
// var fun_md5 = require('../../utils/libs/md5.js')
// var fun_sha1 = require('../../utils/libs/sha1.js')
// var fun_base64 = require('../../utils/libs/base64.js')
var fun_aes = require('../../utils/libs/aes.js')

var key = fun_aes.CryptoJS.enc.Utf8.parse("keykeykeykeykeyk");
var iv = fun_aes.CryptoJS.enc.Utf8.parse('1234567887654321');

// function AES_Encrypt(word) {
//   var srcs = fun_aes.CryptoJS.enc.Utf8.parse(word);
//   var encrypted = fun_aes.CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: fun_aes.CryptoJS.mode.CBC, padding: fun_aes.CryptoJS.pad.Pkcs7 });
//   var hexStr = encrypted.ciphertext.toString().toUpperCase();

//   console.log('hexStr->' + hexStr);
//   var oldHexStr = fun_aes.CryptoJS.enc.Hex.parse(hexStr);
//   // 将密文转为Base64的字符串
//   var base64Str = fun_aes.CryptoJS.enc.Base64.stringify(oldHexStr);
//   console.log('base64Str->' + base64Str);
//   return hexStr;
// }
function AES_Encrypt(word) {
  var srcs = fun_aes.CryptoJS.enc.Utf8.parse(word);
  var encrypted = fun_aes.CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: fun_aes.CryptoJS.mode.CBC, padding: fun_aes.CryptoJS.pad.Pkcs7 });
  var hexStr = encrypted.ciphertext.toString().toUpperCase();

  console.log('hexStr->' + hexStr);
  var oldHexStr = fun_aes.CryptoJS.enc.Hex.parse(hexStr);
  // 将密文转为Base64的字符串
  var base64Str = fun_aes.CryptoJS.enc.Base64.stringify(oldHexStr);
  console.log('base64Str->' + base64Str);
  return base64Str;
}

function AES_Decrypt(word) {
  console.log('word->' + word);
  //如果加密返回的base64Str
  var srcs = word;
  //若上面加密返回的hexStr,需再次处理
  // var encryptedHexStr = fun_aes.CryptoJS.enc.Hex.parse(word);
  // var srcs = fun_aes.CryptoJS.enc.Base64.stringify(encryptedHexStr);
  
  var decrypt = fun_aes.CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: fun_aes.CryptoJS.mode.CBC, padding: fun_aes.CryptoJS.pad.Pkcs7 });
  var decryptedStr = decrypt.toString(fun_aes.CryptoJS.enc.Utf8);
  var value = decryptedStr.toString();
  console.log('value->'+value);
  return value;
}



// function AES_Decrypt(word) {
//   var encryptedHexStr = fun_aes.CryptoJS.enc.Hex.parse(word);
//   var srcs = fun_aes.CryptoJS.enc.Base64.stringify(encryptedHexStr);
//   var decrypt = fun_aes.CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: fun_aes.CryptoJS.mode.CBC, padding: fun_aes.CryptoJS.pad.Pkcs7 });
//   var decryptedStr = decrypt.toString(fun_aes.CryptoJS.enc.Utf8);
//   return decryptedStr.toString();
// }

function Base64_Encode(word){
  var str = fun_base64.Base64_Encode(word);
  return str;
}

module.exports = {
  AES_Encrypt: AES_Encrypt,
  AES_Decrypt: AES_Decrypt,
}