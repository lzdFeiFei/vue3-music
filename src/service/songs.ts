import { get } from './base'
import { Song, Songs } from '@/views/singer/types'

interface MidUrlMap {
  [x: string]: string
}

export const processSongs = (songs: Songs) => {
  if (!songs.length) {
    return Promise.resolve(songs)
  }
  return get<{ map: MidUrlMap }>('/api/getSongsUrl', {
    mid: songs.map((song: Song) => {
      return song.mid
    }),
  }).then((res: { map: MidUrlMap }) => {
    const map = res.map
    return songs
      .map((song: Song) => {
        song.url = map[song.mid]
        return song
      })
      .filter((song: Song) => {
        return song.url && song.url.indexOf('vkey') > -1
      })
  })
}
