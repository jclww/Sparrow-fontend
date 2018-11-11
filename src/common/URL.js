const domainMap = window._global.url;

export default class URL {
  /**
   * 根据域名拼接站点URL
   * @param  {String} domain 域名
   * @param  {String} path   路径
   * @return {String}        完整的URL
   */
  static site(domain, path = '') {
    if (path) {
      path = `/${path.replace(/^\//, '')}`;
    }
    return domainMap[domain] + path;
  }
}
