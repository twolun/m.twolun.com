<script type="text/javascript">
	import './shoptip.scss';

	export default {
		data: function(){
			return {
				isFoods: true
			}
		},
		methods: {
			handleShopNavOnTap: function(type){
				//选中状态改变
				this.isFoods = type === 'foods' ? true : false;
				this.$dispatch('foods-ex-info', type);
			}
		}
	}
</script>
<template>
	<div class="shopnav"> 
		<a class="shopnav-tab"
			:class="{active: isFoods}" 
			v-touch:tap="handleShopNavOnTap('foods')"> 
			<span class="shopnav-title">商品</span> 
		</a>
		<a class="shopnav-tab"
			:class="{active: !isFoods}"
		 	v-touch:tap="handleShopNavOnTap('info')"> 
			<span class="shopnav-title">商家</span> 
		</a> 
	</div>
</template>