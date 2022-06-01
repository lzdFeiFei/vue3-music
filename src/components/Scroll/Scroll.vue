<template>
  <div ref="scrollRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import useScroll from './use-scroll'
import { ref, defineEmits, defineProps, defineExpose } from 'vue'
import { DivRef } from '../type'
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
const scrollRef = ref<DivRef>(null)
const scroll = useScroll(scrollRef, props, emit)
defineExpose({ scroll })
</script>

<style scoped></style>
