<script type="text/javascript">
	export default {
		props: ['shop']
	}
</script>
<template>
		<a href="#" v-link="{path:`/shop/${shop.shopId}`}">
	<section class="item">
		<div class="left-wrap">
			<img class="logo" :src="shop.shopLogo">
		</div>
		<div class="right-wrap"> 
			<section class="line"> 
				<h3 class="shopname premium">{{shop.shopName}}</h3> 
			</section> 
		</div>
	</section>
		</a>
</template>