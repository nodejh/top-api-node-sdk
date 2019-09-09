"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = function (n) {
    return (n < 10 ? '0' : '') + n;
};
exports.formatDate = function (date) {
    var year = exports.pad(date.getFullYear());
    var month = exports.pad(date.getMonth() + 1);
    var day = exports.pad(date.getDate());
    var hour = exports.pad(date.getHours());
    var minute = exports.pad(date.getMinutes());
    var second = exports.pad(date.getSeconds());
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
};
