import { computed, ref, Ref } from 'vue'
import { Scroll, UlRef } from '../type'

export default function useShortcut(props: any, groupRef: Ref<UlRef>) {
  const ANCHOR_HEIGHT = 18
  const scrollRef = ref<Scroll | null>(null)
  const shortcutList = computed(() => {
    return props.data.map((group: any) => {
      return group.title
    })
  })

  const touch = {
    y1: 0,
    y2: 0,
    anchorIndex: 0,
  }

  function onShoutcutTouchStart(e: TouchEvent) {
    const anchorIndex = parseInt(
      (e.target as HTMLElement).dataset.index as string
    )
    console.log(anchorIndex)
    touch.anchorIndex = anchorIndex
    touch.y1 = e.touches[0].pageY

    scrollTo(anchorIndex)
  }

  function onShoutcutTouchMove(e: TouchEvent) {
    touch.y2 = e.touches[0].pageY
    const delta = ((touch.y2 - touch.y1) / ANCHOR_HEIGHT) | 0
    const anchorIndex = touch.anchorIndex + delta

    scrollTo(anchorIndex)
  }

  function scrollTo(index: number) {
    // 因为事件绑定在外面的div上, 点击位置不是ul的时候 index 的值为 NaN
    if (isNaN(index)) {
      return
    }
    // 限制下 index 的范围, 使其在 shortcutList 的长度范围内
    index = Math.max(0, Math.min(shortcutList.value.length - 1, index))
    const targetEl = groupRef.value?.children[index] as HTMLElement
    const scroll = scrollRef.value?.scroll
    scroll?.scrollToElement(targetEl, 0, 0, 0)
  }

  return {
    scrollRef,
    shortcutList,
    onShoutcutTouchStart,
    onShoutcutTouchMove,
  }
}
