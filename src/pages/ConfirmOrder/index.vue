<script type="text/javascript">
	import EmptyCart from './EmptyCart';
	import FullCart from './FullCart';

	export default {
		components: {
			EmptyCart,
			FullCart
		},
		data: function(){
			return {
				cartIsEmpty: false
			}
		}
	}
</script>
<template>
	<page-view title="确认订单" login="true">
		<div class="page-content">
			<empty-cart v-if="cartIsEmpty"></empty-cart>
			<full-cart v-if="!cartIsEmpty"></full-cart>
		</div>
	</page-view>
</template>
<style lang="sass">
	@import './confirmorder.scss';
</style>