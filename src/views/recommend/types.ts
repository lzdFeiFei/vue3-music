export interface Albums {
  id: number
  pic: string
  title: string
  username: string
}

export interface Sliders {
  id: string
  link: string
  pic: string
}

export interface Recommends {
  albums: Albums[]
  sliders: Sliders[]
}
