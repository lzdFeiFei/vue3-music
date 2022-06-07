<template>
  <div class="singer" v-loading="!singers.length">
    <IndexList :data="singers" @select="selectSinger"></IndexList>
    <router-view :selectedSinger="selectedSinger"></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/IndexList/IndexList.vue'
import { SINGER_KEY } from '@/assets/js/constant'
import storage from 'good-storage'

const router = useRouter()

const singers = ref<any>([])
getSingerList().then((res: any) => {
  singers.value = res.singers
})

const selectedSinger = ref<any>()
function selectSinger(singer: any) {
  selectedSinger.value = singer
  storeSinger(singer)
  router.push({
    path: `/singer/${singer.mid}`,
  })
}
function storeSinger(singer: any) {
  storage.session.set(SINGER_KEY, singer)
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
