export const cartShaking = state => state.cartShaking;
export const menuList = state => state.menuList;
export const foodsList = state => state.foodsList;

/**
 * 购物车商品及数量
 */
export const cartsList = state => {
	// let foodsList = state.foodsList;
	// let carts = [];
	// for(let key in foodsList){
	// 	foodsList[key].forEach((food) => {
	// 		if(food.cartNums){
	// 			carts.push(food);
	// 		}
	// 	})
	// }

	return state.cartFoods;
}

/**
 *
 * 购物车总价格，想来想去还是做一个getter比较方便
 */
export const cartTotal = state => {
	let cartsList = state.cartFoods;
	let totalPrice = 0;
	let totalNums = 0;
	cartsList.forEach((foods, i) => {
		totalPrice += foods.foodPrice * foods.cartNums;
		totalNums += foods.cartNums
	});

	return { totalPrice, totalNums };
}