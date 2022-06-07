import Loading from './Loading.vue'
import createLoadingLikeDirective from '@/assets/js/create-loading-like-directive'

type Loading = InstanceType<typeof Loading>

const loadingDirective = createLoadingLikeDirective<Loading>(
  Loading as unknown as Loading,
  'loading'
)

export default loadingDirective
// import { createApp, DirectiveBinding } from 'vue'
// import { addClass, removeClass } from '@/assets/js/dom'

// // type El = HTMLElement & { instance: ComponentPublicInstance }
// type El = HTMLElement & { instance: Loading }
// type Loading = InstanceType<typeof Loading>

// const relativeCls = 'g-relative'

// const loadingDirective = {
//   mounted(el: El, binding: DirectiveBinding) {
//     const app = createApp(Loading)
//     const instance = app.mount(document.createElement('div')) as Loading
//     el.instance = instance

//     const title = binding.arg
//     if (title !== undefined) {
//       instance.setTitle(title)
//     }

//     if (binding.value) {
//       append(el)
//     }
//   },
//   updated(el: El, binding: DirectiveBinding) {
//     if (binding.value !== binding.oldValue) {
//       binding.value ? append(el) : remove(el)
//     }
//   },
// }

// function append(el: El) {
//   const style = getComputedStyle(el)
//   if (!['fixed', 'absolute', 'relative'].includes(style.position)) {
//     addClass(el, relativeCls)
//   }
//   el.appendChild(el.instance.$el)
// }

// function remove(el: El) {
//   removeClass(el, relativeCls)
//   el.removeChild(el.instance.$el)
// }

// export default loadingDirective
