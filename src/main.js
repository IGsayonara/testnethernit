import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'

import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce)

import VueEvents from 'vue-plugin-events'
Vue.use(VueEvents)

import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
