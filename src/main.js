import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueDebounce from 'vue-debounce'
import Paginate from 'vuejs-paginate'
import VModal from 'vue-js-modal'
import store from './store'

Vue.use(vueDebounce)
Vue.use(VModal)
Vue.component('paginate', Paginate)


Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
