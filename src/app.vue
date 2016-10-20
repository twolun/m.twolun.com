<script type="text/javascript">
	import FastClick from 'fastclick';
	import './assets/images/using/loading1.png';	
	export default {
		data () {
		    return {
		      transitionName: 'slide-left'
		    }
		},
		  // dynamically set transition based on route change
		watch: {
		    '$route' (to, from) {
		      	const toDepth = to.path.split('/').length
		      	const fromDepth = from.path.split('/').length
		      	this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		    }
		},

		mounted: function(){
			FastClick.attach(document.body);
		}
	}
</script>
<template>
	<div class="page">
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>	
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
