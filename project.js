const instance = axios.create({
    baseURL: 'http://www.shumai.com.cn/api',
    timeout: 1000
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
