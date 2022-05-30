<template>
  <div>歌手</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSingerList } from '@/service/singer'
const singers = ref<any>([])
getSingerList().then((res: any) => {
  console.log(res)
  singers.value = res
})
</script>

<style lang="scss" scoped></style>
