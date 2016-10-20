<script type="text/javascript">
	export default {
		props: ['title', 'register', 'login'],
		components: {
		}
	}
</script>
<template>
	<div class="page-wrap">
		<mt-header fixed :title="title">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <router-link to="/register"  slot="right" class="search-btn" v-if="register">
		  	<mt-button>注册</mt-button>
	  	  </router-link>
		  <router-link to="/login"  slot="right" class="search-btn" v-if="login">
		  	<mt-button>立即登录</mt-button>
	  	  </router-link>
		</mt-header>
		<slot></slot>
	</div>
</template>
<style lang="sass">
	.page-wrap{
		position: relative;
		width: 100%;
		height: 100%;

	}
	.page-content{
		height: 100%;
	    min-height: 100%;
	    overflow-y: auto;
	    overflow-x: hidden;
	    padding-top: 44px!important;
	}

	.mint-header-button.is-left a{color: #fff;}
	.mint-header-title{font-size: 1.6rem!important;}
	.mint-header{height: 44px!important;}
	.mint-header .mint-button-text{font-weight: 100;}
</style>