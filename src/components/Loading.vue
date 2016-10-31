<script type="text/javascript">
	export default {

	}
</script>
<template>
	<div class="load-wrap load-transition"> 
		<div class="loading-main"> 
			<div class="loading-icon"></div> 
			<div class="loading-bottom"></div> 
		</div> 
	</div>
</template>
<style lang="sass">
	.load-wrap {
	    position: fixed;
	    top: 50%;
	    left: 50%;
	    will-change: transform;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	    text-align: center;
	}
	.loading-main {
	    position: relative;
	    display: inline-block;
	    margin-top: 1em;
	    width: 60px;
	    height: 100px;
	    font-size: .666667rem;
	}
	.loading-bottom, .loading-icon {
	    position: absolute;
	    width: 60px;
	    height: 60px;
	    background-size: 100% auto;
	    -webkit-transform-origin: 50% 50%;
	    transform-origin: 50% 50%;
	}
	.loading-icon {
	    z-index: 5;
	    background: url('../assets/images/using/loading.png') no-repeat;
	    background-size: 100% auto;
	    -webkit-animation: loading-change 3.6s infinite steps(6),loading-jump .3s ease-in-out infinite alternate;
	    animation: loading-change 3.6s infinite steps(6),loading-jump .3s ease-in-out infinite alternate;
	}
	.loading-bottom {
	    bottom: -2rem;
	    background: url('../assets/images/using/loading-bottom.png') no-repeat;
	    background-size: 100% auto;
	    -webkit-animation: loading-scale .3s ease-in-out infinite alternate;
	    animation: loading-scale .3s ease-in-out infinite alternate;
	}
	@-webkit-keyframes loading-change{
		to{background-position:0 -360px}
	}
	@keyframes loading-change{
		to{background-position:0 -360px}
	}
	@-webkit-keyframes loading-jump{
		to{
			-webkit-transform:translateY(-1.2em);
			transform:translateY(-1.2em)
		}
	}
	@keyframes loading-jump{
		to{
			-webkit-transform:translateY(-1.2em);
			transform:translateY(-1.2em)
		}
	}
	@-webkit-keyframes loading-scale{
		to{
			-webkit-transform:scale(.3);
			transform:scale(.3)
		}
	}
	@keyframes loading-scale{
		to{
			-webkit-transform:scale(.3);
			transform:scale(.3)
		}
	}
</style>