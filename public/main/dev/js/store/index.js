import Vue from 'vue';
import Vuex from 'vuex';
import foodsListStore from '../../../../foods-list/js/store';

Vue.use(Vuex);

const state = {
  isLoading: false,
  direction: 'forward'
}

const mutations = {
    UPDATE_LOADING (state, status) {
      	state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
    	state.direction = direction
    }
}

export default new Vuex.Store({
	  state, 
	  mutations,
	  modules:{
		  foodsListStore
	  }
	
})