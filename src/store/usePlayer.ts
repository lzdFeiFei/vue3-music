import { defineStore } from 'pinia'
import { PLAY_MODE } from '@/assets/js/constant'

export const usePlayer = defineStore('player', {
  state: () => {
    return {
      sequenceList: [] as any[],
      playingList: [],
      playing: false,
      playMode: PLAY_MODE.sequence,
      currentIndex: 0,
      fullScreen: false,
    }
  },
  getters: {
    currentSong(state) {
      return state.playingList[state.currentIndex] || {}
    },
  },
  actions: {
    setSequenceList(list: any) {
      this.sequenceList = list
    },
    setPlayingList(list: any) {
      this.playingList = list
    },
    setPlayingStatus(status: boolean) {
      this.playing = status
    },
    setPlayMode(mode: PLAY_MODE) {
      this.playMode = mode
    },
    setCurrentIndex(currentIndex: number) {
      this.currentIndex = currentIndex
    },
    setFullScreen(fullScreen: boolean) {
      this.fullScreen = fullScreen
    },
    selectPlay(list: any, index: number) {
      this.setSequenceList(list)
      this.setPlayingList(list)
      this.setPlayingStatus(true)
      this.setPlayMode(PLAY_MODE.sequence)
      this.setCurrentIndex(index)
      this.setFullScreen(true)
      console.log(this.$state)
    },
  },
})
