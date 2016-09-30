<script type="text/javascript">
	import './shopbody.scss';
	
	export default {
		
	}
</script>
<template>
	<div class="shopbody">
		<slot name="shoptip"></slot>
		<div class="menuview">
			<div class="menuview-main">
				<div class="main-content">
					<slot name="menunav"></slot>
				</div>
			</div>
		</div>
	</div>
</template>