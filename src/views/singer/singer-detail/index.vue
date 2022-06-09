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
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getSingerDetail } from '@/service/singer'
import { processSongs } from '@/service/songs'
import MusicList from '@/components/MusicList.vue'
import { SINGER_KEY } from '@/assets/js/constant'
import storage from 'good-storage'
import { Songs } from '../types'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  selectedSinger: {
    type: Object,
    default: () => ({}),
  },
})

const title = computed(() => {
  const singer = computedSinger.value
  return singer ? singer.name : ''
})

const pic = computed(() => {
  const singer = computedSinger.value
  return singer ? singer.pic : ''
})

const computedSinger = computed(() => {
  let ret = null
  const singer = props.selectedSinger
  if (Object.keys(singer).length > 0) {
    ret = singer
  } else {
    const cached = storage.session.get(SINGER_KEY)
    if (cached && cached.mid === route.params.id) {
      ret = cached
    }
  }
  return ret
})

const result = ref<{ songs: Songs }>({ songs: [] })
const songs = ref<Songs>([])

const loading = ref(true)
async function getResult() {
  result.value = await getSingerDetail(computedSinger.value.mid)
  songs.value = await processSongs(result.value.songs)
  loading.value = false
}

if (!computedSinger.value) {
  const path = route.matched[0].path
  router.push(path)
} else {
  getResult()
}
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
