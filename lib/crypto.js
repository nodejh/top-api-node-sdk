"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var md5 = function (str) {
    return crypto_1.default
        .createHash('md5')
        .update(str)
        .digest('hex')
        .toUpperCase();
};
exports.md5 = md5;
