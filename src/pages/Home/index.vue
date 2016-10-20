<script type="text/javascript">
	// import './home.scss';
	import XNav from './nav';
	import ShopList from './shopList';

	export default {
		components: {
			XNav,
			ShopList
		},
		methods: {
			handleClose(){

			}
		}
	}
</script>
<template>
	<div class="page-home">
		<mt-header fixed title="嘉定区安亭镇">
		  <router-link to="/" slot="left" class="search-btn">
		    <mt-button icon="search"></mt-button>
		  </router-link>
		  	<router-link to="/login"  slot="right" class="search-btn">
			  <mt-button>登录</mt-button>
		  	</router-link>
		</mt-header>
		<mt-swipe :auto="0" class="swiper-wrap">
		  <mt-swipe-item>
		  	<x-nav></x-nav>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<x-nav></x-nav>
		  </mt-swipe-item>
		</mt-swipe>
		<shop-list></shop-list>
	</div>
</template>
<style lang="sass">
	@import './home.scss';	
</style>