import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app';
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';

import { routes, scrollBehavior } from './routes/routes.config.js';
import {
    PageView,
    Header,
    Swipe,
    SwipeItem,
    Field, 
    Button,
    Switch,
    Lazyload
} from './mint-ui';

// Vue.use(MintUI);

Vue.component('page-view', PageView);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.component(Lazyload.name, Lazyload);

Vue.config.debug = PRODUCTION;//开启错误提示
Vue.use(VueRouter);

const router = new VueRouter({
	// mode: 'history',
	base: __dirname,
	scrollBehavior,
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
