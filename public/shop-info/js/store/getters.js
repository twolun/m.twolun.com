//页面初始化数据getter
export function getPageData(state){
	return state.foodsListStore.foodsData
}

//已经添加到购物车数据

export function getCartsData(state){
	let foodsData = state.foodsListStore.foodsData;
  let tmpData = {};
  for(let foodsMenu in foodsData){
    tmpData[foodsMenu] = foodsData[foodsMenu].filter(function(food){
      return food.cartNums > 0;
    });
  }
  return tmpData;
}

//获取相关总的信息：购物车总数量，购物车总价格
export function getTotalData(state){
	let foodsData = state.foodsListStore.foodsData;
	let tmpNums = 0;
	let tmpTotlePrice = 0;
  for(let foodsMenu in foodsData){
    let tmpData = foodsData[foodsMenu];
  	tmpData.forEach(function(food){
  		if(food.cartNums > 0){
  			tmpNums += food.cartNums;
  			tmpTotlePrice += food.cartNums * food.foodPrice
  		}
  	});
    
  }
	return {cartNums: tmpNums, totalPrice: tmpTotlePrice};
}


