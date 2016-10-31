<script type="text/javascript">
	import IScroll from 'iscroll-lite';
	import './foodslist.scss';
	import DtComponent from './_parts/DtComponent.vue';
	import DdComponent from './_parts/DdComponent.vue';

	import { mapGetters, mapActions } from 'vuex';

	export default {
		data: function(){
			return {
			}
		},
		components: {
			DtComponent,
			DdComponent
		},
		computed: {
			...mapGetters({
				foodsData: 'foodsList'
			})
		},
		methods: {
			...mapActions(['getFoodsList'])
		},
		created: function(){
			this.$store.dispatch('getFoodsList');
		},
		mounted: function(){
			// this.foodsData = require('./data.js');

		},
		directives: {
			initscroll: {
				bind: function(value){
				},
				componentUpdated: function(el, binding){
					if(binding.oldVal !== binding.value){
						let scrollWrapper = document.querySelector('#menu-list-wrapper');
						if(scrollWrapper){
							var myScroll = new IScroll(scrollWrapper);
							
						}
					}
				}
			}
		},
	}
</script>
<template>
	<section class="menu-list" id="menu-list-wrapper">
		<div class="scroller" v-initscroll="foodsData">
			<dl v-for="(value, key) in foodsData">
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
