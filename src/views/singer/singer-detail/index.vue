<template>
  <div>123123</div>
</template>

<!-- <script setup lang="ts">
import { defineProps } from 'vue'
import { getSingerDetail } from '@/service/singer'

const props = defineProps({
  selectedSinger: {
    type: Object,
    default: () => ({}),
  },
})

const result = await getSingerDetail(props.selectedSinger?.mid)
console.log('result', result)
</script> -->
<script lang="ts">
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
    console.log(123)
    getSingerDetail(props.selectedSinger?.mid).then((res: any) => {
      console.log('result', res)
    })
  },
})
</script>

<style scoped></style>
