import { computed, ref, Ref } from 'vue'
import { Scroll, UlRef } from '../type'

export default function useShortcut(props: any, UlRef: Ref<UlRef>) {
  const scrollRef = ref<Scroll | null>(null)
  const shortcutList = computed(() => {
    return props.data.map((group: any) => {
      return group.title
    })
  })
  function onShoutcutTouchStart(e: TouchEvent) {
    const anchorIndex = parseInt(
      (e.target as HTMLElement).dataset.index as string
    )
    const targetEl = UlRef.value?.children[anchorIndex] as HTMLElement
    const scroll = scrollRef.value?.scroll
    scroll?.scrollToElement(targetEl, 0, 0, 0)
  }
  return {
    scrollRef,
    shortcutList,
    onShoutcutTouchStart,
  }
}
