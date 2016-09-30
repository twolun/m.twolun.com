import Vue from "vue";
import VueRouter from 'vue-router';

import App from '../js/App.vue';
// import { configRouter } from '../js/routers/route.config.js';

//安装使用vue-router插件
Vue.use(VueRouter);

//创建router
const router = new VueRouter({
	history: true,
	saveScrollPosition: true
});

//配置路由
// configRouter(router)

//启动路由
router.start(App, '#app');