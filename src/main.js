// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.use(Vuetify)
Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
axios.defaults.baseURL = 'http://localhost:9311/api/v2';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})