import axios from 'axios';

const domainMap = window._global.url;
// const domainMap = {
//     server_url : "http://localhost:8089",
//   }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
  const defaultOptions = {
    headers: {
      Accept: 'application/json'
    }
  };
  const newOptions = {
    ...defaultOptions,
    ...options
  };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (newOptions.login) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      };
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers
      };
    }
    if (newOptions.register) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      };
    }
    newOptions.data = JSON.stringify(newOptions.body);
  }
  const responseType = {
    responseType: (newOptions.method === 'DELETE') ? 'text' : 'json'
  };
  const axiosOptions = {
    url,
    withCredentials: true,
    ...newOptions,
    ...responseType
  };
  return axios(axiosOptions)
    .then(checkStatus)
    .then((response) => {
      const data = {
        success: true,
        response: response.data
      };
      return data;
    })
    .catch((error) => {
      // Toast.fail({
      //   message: `请求错误 ${error.response.data.error}: ${error.response.data.path}`,
      //   description: error.response.data.message
      // });
      // if (error.response.data.status === 401 && error.response.data.status === 402) {
      //   Toast.fail({
      //     title: '登录过期',
      //     content: '您的账号登录时间已超时，请重新登录',
      //     onOk() {
      //       window.localStorage.clear();
      //     }
      //   });
      // }
      const data = {
        success: false,
        response: error.response.data
      };
      return data;
    });
}

export class URL {
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
