<script type="text/javascript">
	import CartAddSub from '../../cart-add-sub';
	export default {
		props: ['food', 'foodMenu'],
		components: {
			CartAddSub
		}
	}
</script>
<template>
	<dd>
		<span class="foodimg">
			<img src="//fuss10.elemecdn.com/4/af/0ab6c999802247262576a49b80484png.png?imageMogr/thumbnail/140x140/format/webp/quality/85">
		</span>
		<section class="foodinfo">
			<header class="foodtitle">
				<span>{{food.foodName}}</span>
			</header>
			<p class="foodsales">
				<span>月售{{food.monthSales}}份</span> 
				<span>好评率{{food.favComment}}%</span>
			</p>
			<strong class="foodprice">
				<span>{{food.foodPrice}}</span>   
			</strong>
			<cart-add-sub :food="food" :food-menu="foodMenu"></cart-add-sub>                    
		</section>
	</dd>
</template>