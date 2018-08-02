<template>
    <section class="container">
        <div class="menu">
			<div class="menu-item">成品号</div>
			<div class="menu-item">服务器</div>
			<div class="menu-item">排序</div>
			<div class="menu-item">筛选</div>
		</div>
		<div class="list">
			<router-link :to="{path:'/goods/detail',query:{id:item.id}}" v-for="item in goodsList"  v-bind:key="item.id">
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
			</router-link>
		</div>
    </section>

</template>

<script>
import axios from "@/utils/axios";

export default {
  data: function() {
    return {
      query: {
        gameid: "",
		goodsid: 1 ,
		page : 1 ,
      },
      goodsList: []
    };
  },

  created() {
    this.query.gameid = this.$route.query.gameid;
    this.query.goodsid = this.$route.query.goodsid || 1;
    this.init();
  },

  mounted() {},

  methods: {
    init() {
      this.getData();
      this.getGoodslist();
    },

    getData() {
      const goodsid = this.query.goodsid;
	  const gameid = this.query.gameid;
      axios
        .get("/api/trades/list/index", {
          params: {
            gameid: gameid,
            goodsid: goodsid
          }
        })
        .then(function(res) {
          const data = res.data.data;
          console.log(data);
        });
    },

    getGoodslist() {
      const query = this.query;
      const that = this;
      axios
        .get("/api/trades/list/indexpager", {
          params: query
        })
        .then(function(res) {
          const data = res.data.data;
          that.goodsList = data;
        });
    }
  }
};
</script>

<style scoped lang='less'>

/* 菜单栏 */
.menu {
	height:40px;
	line-height: 40px;
	border-bottom: 1px solid #f2f3f6;
	display: flex;
}

.menu-item {
	width:25%;
	font-size: 14px;
	color:#333;
	text-align: center;
}

/* 商品列表 */
.list {
	background:#f5f5f5;
}

.goods {
    background: #fff;
    padding: 10px 12px 0;
    color: #999;
	margin-bottom: 10px;
	text-align: left;
}

.goods-title {
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.goods-info {
    margin-bottom: 5px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
}

.goods-info-left {
    flex: 1;
    display: flex;
}

.goods-info-left-price {
    margin-right: 10px;
    font-size: 16px;
    color: #FF3434;
}

.goods-info-left-money {
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

.goods-info-left-sellmode {
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

.goods-info-left-insurance {
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

.goods-info-right {
    width: 70px;
    font-size: 10px;
}

.goods-area {
    height: 35px;
    line-height: 35px;
    font-size: 10px;
}

.goods-area-text {
    line-height: 10px;
}

.goods-area-text:nth-of-type(1) {
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid #999;
}

.goods-area-text:nth-of-type(2) {}
</style>
