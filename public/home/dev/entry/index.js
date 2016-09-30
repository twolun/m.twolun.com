// //es6语法：
// import Vue from "vue";
// //其实不用写完，会自动查找。
// //外部引入别的库都可以用这样的方式，比如jquery等。。
// //引入我们编写的测试用vue文件。
// import app from '../js/app.vue';

// Vue.config.debug = true;//开启错误提示

// new Vue(Object.assign({el:"#app"}, app));
//es6语法：
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