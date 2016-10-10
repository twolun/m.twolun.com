<script type="text/javascript">
	export default {
		props: ['shop']
	}
</script>
<template>
	<section class="item" v-link="{path: `/shop/${shop.shopId}`}">
		<div class="left-wrap">
			<img class="logo" :src="shop.shopLogo">
		</div>
		<div class="right-wrap"> 
			<section class="line"> 
				<h3 class="shopname premium">{{shop.shopName}}</h3> 
			</section> 
		</div>
	</section>
</template>