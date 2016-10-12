<script type="text/javascript">
	import './cartfooter.scss';  
	//需要一个蒙板组件
  	import Mask from 'Mask';
  	import CartBody from '../cart-body';
	import { getTotalData } from '../../store/getters';

	export default {
		props: ['cartShaking'],
		data: function(){
			return {
				maskShow: false
			}
		},
		methods: {
			handleCartShow: function(){
				this.maskShow = true;
				document.querySelector('.page').style.overflowY = "hidden";
			},
			handleCloseCallback: function(){
				this.maskShow = false;
				document.querySelector('.page').style.overflowY = "auto";
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
		<mask :mask-show="maskShow" @close-callback="handleCloseCallback"></mask>
		<cart-body
			v-show="maskShow"
			transition="cartbodyts"
		>
			
		</cart-body>
		<div class="cartfooter">
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