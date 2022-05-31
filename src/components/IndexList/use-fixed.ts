import { ref, watch, computed, nextTick } from 'vue'

export default function useFixed(props: any) {
  const TITLE_HEIGHT = 30
  const groupRef = ref<HTMLUListElement | null>(null)
  const listHeights = ref<number[]>([])
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const distance = ref(0)

  watch(
    () => props.data,
    async () => {
      await nextTick()
      calculate()
    }
  )

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) return ''
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff =
      distanceVal > 0 && distanceVal < TITLE_HEIGHT
        ? distanceVal - TITLE_HEIGHT
        : 0
    return {
      transform: `translate3d(0, ${diff}px, 0)`,
    }
  })

  // 监听当前滚动位置 获取 currentIndex
  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value
    for (let index = 0; index < listHeightsVal.length - 1; index++) {
      const heightTop = listHeightsVal[index]
      const heightBottom = listHeightsVal[index + 1]
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = index
        distance.value = heightBottom - newY
      }
    }
  })

  // 获取所有的主题块高度
  function calculate() {
    const list = groupRef.value?.children as HTMLCollection
    const listHeightsVal = listHeights.value
    let height = 0

    listHeightsVal.length = 0
    listHeightsVal.push(height)

    for (let index = 0; index < list.length; index++) {
      height += list[index].clientHeight
      listHeightsVal.push(height)
    }
  }

  // 监听滚动事件 获取当前y值
  function onScroll(pos: any) {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
  }
}
