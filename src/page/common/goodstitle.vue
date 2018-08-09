<template>
	<div class="goods" >
		<div class="goods-title">{{item.name}}</div>
		<div class="goods-info">
			<div class="goods-info-left">
				<span class="goods-info-left-price">￥{{item.price}}</span>
				<span class="goods-info-left-sellmode">{{item.sellmode == 1 ? '寄售' : '担保'}}</span>
				<span class="goods-info-left-insurance" v-if="item.insurance_status == 1">{{item.insurance_type > 1 ? '找回包赔' : '可投保'}}</span>
			</div>
			<div class="goods-info-right">
				<span>{{item.update_time == '刚刚' ? '刚刚' : item.update_time+'前'}}更新</span>
			</div>
		</div>
		<div class="goods-area">
			<span class="goods-area-span">{{item.clientname}}</span>
			<span class="goods-area-span">{{item.areaname}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				
			};
		},
		methods: {},
		props: ["item"]
	};
</script>

<style scoped lang='less'>
.goods {
  	background: #fff;
  	padding: 10px 12px 0;
  	color: #999;
  	margin-bottom: 10px;
  	text-align: left;

	&-title {
		color: #333;
		font-size: 16px;
		margin-bottom: 10px;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	&-info {
		margin-bottom: 5px;
		height: 36px;
		line-height: 36px;
		border-bottom: 1px solid #f1f1f1;
		display: flex;

		&-left {
		flex: 1;
		display: flex;

			&-price {
				margin-right: 10px;
				font-size: 16px;
				color: #ff3434;
			}
			&-money {
				margin-right: 5px;
				font-size: 10px;
				color: #999;
				border: 1px solid #999;
				border-radius: 2px;
				line-height: 11px;
				height: 13px;
				margin-top: 12px;
				padding-left: 2px;
				padding-right: 2px;
			}
			&-sellmode {
				margin-right: 5px;
				font-size: 10px;
				border: 1px solid #999;
				border-radius: 4px;
				color: #999;
				line-height: 13px;
				height: 15px;
				margin-top: 12px;
				padding: 0 3px;
			}
			&-insurance {
				font-size: 10px;
				color: #09bb07;
				border: 1px solid #09bb07;
				border-radius: 4px;
				line-height: 13px;
				height: 15px;
				margin-top: 12px;
				padding-left: 3px;
				padding-right: 3px;
			}
		}
		&-right {
			width: 70px;
			font-size: 10px;
			color:#999;
		}
	}
	&-area {
		height: 35px;
		line-height: 35px;
		font-size: 10px;

		&-span {
		line-height: 10px;
		color:#999; 	
			&:nth-of-type(1) {
				padding-right: 10px;
				margin-right: 10px;
				border-right: 1px solid #999;
			}
		}
	}
}
</style>
