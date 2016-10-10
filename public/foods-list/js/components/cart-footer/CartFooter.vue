<script type="text/javascript">
	import './cartfooter.scss';  
	//需要一个蒙板组件
  	import Mask from '../_parts/Mask.vue';
  	import CartBody from '../cart-body';
	import { getTotalData } from '../../store/getters';

	export default {
		props: ['cartShaking'],
		data: function(){
			return {
				isShow: false
			}
		},
		methods: {
			handleCartShow: function(){
				this.isShow = true;
			},
			handleCloseCallback: function(){
				this.isShow = false;
			}
		},
		components: {
			Mask,
			CartBody
		},
		vuex: {
			getters: {
				totalData: getTotalData
			},
			actions: {
				
			}
		}
	}
</script>
<template>
	<footer>
		<mask :is-show="isShow" @close-callback="handleCloseCallback"></mask>
		<cart-body
			v-show="isShow"
			transition="cartbodyts"
		>
			
		</cart-body>
		<div class="cartfooter" style="z-index: 11;">
			<span class="carticon"
				v-bind:class="{'shake': cartShaking}"
				attr-quantity="{{totalData.cartNums}}"
				@click="handleCartShow"
			></span>
			<div class="cartprice">
				<span class="carttotal">¥{{totalData.totalPrice}}</span> 
				<span class="cartdelivery">配送费¥8</span>
			</div>
			<a href="javascript:" class="submitbutton">去结算</a>
		</div>
	</footer>
</template>