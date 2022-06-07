import { createApp, DirectiveBinding, ComponentPublicInstance } from 'vue'
import Loading from './Loading.vue'
import { addClass, removeClass } from '@/assets/js/dom'

// type El = HTMLElement & { instance: ComponentPublicInstance }
type El = HTMLElement & {
  [name: string]: { instance: ComponentPublicInstance | null }
}

const relativeCls = 'g-relative'

export default function createLoadingLikeDirective<
  T extends ComponentPublicInstance & { setTitle: (title: string) => void }
>(Comp: T, name: string) {
  return {
    mounted(el: El, binding: DirectiveBinding) {
      const app = createApp(Comp)
      const instance = app.mount(document.createElement('div')) as unknown as T
      if (!el[name]) {
        el[name] = { instance: null }
      }
      el[name].instance = instance
      const title = binding.arg
      if (title !== undefined) {
        instance.setTitle(title)
      }
      if (binding.value) {
        append(el)
      }
    },
    updated(el: El, binding: DirectiveBinding) {
      if (binding.value !== binding.oldValue) {
        binding.value ? append(el) : remove(el)
      }
    },
  }

  function append(el: El) {
    const style = getComputedStyle(el)
    if (!['fixed', 'absolute', 'relative'].includes(style.position)) {
      addClass(el, relativeCls)
    }
    el.appendChild(el[name].instance?.$el)
  }

  function remove(el: El) {
    removeClass(el, relativeCls)
    el.removeChild(el[name].instance?.$el)
  }
}
