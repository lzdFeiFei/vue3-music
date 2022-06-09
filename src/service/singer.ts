import { get } from './base'
import { SingerList, Songs } from '@/views/singer/types'

export const getSingerList = () => {
  return get<SingerList>('/api/getSingerList')
}

export const getSingerDetail = (mid: string) => {
  return get<{ songs: Songs }>('/api/getSingerDetail', { mid })
}
