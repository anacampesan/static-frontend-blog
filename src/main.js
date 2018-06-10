import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
