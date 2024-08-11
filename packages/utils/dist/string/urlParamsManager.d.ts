/**
 * @module URLParamsManager
 * @description 提供浏览器环境下的URL参数操作功能，支持获取、设置、删除和更新URL查询参数。
 */
export declare class URLParamsManager {
    /**
     * @description 获取当前页面URL中的指定查询参数
     * @param key 查询参数的键
     * @returns 查询参数的值，如果不存在则返回 null
     * @example
     * const value = URLParamsManager.getParam('name');
     * console.log('Query Param:', value); // 假设 URL 为 https://example.com?name=John，输出 "John"
     */
    static getParam(key: string): string | null;
    /**
     * @description 设置当前页面URL中的查询参数，并可选更新浏览器历史
     * @param key 查询参数的键
     * @param value 查询参数的值
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLParamsManager.setParam('name', 'Alice', true);
     * // 假设原 URL 为 https://example.com，执行后 URL 变为 https://example.com?name=Alice
     */
    static setParam(key: string, value: string, updateHistory?: boolean): void;
    /**
     * @description 删除当前页面URL中的指定查询参数，并可选更新浏览器历史
     * @param key 查询参数的键
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLParamsManager.deleteParam('name', true);
     * // 假设原 URL 为 https://example.com?name=Alice，执行后 URL 变为 https://example.com
     */
    static deleteParam(key: string, updateHistory?: boolean): void;
    /**
     * @description 获取当前页面URL中的所有查询参数，返回为对象形式
     * @returns 包含所有查询参数的对象
     * @example
     * const params = URLParamsManager.getAllParams();
     * console.log('All Query Params:', params); // 假设 URL 为 https://example.com?name=John&age=30，输出 { name: "John", age: "30" }
     */
    static getAllParams(): Record<string, string>;
}