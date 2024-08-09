/**
 * 从URL中获取指定的查询参数值。
 *
 * @param {string} paramName - 要获取的查询参数名称。
 * @returns {string | null} 查询参数的值，如果不存在则返回null。
 *
 * @example
 * const value = getQueryParam('token');
 * console.log(value); // 例如：'abc123'
 */
export declare function getQueryParam(paramName: string): string | null;