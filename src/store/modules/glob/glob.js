import {
	SHOW_GLOB_LOADING,
	HIDE_GLOB_LOADING
} from './mutation-types.js';

import * as actions from './actions.js';
import * as getters from './getters.js';

const state = {
	globLoading: true
};

const mutations = {
	[SHOW_GLOB_LOADING](state){
		state.globLoading = true;
		console.log(state, 111111111)
	},
	[HIDE_GLOB_LOADING](state){
		console.log(state, 22222222)
		state.globLoading = false;
	}
};

export default {
	state,
	actions,
	getters,
	mutations
}
