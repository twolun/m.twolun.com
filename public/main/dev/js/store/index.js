import Vue from 'vue';
import Vuex from 'vuex';
import foodsListStore from '../../../../foods-list/js/store';

Vue.use(Vuex);


export default new Vuex.Store({
	modules:{
		foodsListStore
	}
	
})