import { get } from './base'
import { Albums, Recommends } from '@/views/recommend/types'

export function getRecommend() {
  return get<Recommends>('/api/getRecommend')
}

export function getAlbum(album: { id: number }) {
  return get<Albums>('/api/getAlbum', {
    id: album.id,
  })
}
