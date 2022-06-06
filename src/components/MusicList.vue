<template>
  <div class="music-list">
    <div class="back" @click="goBack"><i class="icon-back"></i></div>
    <h1 class="title">{{ props.title }}</h1>
    <div class="bg-image" :style="bgImageStyle">
      <div class="play-btn-wrapper">
        <div class="play-btn">
          <i class="icon-play"></i><span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter"></div>
    </div>
    <Scroll class="list" :probe-type="3" v-loading="loading">
      <div class="song-list-wrapper">
        <SongList :songs="props.songs"></SongList>
      </div>
    </Scroll>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import Scroll from '@/components/Scroll/Scroll.vue'
import SongList from '@/components/SongList/SongList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}

const props = defineProps({
  songs: {
    type: Array as PropType<any[]>,
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

const bgImageStyle = computed(() => {
  return {
    backgroundImage: `url(${props.pic})`,
  }
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
