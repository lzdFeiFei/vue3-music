import { defineStore } from 'pinia'
import { PLAY_MODE } from '@/assets/js/constant'
import { Songs } from '@/views/singer/types'

export const usePlayer = defineStore('player', {
  state: () => {
    return {
      sequenceList: [] as Songs,
      playingList: [] as Songs,
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
    setSequenceList(list: Songs) {
      this.sequenceList = list
    },
    setPlayingList(list: Songs) {
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
    selectPlay(list: Songs, index: number) {
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
