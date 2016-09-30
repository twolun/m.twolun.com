<script type="text/javascript">
	import './shopList.scss';
	import Shop from './Shop.vue';
	import logo1 from '../../../htmlImg/logo1.jpeg';
	export default {
		data: function(){
			return {
				shopList: [
					{shopId: 1111111, shopName: '汉堡王（兆丰店）', shopLogo: metadata.host + logo1}, 
					{shopId: 2222222, shopName: '汉堡王（安亭店）', shopLogo: metadata.host + logo1}, 
					{shopId: 3333333, shopName: '汉堡王（花桥店）', shopLogo: metadata.host + logo1}, 
					{shopId: 5555555, shopName: '汉堡王（园大店）', shopLogo: metadata.host + logo1}, 
					{shopId: 6666666, shopName: '汉堡王（兆丰店）', shopLogo: metadata.host + logo1}, 
					{shopId: 7777777, shopName: '汉堡王（安亭店）', shopLogo: metadata.host + logo1}, 
					{shopId: 8888888, shopName: '汉堡王（花桥店）', shopLogo: metadata.host + logo1}, 
					{shopId: 9999999, shopName: '汉堡王（园大店）', shopLogo: metadata.host + logo1}
				]
			}
		},
		components: {
			Shop
		}
	}
</script>
<template>
	<section class="shoplist">
		<shop v-for="shop in shopList" 
			:shop="shop">
		</shop>
	</section>
</template>