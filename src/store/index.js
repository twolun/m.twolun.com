import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import glob from './modules/glob/glob.js';
import shop from './modules/shop/shop.js';
// const state = {
// 	globLoading: true,			//控制全局loading显示
	
// };

export default new Vuex.Store({
  	// state,
    modules: {
    	glob,
    	shop
    }
})