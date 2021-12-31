import 'bootstrap';

import store from './store'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {router} from "./routes";


Vue.use(VueRouter)
Vue.config.productionTip = false


// eslint-disable-next-line no-unused-vars
const vm = new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
