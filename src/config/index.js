import axios from 'axios';

export default async function callAPI({ url, method, data, responseType, params }) {

  const response = await axios({
    url,
    params,
    responseType,
    method,
    data,
  }).catch((err) => err.response);

  return response;
}