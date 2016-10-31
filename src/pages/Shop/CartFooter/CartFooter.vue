<script type="text/javascript">
	import './cartfooter.scss';  
	//需要一个蒙板组件
  	import XMask from 'Mask';
  	import CartBody from '../CartBody';
  	import { mapGetters } from 'vuex';

	export default {
		// props: ['cartShaking'],
		data: function(){
			return {
				maskShow: false,
			}
		},
		computed: {
			...mapGetters(['cartsList', 'cartTotal', 'cartShaking'])
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
			XMask,
			CartBody
		},
	}
</script>
<template>
	<footer>
		<x-mask :mask-show="maskShow" @close-callback="handleCloseCallback"></x-mask>
		<transition name="cartbodyts">
			<cart-body
				v-show="maskShow"
				:carts-data="cartsList"
			>			
			</cart-body>
		</transition>
		<div class="cartfooter">
			<span class="carticon"
				:class="{'shake': cartShaking}"
				:attr-quantity="cartTotal.totalNums"
				@click="handleCartShow"
			></span>
			<div class="cartprice">
				<span class="carttotal">¥{{cartTotal.totalPrice}}</span> 
				<span class="cartdelivery">配送费¥8</span>
			</div>
			<!-- <a href="javascript:" class="submitbutton">去结算</a> -->
			<router-link to="/confirmorder" class="submitbutton">去结算</router-link>
		</div>
	</footer>
</template>