import BScroll, { Options } from '@better-scroll/core'
import ObserveDom from '@better-scroll/observe-dom'
import { ref, Ref, onMounted, onUnmounted } from 'vue'

BScroll.use(ObserveDom)
export default function useScroll(
  wrapperRef: Ref<HTMLDivElement | null>,
  options: Options,
  emit: any
) {
  const scroll = ref<BScroll>()
  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value as HTMLDivElement, {
      observeDOM: true,
      ...options,
    })
    const scrollVal = scroll.value as BScroll

    if ((options.probeType as number) > 0) {
      scrollVal.on('scroll', (pos: any) => {
        emit('scroll', pos)
      })
    }
  })
  onUnmounted(() => {
    scroll.value?.destroy()
  })

  return scroll
}
