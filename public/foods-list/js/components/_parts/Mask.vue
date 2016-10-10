/**
 * isShow: 初始化时，不是必须的，如果想显示隐藏效果，必须传递
 * close-callback: 蒙板层关闭时的回调，在父组件中更新isShow的状态，及执行父组件中的其实逻辑
 */

<script type="text/javascript">
	export default {
		props:{
		    isShow:{
		        type:Boolean,
		        default:false
		    }
		},
		methods:{
		    close(){
		      //TODO 广播
		      // this.isShow = false;
		      //触发绑定的父组件中的自定义事件
		      this.$dispatch('close-callback');
		    }
		  }
	}
</script>
<template>
	<div class="mask-wrap" transition="maskts" v-show="isShow" @click="close">
		
	</div>
</template>
<style lang="sass">
	.mask-wrap{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;		
		background: rgba(0, 0, 0, .5);
		transition:background .35s ease;
	}
	.maskts{
		background: rgba(0, 0, 0, .5);
	}
	.maskts-leave, .maskts-enter{
		background: rgba(0, 0, 0, .0);
	}
</style>