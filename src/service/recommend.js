/*
 * @Author: your name
 * @Date: 2021-07-08 20:50:15
 * @LastEditTime: 2021-07-08 20:50:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-music-next\src\service\recommend.js
 */
import { get } from './base'

export function getRecommend() {
  return get('/api/getRecommend')
}

export function getAlbum(album) {
  return get('/api/getAlbum', {
    id: album.id,
  })
}
