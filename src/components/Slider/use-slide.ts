import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import { ref, Ref, onMounted, onUnmounted } from 'vue'

BScroll.use(Slide)
const useSlide = (wrapperRef: Ref<HTMLDivElement | null>) => {
  const slider = ref<BScroll>()
  const currentPageIndex = ref(0)

  onMounted(() => {
    const sliderVal = (slider.value = new BScroll(
      wrapperRef.value as HTMLDivElement,
      {
        click: true,
        scrollX: true,
        scrollY: true,
        momentum: false,
        bounce: false,
        probeType: 2,
        slide: true,
      }
    ))
    sliderVal.on('slideWillChange', (page: { pageX: number }) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slider.value?.destroy()
  })

  return {
    slider,
    currentPageIndex,
  }
}

export default useSlide
