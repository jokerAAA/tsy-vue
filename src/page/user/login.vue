<template>
    <div class="container">
        <Header title="登陆"></Header>
        <div class="logo">
        <!-- <image class="logo-img" src="/img/login.png" mode="aspectFit"></image> -->
            <img class="logo-img" src="@/image/login.png" alt="">
        </div>

        <div class="info">
            <div class="info-item">
                <input  class="info-item-input" type="tel" placeholder="输入手机号" maxlength="11" v-model='tel' @input="handleTel"/>
            </div>
            <div class="info-item">
                <input  class="info-item-input" type="tel" placeholder="输入验证码" maxlength="6" v-model="code" @input="handleCode"/>
                <span class="info-item-btn" :class="{'activeCode':activeCode}" @click="getCode">{{text}}</span>
            </div>
        </div>

        <div class="btn" :class="{'activeLogin':activeLogin}" @click="login">
            登陆    
        </div>
    </div>
</template>

<script>
import Header from "@/components/common/header";

import axios from "@/utils/axios";
import qs from 'qs';

export default {
	data() {
		return {
			activeCode: false,
			activeLogin: false,
			text: '获取验证码',
			tel: '',
			code: ''
		};
	},
	components: {
		Header
	},
	methods: {
		handleTel(e) {
			const tel = this.tel ;
			if(this.checkTel(tel)) {
				this.activeCode = true;
			}else {
				this.activeCode = false;
			}
			
		},
		checkTel(tel) {
			/* 简单验证电话 */
			if(tel.length == 11) return true;
		},

		handleCode() {
			if(!this.activeCode) return;
			/* 验证验证码 */
			const code = this.code ;
			if(this.checkCode(code)) {
				this.activeLogin = true;
			}else {
				this.activeLogin = false;
			}
		},

		checkCode(code) {
			/* 简单验证验证码 */
			if(this.code.length == 6) return true;
		},

		getCode() {
			const tel = this.tel;
			axios({
				method:'post',
				url:'/pass/api/user/send-login-sms',
				data:qs.stringify({
					mobile:tel
				})
			})
			.then((res) => {
				console.log(res);
			})
		},
		
		login() {
			const tel = this.tel;
			const code = this.code;
			axios({
				method:'post',
				url:'/pass/api/miniprogram/login-by-sms',
				data:qs.stringify({
					mobile: tel,
					smsverifycode: code
				})
			})
			.then((res) => {
				console.log(res);
			})
		}
	}
};
</script>

<style scoped lang="less">
.container {
  background: #fff;
}

.logo {
	height: 120px;
	text-align: center;
	padding-top: 26px;
	&-img {
			width: 60px;
			height: 68px;
	}
}

.info {
	padding: 0 30px;
	
	&-item {
		border-bottom: 2px solid #f2f2f2;
		position: relative;
		height: 50px;
		padding-top: 15px;

		&-input {
			display: flex;
			align-items: center;
			font-size: 14px;
			color: #333;
			height: 20px;
			line-height: 20px;
			width: 60%;

			&::-webkit-input-placeholder{
				color: #999;
  				font-size: 14px;
			}
			&:after {
				border: none;
			}
		}
		&-btn {
			position: absolute;
			right: 0;
			top: 13px;
			width: 67px;
			height: 23px;
			line-height: 23px;
			border: 1px solid #999;
			border-radius: 3px;
			color: #999;
			font-size: 10px;
			text-align: center;
		}
	}
}

.activeCode {
  color: #333;
  border: 1px solid #333;
}

.btn {
  width: 350px;
  height: 44px;
  line-height: 44px;
  border-radius: 10rpx;
  background: rgba(255, 52, 52, 0.5);
  color: #fff;
  text-align: center;
  margin: 30px auto;
}

.activeLogin {
  background: #ff3434;
}
</style>
