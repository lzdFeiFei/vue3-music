import BScroll, { Options } from '@better-scroll/core'
import ObserveDom from '@better-scroll/observe-dom'
import { ref, Ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDom)
export default function useScroll(
  wrapperRef: Ref<HTMLDivElement | null>,
  options: Options
) {
  const scroll = ref<BScroll>()
  onMounted(() => {
    const scrollVal = (scroll.value = new BScroll(
      wrapperRef.value as HTMLDivElement,
      {
        observeDOM: true,
        ...options,
      }
    ))
  })
  onUnmounted(() => {
    scroll.value?.destroy()
  })

  return scroll
}
