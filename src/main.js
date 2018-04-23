import Vue from 'vue'
import ElementUI from '../element'
import '../element/lib/theme-chalk/index.css'
import App from './Form.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
