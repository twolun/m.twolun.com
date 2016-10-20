<script type="text/javascript">

	export default {
		data: function(){
			return {
				isShowPass: false,
				userName: '',
				userPass: '',
			}
		},
		methods: {
			hadnleLogin: function(){
				console.log(11111111)
			}
		}
	}
</script>

<template>
    <page-view title="登录" register="true">
        <div class="page-content">
            <div class="form-wrap">
            	<p>
                <mt-field placeholder="手机号/邮箱/用户名" v-model="userName"></mt-field>
            		
            	</p>
            	<p class="pass-wrap">	            		
					<mt-field placeholder="密码" type="text" v-model="userPass" v-show="isShowPass"></mt-field>
					<mt-field placeholder="密码" type="password" v-model="userPass" v-show="!isShowPass"></mt-field>
					<mt-switch v-model="isShowPass" class="pass-control"></mt-switch>
            	</p>           	
            </div>
            <div @click="hadnleLogin">	            	
            	<mt-button type="primary" size="large" class="login-btn">登录</mt-button>
            </div>
        </div>
    </page-view>        

</template>
<style lang="sass">
	@import './login.scss';
</style>