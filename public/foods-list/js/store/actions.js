import { 
	PAGE_INIT, 
	INC_CART,
	DEC_CART 
} from './mutation-types';

//页面初始化，获取数据
export const pageInit = ({dispatch}) => {
	var foodsData = require('./data');
	setTimeout(() => {
		dispatch(PAGE_INIT, foodsData);
	}, 1000);
}

//加入到购物车
export const incCart = ({dispatch}, foodMenu, foodId) => {
	dispatch(INC_CART, foodMenu, foodId)
}


//从购物车删除一个
export const decCart = ({dispatch}, foodMenu, foodId) => {
	dispatch(DEC_CART, foodMenu, foodId)
}

