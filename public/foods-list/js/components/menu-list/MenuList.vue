<script type="text/javascript">
	import './menulist.scss';
	import DtComponent from './_parts/DtComponent.vue';
	import DdComponent from './_parts/DdComponent.vue';
	import { getPageData } from '../../store/getters';

	export default {
		props: [],
		components: {
			DtComponent,
			DdComponent
		},
		vuex: {
			getters: {
				foodsData: getPageData
			},
			actions: {
				
			}
		}
	}
</script>
<template>
	<section class="menu-list">
		<div class="scroller">
			<dl v-for="(key, value) in foodsData">
				<dt-component
					:food-menu="key"
				></dt-component>				
				<dd-component 
					v-for="food in value"
					:food="food"
					:food-menu="key" 
				>
				</dd-component>
			</dl>
		</div>
	</section>
</template>
