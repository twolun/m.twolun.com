import {
	GET_FOODS_LIST,
	GET_MENU_LIST,
	ADD_TO_CART,
	DEC_FROM_CART,
	CHANGE_CART_NUMS
} from './mutation-types.js';

import * as actions from './actions.js';
import * as getters from './getters.js';



const state = {
	menuList: [],
	foodsList: [],
	cartFoods: [],
	cartShaking: false,			//控制购物车UI的动画状态
};

const mutations = {
	[GET_FOODS_LIST](state, foodsList){
		state.foodsList = foodsList;
		let carts = [];
		for(let key in foodsList){
			foodsList[key].forEach((food) => {
				if(food.cartNums){
					carts.push(food);
				}
			})
		}

		state.cartFoods = carts;

	},

	[ADD_TO_CART](state, food){
		//当前state中的food数量减1，购物车中数量加1
		for(let key in state.foodsList){
			state.foodsList[key].forEach((value, i) => {
				if(value.foodId === food.foodId){
					value.cartNums++;
				}
			})
			
		}
	},

	[DEC_FROM_CART](state, food){
		//当前state中的food数量减1，购物车中数量加1
		for(let key in state.foodsList){
			state.foodsList[key].forEach((value, i) => {
				if(value.foodId === food.foodId){
					value.cartNums--;
				}
			})
			
		}
	},

	[CHANGE_CART_NUMS](state, flag){
		state.cartShaking = flag;
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}