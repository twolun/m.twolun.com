import { PAGE_INIT, INC_CART, DEC_CART } from './mutation-types.js';

const mutations = {
	[PAGE_INIT] (state, foodsData){
		state.foodsData = foodsData
	},
	[INC_CART] (state, foodMenu, foodId){
		console.log(state)
		state.foodsData[foodMenu].map(function(value){
			if(value.foodId === foodId){
				return value.cartNums++;
			}
		})
	},

	[DEC_CART] (state, foodMenu, foodId){
		state.foodsData[foodMenu].map(function(value){
			if(value.foodId === foodId){
				return value.cartNums--;
			}
		})
	}
}

export default mutations;