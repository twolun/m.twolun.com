import {
	GET_FOODS_LIST,
	GET_MENU_LIST,
	ADD_TO_CART,
	DEC_FROM_CART
} from './mutation-types.js';

export const getFoodsList = function({ commit }){
	let foodsList = require('../../data.js');
	commit(GET_FOODS_LIST, foodsList);
}