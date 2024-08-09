/**
 * 检查一个值是否为数字。
 * 
 * @param value - 要检查的值。
 * @returns 如果是数字则返回 true，否则返回 false。
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}