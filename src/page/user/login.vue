<template>
    <div class="container">
        <Header title="登陆"></Header>
        <div class="logo">
        <!-- <image class="logo-img" src="/img/login.png" mode="aspectFit"></image> -->
            <img class="logo-img" src="@/image/login.png" alt="">
        </div>

        <div class="info">
            <div class="info-item">
                <input  class="info-item-input" type="tel" placeholder="输入手机号" maxlength="11" v-model='tel'/>
            </div>
            <div class="info-item">
                <input  class="info-item-input" type="tel" placeholder="输入验证码" maxlength="6" v-model="code"/>
                <span class="info-item-btn" :class="{activeCode:activeCode == 0}" @click="getCode">{{text}}</span>
            </div>
        </div>

        <div class="btn" :class="{'activeLogin':activeLogin == 0}" @click="login">
            登陆    
        </div>
    </div>
</template>

<script>
import Header from '@/components/common/header';
export default {
    data() {
      return {
          activeCode:0,
          activeLogin:0,
          text:'获取验证码',
          tel:'',
          code:''
      }
    },
    components:{
        Header
    },
    methods: {
        getCode() {

        },
        login() {

        }
    },
}
</script>

<style scoped lang="less">

.container {
    background:#fff;
}

.logo {
    height:120px;
    text-align: center;
    padding-top:26px;
}

.logo-img {
    width:60px;
    height:68px;

}

.info {
    padding:0 30px;
}

.info-item {
    border-bottom:2px solid #f2f2f2;
    position: relative;
    height:50px; 
    padding-top:15px;
}

.info-item-input {
    display: flex;
    align-items: center;
    font-size: 14px;
    color:#333;
    height:20px;
    line-height: 20px;
    width:60%;
}

.info-item-input::-webkit-input-placeholder {
    color:#999;
    font-size: 14px;
}

.info-item-input::after {
    border:none;
}

.info-item-btn {
    position: absolute;
    right:0;
    top:13px;
    width:67px;
    height:23px;
    line-height: 23px;
    border:1px solid #999;
    border-radius: 3px;
    color:#999;
    font-size: 10px;
    text-align: center;
}

.activeCode {
    color:#333;
    border:1px solid #333;
}

.btn {
    width:350px;
    height:44px;
    line-height: 44px;
    border-radius: 10rpx;
    background:rgba(255,52,52,0.50);
    color:#fff;
    text-align: center;
    margin:30px auto;
}

.activeLogin {
    background:#FF3434;
}
</style>
