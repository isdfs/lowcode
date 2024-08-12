"use strict";
/**
 * 基于URL参数的导航模块。
 *
 * 该模块提供了通过操作URL参数来控制导航的功能，例如根据URL参数的变化触发相应的页面逻辑。
 *
 * @example
 * ```
 * setUrlParam('page', '2');
 * const page = getUrlParam('page');
 * console.log(`当前页码: ${page}`);
 * removeUrlParam('page');
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUrlParam = exports.setUrlParam = exports.getUrlParam = void 0;
/**
 * 获取指定的URL参数值。
 *
 * @param {string} paramName - 要获取的URL参数名称。
 * @returns {string | null} 返回URL参数的值，如果不存在则返回null。
 *
 * @example
 * ```
 * const page = getUrlParam('page');
 * console.log(`当前页码: ${page}`);
 * ```
 */
function getUrlParam(paramName) {
    var params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}
exports.getUrlParam = getUrlParam;
/**
* 设置或更新指定的URL参数值。
*
* @param {string} paramName - 要设置的URL参数名称。
* @param {string} paramValue - 要设置的URL参数值。
* @returns {void}
*
* @example
* ```
* setUrlParam('page', '2');
* ```
*/
function setUrlParam(paramName, paramValue) {
    var url = new URL(window.location.href);
    url.searchParams.set(paramName, paramValue);
    window.history.pushState({}, '', url.toString());
}
exports.setUrlParam = setUrlParam;
/**
* 移除指定的URL参数。
*
* @param {string} paramName - 要移除的URL参数名称。
* @returns {void}
*
* @example
* ```
* removeUrlParam('page');
* ```
*/
function removeUrlParam(paramName) {
    var url = new URL(window.location.href);
    url.searchParams.delete(paramName);
    window.history.pushState({}, '', url.toString());
}
exports.removeUrlParam = removeUrlParam;