// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCarousel from 'vue-carousel'
import VueRouter from 'vue-router'

import routes from './routes'

const path = require('path')

Vue.use(VueCarousel);

Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

