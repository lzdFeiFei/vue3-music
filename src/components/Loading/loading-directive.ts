import { createApp, DirectiveBinding, ComponentPublicInstance } from 'vue'
import Loading from './Loading.vue'
import { addClass, removeClass } from '@/assets/js/dom'

type El = HTMLElement & { instance: ComponentPublicInstance }

const relativeCls = 'g-relative'

const loadingDirective = {
  mounted(el: El, binding: DirectiveBinding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance

    const title = binding.arg
    if (typeof title !== undefined) {
      ;(instance as any).setTitle(title) //TODO 如何优化？
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
  el.appendChild(el.instance.$el)
}

function remove(el: El) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
