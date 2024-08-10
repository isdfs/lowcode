/**
 * 页面滚动到顶部。
 * 
 * 该方法用于将页面平滑滚动到顶部。适用于返回顶部的功能。
 * 
 * @returns {void}
 * 
 * @example
 * ```
 * scrollToTop();
 * ```
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
* 页面滚动到底部。
* 
* 该方法用于将页面平滑滚动到底部。适用于滚动到底部加载更多内容的功能。
* 
* @returns {void}
* 
* @example
* ```
* scrollToBottom();
* ```
*/
export function scrollToBottom(): void {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
}