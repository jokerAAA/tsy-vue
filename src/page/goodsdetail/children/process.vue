
<template>
    <div class="process" v-show="isShow">
        <div class="process-list">
            <div class="process-list-step">
                <span class="process-list-step-text">挑选商品</span>
                <span class="process-list-step-text">买家挑选适合自己的商品</span>
            </div>
            <div class="process-list-step">
                <span class="process-list-step-text">下单付款</span>
                <span class="process-list-step-text">完成下单并成功付款</span>
            </div>
            <div class="process-list-step">
                <span class="process-list-step-text">客服确认</span>
                <span class="process-list-step-text red">收到手机短信后，在个人中心-订单列表，点击'联系客服'，排队等待客服回复，并与客服确认订单信息</span>
            </div>
            <div class="process-list-step">
                <span class="process-list-step-text">买家验号</span>
                <span class="process-list-step-text">确认订单信息后，客服会联系卖家，将游戏账号、密码发送给买家，等待客服回复后，与客服确认订单信息</span>
            </div>
            <div class="process-list-step">
                <span class="process-list-step-text">解绑换绑</span>
                <span class="process-list-step-text">买家登陆游戏确认游戏账号是否无误后，由客服协助买卖双方进行游戏账号解绑换绑</span>
            </div>
            <div class="process-list-step">
                <span class="process-list-step-text">买家收货</span>
                <span class="process-list-step-text">完成解绑换绑后，客服会将游戏的最新账号资料发送给买家，买家收到后及时确认账号是否有问题</span>
            </div>
            <div class="process-list-step">
                <span class="process-list-step-text">交易完成</span>
                <span class="process-list-step-text">买家确认游戏账号无误后，可以在订单列表操作确认收货，若未操作，系统会在24小时后自动确认收货，淘手游转账给卖家</span>
                <span class="process-list-step-text">普通账号24小时自动确认收货，网易账号48小时，腾讯账号7天</span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data:function() {
            return {

            }
        },

        props:['isShow']
    }
</script>

<style scoped>

.process {
    background: #fff;
    padding: 20px 15px 0;
    animation: slideInLeft 0.1s linear;
    text-align: left;
}

.process-list {
}

.process-list-step {
    position: relative;
    border-left: 1px solid #f74b3d;
    padding-left: 15px;
    padding-bottom: 30px;
}

.process-list-step::after {
    content: "1";
    position: absolute;
    width: 13px;
    height: 13px;
    background: #f74b3d;
    color: #fff;
    border-radius: 50%;
    line-height: 13px;
    text-align: center;
    left: 0;
    top: 0;
    font-size: 10px;
    transform: translateX(-50%);
}

.process-list-step:nth-last-of-type(1) {
    border-left: none;
}

.process-list-step:nth-of-type(2)::after {
    content: "2";
}

.process-list-step:nth-of-type(3)::after {
    content: "3";
}

.process-list-step:nth-of-type(4)::after {
    content: "4";
}

.process-list-step:nth-of-type(5)::after {
    content: "5";
}

.process-list-step:nth-of-type(6)::after {
    content: "6";
}

.process-list-step:nth-of-type(7)::after {
    content: "7";
}

.process-list-step-text {
    line-height: 20px;
    font-size: 12px;
    color: #222;
    display: block;
}

.process-list-step-text:nth-of-type(1) {
    color: #666;
    font-size: 14px;
}
</style>
