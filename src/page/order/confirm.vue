<template>
	<div class="container">
		<!-- 商品标题 -->
		<div class="title">
			<div class="title-text">
				{{trades.name}}
			</div>
			<div class="title-price red">
				￥{{trades.price}}
			</div>
		</div>

		<div class="text">
			订单信息
		</div>

		<!-- 订单信息 -->
		<div class="info">
			<div class="info-item">
				<div class="left">
					交易安全险
				</div>
				<div class="right info-item-icon arrow-right" bindtap="toggleInsurance" v-if="trades.insurance_type == 0">
					请选择
				</div>
				<div class="right info-item-icon" bindtap="toggleNotice" v-else>
					卖家已投保
				</div>
			</div>
			<div class="info-item">
				<div class="left">
					联系手机
				</div>
				<input class="right info-item-input" type="number" maxlength="11" placeholder='请输入' bindinput="handleInput" data-name="buyermobile" value="{{formData.buyermobile}}" />
			</div>
			<div class="info-item">
				<div class="left">
					联系QQ
				</div>
				<input class="right info-item-input" type="number" maxlength="10" placeholder='请输入' bindinput="handleInput" data-name="buyerqq" value="{{formData.buyerqq}}" />
			</div>
		</div>

		<!-- 商品金额 -->
		<div class="price">
			<div class="price-item">
				<div class="left">
					商品金额
				</div>
				<div class="right red">
					￥{{price}}
				</div>
			</div>
			<div class="price-item">
				<div class="left">
					客服服务费
				</div>
				<div class="right red">
					￥{{serviceMoney}}
				</div>
			</div>
		</div>

		<div class="tips">
			近期有不法诈骗团伙仿冒淘手游客服电话，以账号道具变动、安全保证金等理由，向用户索取钱财及账号密码，请大家注意!
		</div>

		<div class="btn">
			<div class="btn-price">
				实付款:
				<span class="red">￥{{price + insuranceMoney + serviceMoney}}</span>
			</div>
			<div class="btn-submit" bindtap="submitOrder">
				提交订单
			</div>
		</div>
		<!-- 保险选择 -->
		<!-- <div class="mask" hidden="{{!isShowInsurance}}" bindtap="toggleInsurance">
			<div class="insurance">
				<div class="insurance-title">请选择保险类别</div>
				<div class="insurance-items">
					<div class="insurance-item {{activeInsurance == item.day ? 'active-insurance' : ''}}" data-day="{{item.day}}" bindtap="chooseInsurance" data-rate="{{item.rate}}" wx:for="{{insuranceList.insurance_rate_arr}}" wx:key="{{item.day}}">
						{{item.day}}天保险
					</div>
					<div class="insurance-item" data-day="0" bindtap="chooseInsurance" data-rate="0">
						不购买保险
					</div>
				</div>
			</div>
		</div> -->
		<!-- 保险tips -->
		<!-- <div class="mask" wx:if="{{isShowNotice}}" bindtap="toggleNotice">
			<div class="notice mask-dialog" catchtap="stopPropgation">
				<div class="notice-title">
					卖家已投保账号安全险，买家不用花一分钱。
				</div>
				<div class="notice-info">
					在保险期内您的账号出现找回、封号等情况，最高可赔付您所购买的订单金额。
				</div>
				<div class="notice-btns">
					<div class="notice-btn" bindtap="toggleNotice">关闭</div>
				</div>
			</div>
		</div>  -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			trades:{},
			insuranceMoney:0,
			price:0,
			formData:{
				buyermobile: '',
				buyerqq: '',
				service: 0,
				amount: 1,
				goodsid: 1,
				tradeid: '',
				baoxian_type:''
			},

	  }
	},
	components: {

	},
	methods: {

	},
}
</script>

<style scoped lang="less">
.left {
    width:100px;
    color:#333;
    font-size: 15px;
}

.right {
    flex:1;
    text-align: right;
    height:100%;
    font-size: 14px;
}

.arrow-right {
    position: relative;
    padding-right:17px;
}

.arrow-right::after {
    position: absolute;
    content:'';
    width:7px;
    height:14px;
    top:19px;
    right:0;
    background:url('@/image/arrow-right') no-repeat;
    background-size: contain;
}

/* 商品标题 */
.title {
    background:#fff;
    padding:8px 12px;
}

.title-text {
    font-size: 15px;
    color:#333;
    line-height: 22px;
    height:44px;
    margin-bottom:10px;
    /* display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; */
}

.title-price {
    font-size: 17px;
}

.text {
    padding-left: 12px;
    font-size: 12px;
    color:#999;
    height:35px;
    line-height: 35px;
}

/* 必填信息 */
.info {
    padding-left: 12px;
    margin-bottom:10px;
    background:#fff;
}

.info-item {
    display: flex;
    height:52px;
    line-height: 51px;
    border-bottom: 1px solid #f2f3f6;
    padding-right: 12px;
}

.info-item-input {
    color:#333;
    font-size: 14px;
}

.info-item-input::-webkit-input-placeholder {
    color:#999;
}

/* 价格 */
.price {
    background:#fff;
    padding:0 12px;
}

.price-item {
    display: flex;
    height:40px;
    line-height: 40px;
}

.tips {
    color:#999;
    font-size: 12px;
    line-height: 17px;
    padding:10px 12px ;
}

.btn {
    background:#fff;
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    line-height: 50px;
    display: flex;
}

.btn-price {
    flex:1;
    text-align: right;
    font-size: 14px;
    color:#333;
    padding-right:10px;
}

.btn-submit {
    width:125px;
    text-align: center;
    background:#FF3434;
    color:#fff;
    font-size: 16px;
}

/* 保险选择 */
.insurance {
    background:#fff;
    text-align: center;
    color:#333;
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    animation:bounceInUp .2s linear;
}

.insurance-title {
    height:44px;
    line-height: 44px;
    font-size: 18px;
}

.insurance-items {
    font-size: 15px;
}

.insurance-item {
    height:50px;
    line-height: 50px;
    border-top:1rpx solid #f2f3f6;
}

.active-insurance {
    color:#FF4800;
}

/* 卖家险提示 */
.notice {
    background:#fff;
    padding-top: 20px;
    border-radius: 7px;
    text-align: center;
    animation:fadeIn .2s linear;
}   

.notice-title {
    padding: 0 25px;
    font-size: 18px;
    line-height: 25px;
    color: #333;
    margin-bottom: 10px;
}

.notice-info {
    color: #999;
    font-size: 14px;
    line-height: 20px;
    padding: 0 25px 20px;
}

.notice-btns {
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #F2F2F2;
    display: flex;
}

.notice-btn {
    color: #FF3434;
    flex:1;
}

</style>


