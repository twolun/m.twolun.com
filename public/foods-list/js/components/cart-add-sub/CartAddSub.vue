<script type="text/javascript">
	import './cartaddsub.scss';
	import { incCart, decCart } from '../../store/actions';

	export default {
		props: ['food', 'foodMenu', 'entitycartbutton'],
		computed: {
			cartNums: function(){
				return this.food && this.food.cartNums;
			}
		},
		methods: {
			handleAddCart: function(){
				let that = this;
				this.incCart(that.foodMenu, this.food.foodId);
				//通知购物车数量改变
				that.$dispatch('change-cart', 1);
			},
			handleSubCart: function(){
				if(this.food.cartNums > 0){
					this.decCart(this.foodMenu, this.food.foodId);
					this.$dispatch('change-cart', -1);
				}
			}
		},
		vuex: {
			actions: {
				incCart,
				decCart
			}
		}
	}
</script>
<template>
	<div class="cartbutton {{entitycartbutton}}">
		<span class="entitybutton sub" 
			v-show="!!cartNums"
			v-touch:tap="handleSubCart"
		> — </span>
		<span class="entityquantity" v-show="!!cartNums">{{cartNums}}</span>
		<span class="entitybutton add" v-touch:tap="handleAddCart"> + </span>
	</div> 
</template>