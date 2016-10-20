<script type="text/javascript">

	export default {
		data: function(){
			return {
				isShowPass: false,
				userName: '',
				userPass: '',
				codePass: '',
				codeBtnDisabled: false,
				regBtnDisabled: true 
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
    <page-view title="注册">
        <div class="page-content form-register-wrap">
            <div class="form-wrap">
            	<p>
                	<mt-field placeholder="手机号/邮箱/用户名" type="text" v-model="userName"></mt-field>
            		
            	</p>
            	<p class="register-group">
            		<mt-field placeholder="请输入验证码" type="text" v-model="codePass">
            			<mt-button class="code-btn" :disabled="codeBtnDisabled" size="small" type="primary">发送验证码</mt-button>
            		</mt-field>
            	</p>
            	<p class="pass-wrap">	            		
					<mt-field placeholder="请设置账户密码" type="text" v-model="userPass" v-show="isShowPass"></mt-field>
					<mt-field placeholder="请设置账户密码" type="password" v-model="userPass" v-show="!isShowPass"></mt-field>
					<mt-switch v-model="isShowPass" class="pass-control"></mt-switch>
            	</p>           	
            </div>
            <div @click="hadnleLogin">	            	
            	<mt-button type="primary" size="large" class="login-btn" :disabled="regBtnDisabled">注册</mt-button>
            </div>
            <router-link to="/agreement" class="agreement">
            	《使用条款和协议》
            </router-link>
        </div>
    </page-view>        

</template>
<style lang="sass">
	@import '../Login/login.scss';
</style>