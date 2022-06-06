import { get } from './base'

export const processSongs = (songs: any[]) => {
  if (!songs.length) {
    return Promise.resolve(songs)
  }
  return get('/api/getSongsUrl', {
    mid: songs.map((song: any) => {
      return song.mid
    }),
  }).then((res: any) => {
    const map = res.map
    return songs
      .map((song: any) => {
        song.url = map[song.mid]
        return song
      })
      .filter((song: any) => {
        return song.url && song.url.indexOf('vkey') > -1
      })
  })
}
