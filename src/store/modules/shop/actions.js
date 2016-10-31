import {
	GET_FOODS_LIST,
	GET_MENU_LIST,
	ADD_TO_CART,
	DEC_FROM_CART,
	CHANGE_CART_NUMS
} from './mutation-types.js';

/**
 * 
 * 店铺商品初始化
 * 
 */
export const getFoodsList = function({ commit }){
	let foodsList = require('../../data.js');
	commit(GET_FOODS_LIST, foodsList);
}

/**
 *
 * 添加到购物车
 */

export const addToCart = function({ commit }, food){
	commit(ADD_TO_CART, food);
}

/**
 *
 * 删除购物车
 */

export const decFromCart = function({ commit }, food){
	commit(DEC_FROM_CART, food);
}

/**
 *
 * 根据购物车数量的变化，显示购物车UI动画
 */

export const changeCartNums = function({ commit }){
	commit(CHANGE_CART_NUMS, true);
	setTimeout(() => {
		commit(CHANGE_CART_NUMS, false);
	}, 500);
}
