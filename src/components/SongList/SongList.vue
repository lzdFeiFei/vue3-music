<template>
  <ul class="song-list">
    <li
      class="item"
      v-for="(song, index) in props.songs"
      :key="song.id"
      @click="selectItem(index)"
    >
      <!-- <div class="rank">
        <span>{{ index }}</span>
      </div> -->
      <div class="content">
        <h2 class="name">{{ song.name }}</h2>
        <p class="desc"></p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { Songs } from '@/views/singer/types'
const props = defineProps({
  songs: {
    type: Array as PropType<Songs>,
    default: () => [],
  },
})

const emit = defineEmits(['select'])
const selectItem = (index: number) => {
  emit('select', index)
}
</script>

<style lang="scss" scoped>
.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: $font-size-medium;
    .rank {
      flex: 0 0 25px;
      width: 25px;
      margin-right: 20px;
      text-align: center;
      .icon {
        display: inline-block;
        width: 25px;
        height: 24px;
        background-size: 25px 24px;
        &.icon0 {
          @include bg-image('first');
        }
        &.icon1 {
          @include bg-image('second');
        }
        &.icon2 {
          @include bg-image('third');
        }
      }
      .text {
        color: $color-theme;
        font-size: $font-size-large;
      }
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        margin-top: 4px;
        color: $color-text-d;
      }
    }
  }
}
</style>
