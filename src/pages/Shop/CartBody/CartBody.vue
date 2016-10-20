<script type="text/javascript">
	import './cartbody.scss';
	import CartAddSub from '../cart-add-sub';

	export default {
		data: function(){
			return {
				cartsData: []
			}
		},
		mounted: function(){
			var tmpData = require('../FoodsList/data.js')
			this.cartsData = [...tmpData.douzhiping, ...tmpData.kouwei];
		},
		components: {
			CartAddSub
		},
	}
</script>
<template>
	<div class="cartbody" style="z-index: 102;">
		<div class="cartheader" >
			<span class="cartheader-text">购物车</span> 
			<a href="javascript:" class="cartheader-remove">
				
				<span>清空</span>
			</a>
		</div>
		<div class="cartbody-scroller">
			<div class="piecewise-tips">
				<b>阶梯配送费</b> 满100免配送费
			</div>
			<ul class="cartlist">
				<template v-for="(foodMenu, foodMenuDatas) in cartsData">
					<li class="entityrow" v-for="food in foodMenuDatas">
						<span class="entityname">
							<em class="name">{{food.foodName}}</em>   
						</span> 
						<span class="entitytotal">{{food.foodPrice * food.cartNums}}</span>
						<cart-add-sub 
							entitycartbutton="entitycartbutton" 
							:food="food"
							:food-menu="foodMenu"
						>
						</cart-add-sub>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>