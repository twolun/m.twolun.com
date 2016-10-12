<script type="text/javascript">
	import './menunav.scss';
	import saleHot from '../../../htmlImg/sale-hot.jpeg';

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
		methods: {
			handlOntap(index){
				this.activeIndex = index;
			}
		}
	}
</script>
<template>
	<ul class="menu-nav">
		<li> 
			<img class="category-icon" :src="saleHot"> 
			<span class="category-name" >热销榜</span>
		</li>
		<li class="noicon"
			 v-for="menu in menuList"
			 v-bind:class="{active: activeIndex === $index}"
			 v-touch:tap="handlOntap($index)"
		>  
			<span class="category-name" >{{menu.title}}</span>
		</li>
		<!-- <li class="noicon">  
			<span class="category-name" >麻辣烫</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >口味</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >主食</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >套餐锅底</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >豆制品</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >蔬菜类</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >菌菇类</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >荤菜类</span>
		</li>
		<li class="noicon">  
			<span class="category-name" >饮料酒水</span>
		</li> -->
	</ul>
</template>