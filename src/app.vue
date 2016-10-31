<script type="text/javascript">
	import FastClick from 'fastclick';
	import './assets/images/using/loading.png';	
	import './assets/images/using/loading-bottom.png';	

	export default {
		data () {
		    return {
		      transitionName: 'slide-left',
		    }
		},
		created: function(){
			//页面刷新，则表明需要重新载入页面，清除保存的路由数据
			window.onbeforeunload = function(){
				window.sessionStorage && window.sessionStorage.clear();
			}
		},
		watch: {
		    '$route' (to, from) {
		      	// const toDepth = to.path.split('/').length
		      	// const fromDepth = from.path.split('/').length
		      	// this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		      	/**
		      	 * 判断路由是否已经渲染过，将to进行本地存储
		      	 * 此处使用sessionStorage，用户关闭此次会话会清除本次存储的路由，
		      	 * 再次重新进入应用时，所有路由要重新渲染，初始化
		      	 */
		      	let history = window.sessionStorage;
		      	if(!history){
		      		return false;
		      	}
		      	// history.clear();
		      	if(!history.getItem(to.path)){
		      		this.$store.dispatch('showGlobLoading');
		      		history.setItem(to.path, to.path);
		      	}else{
		      		this.$store.dispatch('hideGlobLoading');
		      	}
		    }
		},

		mounted: function(){
			FastClick.attach(document.body);
		}
	}
</script>
<template>
	<div class="page">
		<!-- <loading></loading> -->
		<transition name="router-fade" mode="out-in">
			<keep-alive>
			<router-view></router-view>	
			</keep-alive>
		</transition>
	</div>
</template>
<style lang="sass">
	@import './assets/scss/common.scss';
	.page{
		width: 100%;
		height: 100%;
		min-width: 320px;
		max-width: 640px;
		margin: 0 auto;
		position: relative;
		background-color: #f4f4f4;
	}
	.page-loading{
		position: absolute;
		top: 100px;
		left: 50%;
		margin-left: -30px;
		z-index: 105;
	}
	.child-view {
	  	position: absolute;
	  	top: 0;
	  	left: 0;
	  	width: 100%;
	  	transition: all .5s cubic-bezier(.55,0,.1,1);
	}
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0
	}
	.slide-left-enter {
	  	opacity: 0;
	  	-webkit-transform: translate(100%, 0);
	  	transform: translate(100%, 0);
	}
	.slide-right-leave-active{
		opacity: 0;
	  	// -webkit-transform: translate(-100%, 0);
	  	// transform: translate(-100%, 0);
	}
	.slide-left-leave-active, .slide-right-enter {
	  	opacity: 0;
	  	-webkit-transform: translate(-100%, 0);
	  	transform: translate(-100%, 0);
	}
	::-webkit-scrollbar {
	    width: 0;
	}
	.allow-right::after {
	    border: solid 2px #c8c8cd;
	    border-bottom-width: 0;
	    border-left-width: 0;
	    content: " ";
	    top: 50%;
	    right: 8px;
	    position: absolute;
	    width: 10px;
	    height: 10px;
	    -webkit-transform: translateY(-50%) rotate(45deg);
	    transform: translateY(-50%) rotate(45deg);
	}

</style>
