<script type="text/javascript">
	import XHeader from './components/XHeader.vue';

	export default {
		props: ['title'],
		components: {
			XHeader
		},
		getters: {
			isLoading: (state) => state.isLoading,
		}
	}
</script>
<template>
	<div class="page-wrap">
		<x-header :title="title"></x-header>			
		<slot name="content"></slot>
	</div>
</template>
<style lang="sass">
	.page-wrap{
		position: relative;
		padding-top: 40px;
		width: 100%;
		height: 100%;

	}
	.page-content{
		height: 100%;
	    min-height: 100%;
	    overflow-y: auto;
	    overflow-x: hidden;
	}
</style>