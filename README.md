        public.js是对aes.js的加密和解密方法的封装，提供了两个方法(AES_Encrypt,AES_Decrypt)便于外部直接使用。

        外部js调用public.js
        myFunction: function (e) {
    var fun_aes = require('../../utils/libs/public.js');\<br>  var str2 =fun_aes.AES_Encrypt("这是测试数据");\<br>  var str2 = fun_aes.AES_Decrypt(str);
        }
