"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
/**
 * 验证字符串是否为有效的电子邮件格式
 *
 * @param {string} email - 需要验证的电子邮件字符串
 * @returns {boolean} 返回是否为有效的电子邮件
 *
 * @example
 * const valid = isEmail('test@example.com');
 * console.log(valid); // true
 */
function isEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
exports.isEmail = isEmail;
