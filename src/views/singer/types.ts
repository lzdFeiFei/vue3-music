export interface Singer {
  id: number
  mid: string
  name: string
  pic: string
}

export interface Singers {
  list: Singer[]
  title: string
}

export interface SingerList {
  singers: Singers[]
}

export interface Song {
  album: string
  duration: number
  id: number
  mid: string
  name: string
  pic: string
  singer: string
  url: string
}

export type Songs = Song[]
