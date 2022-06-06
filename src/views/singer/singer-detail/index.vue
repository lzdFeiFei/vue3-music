<template>
  <div class="singer-detail">
    <MusicList
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
    ></MusicList>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/songs'
import MusicList from '@/components/MusicList.vue'

const props = defineProps({
  selectedSinger: {
    type: Object,
    default: () => ({}),
  },
})

const title = computed(() => {
  return props.selectedSinger.name
})

const pic = computed(() => {
  return props.selectedSinger.pic
})

const result = ref<{ songs: any[] }>({ songs: [] })
const songs = ref<any[]>([])

const loading = ref(true)
async function getResult() {
  result.value = await getSingerDetail(props.selectedSinger?.mid)
  songs.value = await processSongs(result.value.songs)
  loading.value = false
}

getResult()
// const result = await getSingerDetail(props.selectedSinger?.mid)
</script>
<!-- <script lang="ts">
import { defineComponent } from 'vue'
import { getSingerDetail } from '@/service/singer'
export default defineComponent({
  props: {
    selectedSinger: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    getSingerDetail(props.selectedSinger?.mid).then((res: any) => {
      console.log('result', res)
    })
  },
})
</script> -->

<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: $color-background;
}
</style>
