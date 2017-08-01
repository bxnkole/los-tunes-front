import Vue from 'vue'
import ElementUI from 'element-ui'
import router from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from 'axios'

Vue.use(router);
Vue.use(ElementUI);

axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
axios.defaults.baseURL='http://localhost:9311/api/v2';

new Vue({
  el: '#app',
  render: h => h(App)
})
 