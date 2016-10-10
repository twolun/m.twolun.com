<script type="text/javascript">
	import './nav.scss';
	import meishi from '../../../htmlImg/meishi.jpeg';
	import thtj from '../../../htmlImg/thtj.jpeg';
	import pzzc from '../../../htmlImg/pzzc.jpeg';
	import zsd from '../../../htmlImg/zsd.jpeg';
	import sdcs from '../../../htmlImg/sdcs.jpeg';
	import tpyp from '../../../htmlImg/tpyp.jpeg';
	import gssc from '../../../htmlImg/gssc.jpeg';
	import xhdg from '../../../htmlImg/xhdg.jpeg';

	export default {
		data: function(){
			return {
				navData: [
					{text: '美食', imgSrc: metadata.host + meishi, routeP: 'meishi'},
					{text: '土豪推荐', imgSrc: metadata.host + thtj, routeP: 'thtj'},
					{text: '品质早餐', imgSrc: metadata.host + pzzc, routeP: 'pzzc'},
					{text: '准时达', imgSrc: metadata.host + zsd, routeP: 'zsd'},
					{text: '商店超市', imgSrc: metadata.host + sdcs, routeP: 'sdcs'},
					{text: '甜品饮品', imgSrc: metadata.host + tpyp, routeP: 'tpyp'},
					{text: '果蔬生鲜', imgSrc: metadata.host + gssc, routeP: 'gssc'},
					{text: '鲜花蛋糕', imgSrc: metadata.host + xhdg, routeP: 'xhdg'}
				]
			}
		}
	}
</script>

<template>
	<nav class="nav">
		<ul class="cf">
			<li class="fl nav_item" v-for="navItem in navData">
				<a v-link="{path: `/${navItem.routeP}`}">
					<img :src="navItem.imgSrc">
					<span>{{navItem.text}}</span>					
				</a>
			</li>
		</ul>
	</nav>
</template>
