/**
 * 检测用户当前使用的浏览器类型及版本。
 * @returns 包含浏览器名称和版本的对象。
 */
export function detectBrowser(): { name: string; version: string } {
  const userAgent = navigator.userAgent;
  let match = userAgent.match(/(firefox|msie|trident|chrome|safari|opr|edg|opera)\/?\s*(\d+)/i) || [];
  
  let temp: RegExpMatchArray | null = match[1] ? [match[1]] : null;
  if (/trident/i.test(temp ? temp[0] : '')) {
      const rv = userAgent.match(/\brv[ :]+(\d+)/g) || [];
      return { name: 'IE', version: (rv[1] || '') };
  }

  if (temp && temp[0] === 'Chrome') {
      temp = userAgent.match(/\b(OPR|Edge|Edg)\/(\d+)/);
      if (temp != null) return { name: temp[1], version: temp[2] };
  }

  match = match[2] ? [match[1], match[2]] : [navigator.appName, navigator.appVersion, '-?'];

  const version = userAgent.match(/version\/(\d+)/i);
  if (version != null) match.splice(1, 1, version[1]);

  return {
      name: match[0],
      version: match[1],
  };
}