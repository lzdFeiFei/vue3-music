<template>
  <div ref="scrollRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import useScroll from './use-scroll'
import { ref, defineEmits, defineProps } from 'vue'
const emit = defineEmits(['scroll'])
const props = defineProps({
  click: {
    type: Boolean,
    default: true,
  },
  probeType: {
    type: Number,
    default: 0,
  },
})
const scrollRef = ref<HTMLDivElement | null>(null)
const scroll = useScroll(scrollRef, props, emit)
</script>

<style scoped></style>
