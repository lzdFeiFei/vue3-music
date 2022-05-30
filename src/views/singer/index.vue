<template>
  <div class="singer" v-loading="!singers.length">
    <IndexList :data="singers"></IndexList>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/IndexList/IndexList.vue'
const singers = ref<any>([])
getSingerList().then((res: any) => {
  singers.value = res.singers
})
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
