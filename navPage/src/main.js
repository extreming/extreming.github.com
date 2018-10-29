import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

import App from './App.vue'
import router from './router/index.js'

import './assets/js/fontSize.js';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App }
})
