import {
	GET_FOODS_LIST,
	GET_MENU_LIST,
	ADD_TO_CART,
	DEC_FROM_CART
} from './mutation-types.js';

import * as actions from './actions.js';
import * as getters from './getters.js';



const state = {
	menuList: [],
	foodsList: [],
	cartFoods: []
};

const mutations = {
	[GET_FOODS_LIST](state, foodsList){
		state.foodsList = foodsList;
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}