<script type="text/javascript">
	import EmptyCart from './EmptyCart';
	export default {
		components: {
			EmptyCart
		},
		data: function(){
			return {
				cartIsEmpty: true
			}
		}
	}
</script>
<template>
	<page-view title="确认订单" login="true">
		<div class="page-content">
			<empty-cart v-if="cartIsEmpty"></empty-cart>
		</div>
	</page-view>
</template>
<style lang="sass">
	@import './confirmorder.scss';
</style>