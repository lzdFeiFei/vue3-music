<template>
  <div class="music-list">
    <div class="back" @click="goBack"><i class="icon-back"></i></div>
    <h1 class="title">{{ props.title }}</h1>
    <div class="bg-image" :style="bgImageStyle" ref="bgImage">
      <div class="play-btn-wrapper">
        <div class="play-btn">
          <i class="icon-play"></i><span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" :style="filterStyle"></div>
    </div>
    <Scroll
      class="list"
      :probe-type="3"
      @scroll="onScroll"
      v-loading="loading"
      v-no-result="noResult"
      :style="scrollStyle"
    >
      <div class="song-list-wrapper">
        <SongList :songs="props.songs" @select="selectItem"></SongList>
      </div>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, PropType, ref } from 'vue'
import Scroll from '@/components/Scroll/Scroll.vue'
import SongList from '@/components/SongList/SongList.vue'
import { useRouter } from 'vue-router'
import { usePlayer } from '@/store/usePlayer'
import { Songs } from '@/views/singer/types'

const RESERVED_HEIGHT = 40

const router = useRouter()
const goBack = () => {
  router.back()
}

const props = defineProps({
  songs: {
    type: Array as PropType<Songs>,
    default: () => [],
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  pic: {
    type: String,
    required: true,
    default: '',
  },
  loading: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const scrollY = ref(0)
const maxTranslateY = ref(0)
const imageHeight = ref(0)
const bgImage = ref<HTMLDivElement | null>(null)

const bgImageStyle = computed(() => {
  const scrollYVal = scrollY.value
  let zIndex = 0
  let paddingTop = '70%'
  let height = '0px'
  let translateZ = 0

  if (scrollYVal > maxTranslateY.value) {
    zIndex = 10
    height = `${RESERVED_HEIGHT}px`
    paddingTop = '0'
    translateZ = 1
  }

  let scale = 1
  if (scrollYVal < 0) {
    scale = 1 + Math.abs(scrollYVal / imageHeight.value)
  }

  return {
    zIndex,
    height,
    paddingTop,
    backgroundImage: `url(${props.pic})`,
    transform: `scale(${scale})translateZ(${translateZ}px)`,
  }
})
const scrollStyle = computed(() => {
  return {
    top: `${imageHeight.value}px`,
  }
})
const filterStyle = computed(() => {
  let blur = 0
  const scrollYVal = scrollY.value
  const imageHeightVal = imageHeight.value

  if (scrollYVal > 0) {
    blur =
      Math.min(
        maxTranslateY.value / imageHeightVal,
        scrollYVal / imageHeightVal
      ) * 20
  }

  return {
    backdropFilter: `blur(${blur}px)`,
  }
})

const noResult = computed(() => {
  return !props.loading && props.songs.length === 0
})

const onScroll = (pos: { y: number }) => {
  scrollY.value = -pos.y
}

// 点击播放歌曲
const playerStore = usePlayer()
const selectItem = (index: number) => {
  playerStore.selectPlay(props.songs, index)
}

onMounted(() => {
  imageHeight.value = bgImage.value?.clientHeight as number
  maxTranslateY.value = imageHeight.value - RESERVED_HEIGHT
})
</script>

<style lang="scss" scoped>
.music-list {
  position: relative;
  height: 100%;
  .back {
    position: absolute;
    top: 0;
    left: 6px;
    z-index: 20;
    transform: translateZ(2px);
    .icon-back {
      display: block;
      padding: 10px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
  .title {
    position: absolute;
    top: 0;
    left: 10%;
    width: 80%;
    z-index: 20;
    transform: translateZ(2px);
    @include no-wrap();
    text-align: center;
    line-height: 40px;
    font-size: $font-size-large;
    color: $color-text;
  }
  .bg-image {
    position: relative;
    width: 100%;
    transform-origin: top;
    background-size: cover;
    .play-btn-wrapper {
      position: absolute;
      bottom: 20px;
      z-index: 10;
      width: 100%;
      .play-btn {
        box-sizing: border-box;
        width: 135px;
        padding: 7px 0;
        margin: 0 auto;
        text-align: center;
        border: 1px solid $color-theme;
        color: $color-theme;
        border-radius: 100px;
        font-size: 0;
      }
      .icon-play {
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
        font-size: $font-size-medium-x;
      }
      .text {
        display: inline-block;
        vertical-align: middle;
        font-size: $font-size-small;
      }
    }
    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }
  }
  .list {
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 0;
    .song-list-wrapper {
      padding: 20px 30px;
      background: $color-background;
    }
  }
}
</style>
