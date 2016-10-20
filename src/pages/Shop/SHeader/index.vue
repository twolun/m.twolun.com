<script type="text/javascript">
	import './sheader.scss';
	import shoplogo from '../../../assets/images/shoplogo.png';
	export default {
		props: [],
		data: function(){
			return {
				shoplogo: shoplogo,
				opacity: 1,                   //.page向上滚动时，.shopheader的透明效果
	        	liShow: false,                 //.page向下pan时，隐藏的li元素的透明渐变效果
	        	shopheaderH: 220,             //.shopheader默认高度
			}
		},
		computed: {
		},
		methods: {
			handleOpenShopActivity: function(){
				this.$emit('open-shop-activity');
			}
		}
	}
</script>
<template>
	<div class="shopheader">
		<div class="shopheader-main">
			<div class="shopheader-logo-wrap">				
				<img class="shopheader-logo" :src="shoplogo" />
			</div>
			<div class="shopheader-content">
				<h2 class="shopheader-name">麻辣工坊（香锅）</h2>
				<p class="shopheader-servercontent"> 
					<span class="shopheader-server">蜂鸟专送</span> 
					<span class="shopheader-server">34分钟送达</span> 
					<span class="shopheader-server">配送费¥4</span> 
				</p>
				<div class="shopheader-activities">
					<ul> 
						<li> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(240, 115, 115); background-color: rgb(240, 115, 115);"> 减 </i> 
								<span class="activity-description"> 在线支付满25减11，满50减15，满80减20 </span> 
								</div> 
						</li>
						
					</ul>
					<div class="shopheader-activity-count" @click="handleOpenShopActivity"> 
						2个活动 <span class="allow-right"></span> 						
					</div> 
				</div>
			</div>
		</div>
		<div class="shopheader-notice" @click="handleOpenShopActivity"> 
			<span>本店菜品味美价廉，欢迎亲们光临本店，谢谢。本店另加了骨汤麻辣烫点餐时不点骨汤麻辣烫的就默认是香锅哦！</span>
			<span class="allow-right"></span> 
	    </div>
</template>