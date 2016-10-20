<script type="text/javascript">
	export default {
		props: ['foodMenu'],
		data: function(){
			return {
				popupShow: false
			}
		},
		methods: {
			handleIconOnTap(){
				console.log(this.popupShow)
				this.popupShow = !this.popupShow;
			}
		}
	}
</script>
<template>
	<dt>
		<div class="category-title">
			<strong class="category-name">{{foodMenu}}</strong> 
			<span class="category-description">大家喜欢吃，才叫真好吃。</span>
		</div>
		<div class="category-more">
			<span class="icon" @chlick="handleIconOnTap"></span>
			<p class="popup"
				v-show="popupShow"
				transition="popupin"
				@chlick="handleIconOnTap"
			>
				<span>热销榜</span> 
				<span>大家喜欢吃，才叫真好吃。</span>
			</p>
		</div>
	</dt>
</template>