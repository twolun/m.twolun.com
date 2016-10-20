<script type="text/javascript">
	import IScroll from 'iscroll-lite';
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
		ready: function(){

		},
		directives: {
			initscroll: {
				bind: function(value){
					console.log(value)
				},
				update: function(newVal, oldVal){
					
					if(oldVal){
						let scrollWrapper = document.querySelector('#menu-list-wrapper');
						if(scrollWrapper){
							var myScroll = new IScroll(scrollWrapper);
							
						}
					}
				}
			}
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
	<section class="menu-list" id="menu-list-wrapper">
		<div class="scroller" v-initscroll="foodsData">
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
