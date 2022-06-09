import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'
import loadingDirective from './components/Loading/loading-directive'
import noResultDirective from './components/NoResult/no-result-directive'

import '@/assets/scss/index.scss'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.png'),
  })
  .directive('loading', loadingDirective)
  .directive('no-result', noResultDirective)
  .mount('#app')
