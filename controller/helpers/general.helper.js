const CryptoJs = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken");

exports.EncryptPassword = (password) =>{
    let secretkey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJs.AES.encrypt(password, secretkey).toString();
    return encryptedPassword;
}

exports.DescryptPassword = (cryptedPassword) =>{
    let secretkey = config.get("secretkeys").cryptojs;
    var bytes  = CryptoJs.AES.decrypt(cryptedPassword, secretkey);
    var originalPass = bytes.toString(CryptoJs.enc.Utf8);
    return originalPass;
}

exports.GenerateToken = (user) =>{
    let secretkey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            userName: user.userName,
            id: user._id,
            role: user.role
        }
      }, secretkey);
      return token;
}