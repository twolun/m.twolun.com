<script type="text/javascript">
	import IScroll from 'iscroll-lite';
	import './menulist.scss';
	import saleHot from '../../../assets/images/sale-hot.jpeg';

	export default {
		data: function(){
			return {
				activeIndex: 0,
				saleHot: saleHot,
				menuList: [
					{title: '餐盒必点谢谢！'},
					{title: '麻辣烫'},
					{title: '口味'},
					{title: '主食'},
					{title: '套餐锅底'},
					{title: '豆制品'},
					{title: '蔬菜类'},
					{title: '菌菇类'},
					{title: '荤菜类'},
					{title: '饮料酒水'},
					{title: '饮料酒水'},
					{title: '饮料酒水'},
					{title: '饮料酒水'},
					{title: '饮料酒水'},
					{title: '饮料酒水'}
				]
			}
		},
		mounted: function(){
			var myScroll = new IScroll('#menu-wrapper');
		},
		methods: {
			handlOntap(params){
				this.activeIndex = params.index;
			}
		}
	}
</script>
<template>
	<div id="menu-wrapper">
		<ul class="menu-nav">
			<li> 
				<img class="category-icon" :src="saleHot"> 
				<span class="category-name" >热销榜</span>
			</li>
			<li class="noicon"
				 v-for="(menu, index) in menuList"
				 v-bind:class="{active: activeIndex === index}"
				 @click="handlOntap(index)"
			>  
				<span class="category-name" >{{menu.title}}</span>
			</li>
		</ul>
	</div>
</template>