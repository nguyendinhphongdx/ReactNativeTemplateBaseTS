import axios, {Method} from 'axios';
const request = (
  endpoint: string,
  method?: Method,
  body?: string,
  params?: any,
) => {
  const promise = axios({
    url: endpoint,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      // "authorization":`Bear ${appSettings.token}`
    },
    data: body,
    params: params,
    timeout: 10000,
  });
  return promise;
};
export default request;
