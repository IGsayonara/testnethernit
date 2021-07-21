import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce)

import VueEvents from 'vue-plugin-events'
Vue.use(VueEvents)

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

import VModal from 'vue-js-modal'
Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
