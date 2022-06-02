import { get } from './base'

export const getSingerList = () => {
  return get('/api/getSingerList')
}

export const getSingerDetail = (mid: string) => {
  return get('/api/getSingerDetail', { mid })
}
