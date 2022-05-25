/*
 * @Author: your name
 * @Date: 2021-07-08 20:45:16
 * @LastEditTime: 2021-07-08 20:49:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-music-next\src\service\base.js
 */
import axios from 'axios'

const ERR_OK = 0
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://ustbhuangyi.com/music-next/'
    : '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
