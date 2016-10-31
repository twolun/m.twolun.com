<script type="text/javascript">
	import './cartaddsub.scss';
	import { mapActions } from 'vuex';

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
				// this.incCart(that.foodMenu, this.food.foodId);
				//通知购物车数量改变
				// that.$emit('change-cart', 1);
				that.changeCartNums();
				that.addToCart(this.food);
			},
			handleSubCart: function(){
				if(this.food.cartNums > 0){
					// this.decCart(this.foodMenu, this.food.foodId);
					// this.$emit('change-cart', -1);
					this.decFromCart(this.food);
					this.changeCartNums();
				}
			},
			...mapActions(['addToCart', 'decFromCart', 'changeCartNums'])
		},
	}
</script>
<template>
	<div class="cartbutton" :class="entitycartbutton">
		<span class="entitybutton sub" 
			v-show="!!cartNums"
			@click="handleSubCart"
		> — </span>
		<span class="entityquantity" v-show="!!cartNums">{{cartNums}}</span>
		<span class="entitybutton add" @click="handleAddCart"> + </span>
	</div> 
</template>