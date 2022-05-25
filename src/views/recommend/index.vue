<template>
  <div>推荐</div>
</template>

<script setup lang="ts">
import { getRecommend } from '@/service/recommends'
getRecommend().then((res: any) => {
  console.log(res)
})
</script>

<style lang="scss" scoped></style>
