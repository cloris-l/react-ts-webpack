import axios, { ResponseData } from './index'
import { AxiosPromise } from 'axios'
interface LoginReqArguInterface {
  name: string;
  password: number|string
}
export const loginReq = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/admin/login',
    data,
    method: 'POST'
  })
}