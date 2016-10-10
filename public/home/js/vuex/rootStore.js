import Vue from 'vue';
import Vuex from 'vuex';

// import { testPlugin } from './plugins/testPlugin.js';
import bannerModule from '../components/banner/mutations.js';

//vue需要显示的使用插件
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		bannerModule
	}
	
})