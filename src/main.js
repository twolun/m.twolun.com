import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app';
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';

import { routes, scrollBehavior } from './routes/routes.config.js';
import './mint-ui';
import store from './store';
import mixin from './mixin';

Vue.config.debug = PRODUCTION;//开启错误提示
Vue.use(VueRouter);

const router = new VueRouter({
	// mode: 'history',
	base: __dirname,
	scrollBehavior,
	routes
})

new Vue({
  el: '#app',
  store,
  // mixins: [mixin],
  router,
  render: h => h(App)
})
