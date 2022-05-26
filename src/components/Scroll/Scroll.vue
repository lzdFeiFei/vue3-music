<template>
  <div ref="scrollRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import useScroll from './useScroll'
import { ref } from 'vue'
const scrollRef = ref<HTMLDivElement | null>(null)
const scroll = useScroll(scrollRef, { click: true })
</script>

<style scoped></style>
