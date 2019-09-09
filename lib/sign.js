"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("./crypto");
var sign = function (params, secretKey) {
    var list = [];
    for (var key in params) {
        list.push("" + key + params[key]);
    }
    var str = list.sort().join('');
    var signature = crypto_1.md5("" + secretKey + str + secretKey);
    return signature;
};
exports.default = sign;
