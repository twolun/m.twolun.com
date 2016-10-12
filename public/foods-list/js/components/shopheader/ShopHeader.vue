<script type="text/javascript">
	import './shopheader.scss';
	import shoplogo from '../../../htmlImg/shoplogo.png';
	export default {
		props: ['opacity', 'li-opacity', 'shopheaderH'],
		data: function(){
			return {
				shoplogo: shoplogo
			}
		},
		computed: {
			panHeaderStyle: function(){
				if(this.shopheaderH > 110){
					return {
						height: this.shopheaderH + 'px'
					}
				}else{
					return {
						height: '110px',
						transition: 'height .2s ease-in'
					}
				}
			}
		}
	}
</script>
<template>
	<div class="shopheader" v-bind:style="panHeaderStyle">
		<div class="shopheader-background">
			
		</div>
		<div class="shopheader-main" v-bind:style="{opacity: opacity}">
			<img class="shopheader-logo" :src="shoplogo" />
			<div class="shopheader-content">
				<h2 class="shopheader-name">麻辣工坊（香锅）</h2>
				<p class="shopheader-servercontent"> 
					<span class="shopheader-server">蜂鸟专送</span> 
					<span class="shopheader-server">34分钟送达</span> 
					<span class="shopheader-server">配送费¥4</span> 
				</p>
				<div class="shopheader-activities">
					<ul> 
						<li style="opacity: 1;"> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(240, 115, 115); background-color: rgb(240, 115, 115);"> 减 </i> 
								<span class="activity-description"> 在线支付满25减11，满50减15，满80减20 </span> 
								</div> 
						</li>
						<li v-bind:style="{opacity: liOpacity}"> 
							<div class="activity-wrap wrap"> 
								<i class="activity-icon" style="color: rgb(255, 255, 255); border-color: rgb(112, 188, 70); background-color: rgb(112, 188, 70);"> 新 
								</i> 
								<span class="activity-description"> (不与其他活动同享)新用户下单立减12.0元 </span> 
							</div> 
						</li> 
					</ul> 
				</div>
			</div>
		</div>
		<div class="shopheader-notice"> 
			<span>本店菜品味美价廉，欢迎亲们光临本店，谢谢。本店另加了骨汤麻辣烫点餐时不点骨汤麻辣烫的就默认是香锅哦！</span> 
	    </div>
</template>