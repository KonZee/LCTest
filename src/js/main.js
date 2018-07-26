import Vue from 'vue';

import router from './router'
import store from './store'

import VueTouch from 'vue-touch'

import main from './components/app.vue'

Vue.use(VueTouch)

const app = new Vue ({
  router,
  store,
  render: h => h(main)
}).$mount('#app');
