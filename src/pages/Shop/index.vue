<script type="text/javascript">
	import SHeader from './SHeader';
	// import Activity from './Activity';
	import ShopTip from './ShopTip';
	import MenuList from './MenuList';
	import FoodsList from './FoodsList';
	import ShopInfo from './ShopInfo';
	import CartFooter from './CartFooter';
	import { mapGetters, mapActions } from 'vuex';

	export default {
		components: {
			SHeader,
			Activity: (resolve) => require(['./Activity'], resolve),
			ShopTip,
			MenuList,
			FoodsList,
			ShopInfo,
			CartFooter
		},
		data(){
	      	return {
	      		showActivity: false,
	      		isShowFoods: true,
	      		currentActivity: '',
	      		cartShaking: false
	        }
	    },
	    mounted: function(){
	    	setTimeout(() => {

	    	// this.$store.commit('HIDE_GLOB_LOADING');
	    	}, 1000)
	    },
	    beforeRouteEnter: function(to, from, next){
	    	// this.$store.commit('SHOW_GLOB_LOADING');
	    		setTimeout(()=>{
	    			next(vm => {
	    		
	    				// vm.$store.commit('HIDE_GLOB_LOADING');
	    			});
	    		}, 1000);
	    },
	    methods: {
	    	...mapActions(['hideGlobLoading']),
	    	handlOpenShopActivity(close){
	        	this.showActivity = close === 'close' ? false : true;
	        	this.currentActivity = close === 'close' ? '' : 'Activity';
	      	},
	      	handleFoodsExInfo(type){
	      		this.isShowFoods = type === 'foods' ? true : false;

	      	},
	      	handleChangeCart(){
	      		console.log(11111111111)
	      		this.handleChangeCart = true;
	      	}
	    },
	    directives: {
	    	initfoodsheight: {
	    		inserted: function(el){
	    			console.log(el)
	    			let wh = window.innerHeight;
	    			el.style.height = wh - 144 + 'px';
	 	    	}
	    	}
	    }
	}
</script>
<template>
	<div class="page-shop">
		<s-header
      		@open-shop-activity="handlOpenShopActivity"
		></s-header>
		<shop-tip 
			@foods-ex-info="handleFoodsExInfo"
		></shop-tip>
		<div v-show="isShowFoods" v-initfoodsheight class="shop-foods-wrap">
			<menu-list v-initfoodsheight></menu-list>
			<foods-list></foods-list>
		</div>
		<cart-footer v-show="isShowFoods" :cart-shaking="cartShaking" @change-cart="handleChangeCart"></cart-footer>
		<shop-info v-show="!isShowFoods"></shop-info>
		<transition name="router-fade">
			<!-- <activity
				v-show="showActivity"
				@close-shop-activity="handlOpenShopActivity"
			>
				
			</activity>
 -->			
 			<component 
 				:is="currentActivity"
 				v-show="showActivity"
				@close-shop-activity="handlOpenShopActivity"
 			>
			</component>
		</transition>
	</div>
</template>
<style lang="sass">
	.page-shop{height: 100%;}
	.shop-foods-wrap{
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	.show-table{
		display: table;
	}
	.show-cell{
		display: table-cell;
		font-size: 24px;
		height: 100%;
		min-height: 100%;
		background-color: green;
	}
</style>