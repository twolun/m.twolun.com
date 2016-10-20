<script type="text/javascript">
	import meishi from '../../../assets/images/meishi.jpeg';
	import thtj from '../../../assets/images/thtj.jpeg';
	import pzzc from '../../../assets/images/pzzc.jpeg';
	import zsd from '../../../assets/images/zsd.jpeg';
	import sdcs from '../../../assets/images/sdcs.jpeg';
	import tpyp from '../../../assets/images/tpyp.jpeg';
	import gssc from '../../../assets/images/gssc.jpeg';
	import xhdg from '../../../assets/images/xhdg.jpeg';

	export default {
		data: function(){
			return {
				navData: [
					{text: '美食', imgSrc: meishi, routeP: 'meishi'},
					{text: '土豪推荐', imgSrc: thtj, routeP: 'thtj'},
					{text: '品质早餐', imgSrc: pzzc, routeP: 'pzzc'},
					{text: '准时达', imgSrc: zsd, routeP: 'zsd'},
					{text: '商店超市', imgSrc: sdcs, routeP: 'sdcs'},
					{text: '甜品饮品', imgSrc: tpyp, routeP: 'tpyp'},
					{text: '果蔬生鲜', imgSrc: gssc, routeP: 'gssc'},
					{text: '鲜花蛋糕', imgSrc: xhdg, routeP: 'xhdg'}
				]
			}
		}
	}
</script>

<template>
	<nav class="nav">
		<ul class="cf">
			<li class="fl nav_item" v-for="navItem in navData">
				<router-link to="/test">
					<img :src="navItem.imgSrc">
					<span>{{navItem.text}}</span>					
				</router-link>
				</a>
			</li>
		</ul>
	</nav>
</template>
<style lang="sass" scoped>
	@import './nav.scss';
</style>
