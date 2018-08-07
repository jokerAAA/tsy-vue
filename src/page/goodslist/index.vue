<template>
    <section class="container">
        <Header title="商品列表"></Header>
        <!-- 菜单栏 -->
        <div class="menu">
			<div class="menu-item">成品号</div>
			<div class="menu-item" @click="showMask('server')">服务器</div>
			<div class="menu-item" @click="showMask('sort')">{{sortText}}</div>
			<div class="menu-item" @click="showMask('info')">筛选</div>
		</div>
        <!-- 商品列表 -->
		<div class="list">
			<router-link :to="{path:'/goods/detail',query:{id:item.id}}" v-for="item in goodsList"  v-bind:key="item.id">
                <Goodstitle :item='item'></Goodstitle>
			</router-link>
		</div>
        <!-- 服务器菜单 -->
        <div class="mask" v-show="showType == 'server'" @click="closeMask">
            <div class="server" @click="stopPropagation">
                <div class="server-left">
                    <p class="server-left-area" :class="{'active-area':query.clientid == item.clientid}" @click="chooseClient(item.clientid)" v-for="item in clientList" :key="item.clientid">{{item.clientname}}</p>
                </div>

                <div class="server-right">
                    <div class="server-right-search">
                        <!-- <image class="server-right-search-icon" src="/img/search.png" alt="" mode="aspectFit"></image> -->
                        <input class="server-right-search-input" type="text" confirm-type="search" placeholder="请输入区服名称" :value="areaText" maxlength="30"/>
                        <span class="server-right-search-btn" @click="searchArea">搜索</span>
                    </div>
                    <div class="server-right-client">
                        <div class="server-right-client-name" @click="chooseArea(item.id)" v-for="item in areaList" :key="item.id">
                            <span class="server-right-client-name-text" >{{item.name}}</span>
                        </div>
                        <!-- <image class="server-right-client-pic" src="/img/no-server.png" mode="aspectFit" hidden="{{areaList}}"></image> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 排序菜单 -->
        <div class="mask"  @click="closeMask" v-if="showType == 'sort'">
            <div class="sort">
                <div class="sort-item" :class="{'activeSort':query.sort == 0 }" @click="chooseSort(0)">
                    <span class="sort-item-name">默认排序</span>
                </div>
                <div class="sort-item" :class="{'activeSort':query.sort == 2 }" @click="chooseSort(2)">
                    <span class="sort-item-name">价格从高到低</span>
                </div>
                <div class="sort-item" :class="{'activeSort':query.sort == 1 }" @click="chooseSort(1)">
                    <span class="sort-item-name">价格从低到高</span>
                </div>
                <div class="sort-item" :class="{'activeSort':query.sort == 9 }" @click="chooseSort(9)">
                    <span class="sort-item-name">发布时间倒序</span>
                </div>
                <div class="sort-item" :class="{'activeSort':query.sort == 10 }" @click="chooseSort(10)">
                    <span class="sort-item-name">发布时间正序</span>
                </div>
            </div>
        </div>
        <!-- 筛选项 -->
    <div class="mask" v-show="showType == 'info'" @click="closeMask" id="info">
        <div class="info" :class="{slide:showType == 'info'}" @click.stop="stopPropagation">
            <div class="info-top">
                <div class="info-top-tip">
                    绑定身份证商品，存在账号被找回风险，请玩家谨慎购买！
                </div>
                <div class="info-top-title">
                    身份证
                </div>
                <div class="info-top-content">
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindcertificate == 2}" data-key="isbindcertificate" data-value="2" @click="chooseInfo('isbindcertificate',2)">不限</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindcertificate == 1}" data-key="isbindcertificate" data-value="1" @click="chooseInfo('isbindcertificate',1)">已绑定</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindcertificate == 0}" data-key="isbindcertificate" data-value="0" @click="chooseInfo('isbindcertificate',0)">未绑定</span>
                    </div>
                </div>
                <div class="info-top-title">
                    手机
                </div>
                <div class="info-top-content">
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindmobile == 2}" data-key="isbindmobile" data-value="2" @click="chooseInfo('isbindmobile',2)">不限</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindmobile == 1}" data-key="isbindmobile" data-value="1" @click="chooseInfo('isbindmobile',1)">已绑定</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindmobile == 0}" data-key="isbindmobile" data-value="0" @click="chooseInfo('isbindmobile',0)">未绑定</span>
                    </div>
                </div>
                <div class="info-top-title">
                    邮箱
                </div>
                <div class="info-top-content">
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindemail == 2}" data-key="isbindemail" data-value="2" @click="chooseInfo('isbindemail',2)">不限</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindemail == 1}" data-key="isbindemail" data-value="1" @click="chooseInfo('isbindemail',1)">已绑定</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.isbindemail == 0}" data-key="isbindemail" data-value="0" @click="chooseInfo('isbindemail',0)">未绑定</span>
                    </div>
                </div>
                <div class="info-top-title">
                    价格
                </div>
                <div class="info-top-content">
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 0}" data-key="price" data-value="0" @click="chooseInfo('price',0)">不限</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 1}" data-key="price" data-value="1" @click="chooseInfo('price',1)">0-50</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 2}" data-key="price" data-value="2" @click="chooseInfo('price',2)">50-100</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 3}" data-key="price" data-value="3" @click="chooseInfo('price',3)">100-500</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 4}" data-key="price" data-value="4" @click="chooseInfo('price',4)">500-1000</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 5}" data-key="price" data-value="5" @click="chooseInfo('price',5)">1000-2000</span>
                    </div>
                    <div class="info-top-content-items">
                        <span class="info-top-content-items-text" :class="{'active-info':query.price == 6}" data-key="price" data-value="6" @click="chooseInfo('price',6)">2000以上</span>
                    </div>
                </div>
            </div>
            <div class="info-bottom">
                <div class="info-bottom-button" @click="resetInfo" id="reset">
                    重置选项
                </div>
                <div class="info-bottom-button" @click="confirmInfo">
                    确定
                </div>
            </div>
        </div>
    </div>

    </section>

</template>

<script>
import Header from '@/components/common/header';
import Goodstitle from '../common/goodstitle';

import axios from "@/utils/axios";

export default {
  data: function() {
    return {
      query: {
        gameid: "",
		goodsid: 1 ,
        page : 1 ,
        sort: 0 ,
        clientid:'0',
        areaid:'0',
        isbindmobile:2,
        isbindcertificate:2,
        isbindemail:2,
        price:0
      },
      sortText:'排序',
      showType: '' ,
      goodsList: [] ,
      clientList : [] ,
      areaList : [] ,
      areaText:''
    };
  },

  components:{
      Header,
      Goodstitle
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
      const that = this ;
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
          that.clientList = data.gameClientList;
        });
    },

    getGoodslist() {
      const query = this.query;
      const that = this;
      this.showType = '';
      axios
        .get("/api/trades/list/indexpager", {
          params: query
        })
        .then(function(res) {
          const data = res.data.data;
          that.goodsList = data;
        });
    },

    /* 选择客户端 */
    chooseClient(clientid) {
        this.query.clientid = clientid ;
        this.getArealist(clientid);
    },

    /* 获取区服 */
    getArealist(clientid) {
        const that = this;
        axios.get('/api/trades/list/getarealist',{
            params:{
                gmid: that.query.gameid,
				goodsid: that.query.goodsid,
				cntid: clientid
            }
        })
        .then(function(res) {
            let data = res.data.data;
            that.areaList = data ;
        })
    },

    /* 选择区服 */
    chooseArea(areaid) {
        this.query.areaid = areaid ;
        this.showType = '';
        this.getGoodslist();
    },

    /* 匹配输入 */
    inputArea() {

    },

    /* 搜索输入 */
    searchArea() {
        
    },

    /* 选择排序 */
    chooseSort(sortid) {
        let text = '';
        if (sortid == '1' || sortid == '2') {
            text = '价格'
        }else if (sortid == '9' || sortid == '10') {
            text = '时间'
        }else {
            text = '默认'
        }
        this.query.sort = sortid ;
        this.sortText = text ;
        this.getGoodslist();
    },

    /* 关闭mask */
    closeMask() {
        this.showType = '';
    },

    showMask(key) {
        if (key == this.showType) {
			this.showType = '';
		} else {
			this.showType = key ;
		}
    },

    stopPropagation(e) {
        e.stopPropagation();
    },

    /*选择筛选项  */
    chooseInfo(key,value) {
        this.query[key] = value ;
    },
    /* 重置 */
    resetInfo() {
        this.query.isbindmobile = 2;
        this.query.isbindcertificate = 2;
        this.query.isbindemail = 2 ;
        this.query.price = 0;
    },

    /* 确认筛选项 */
    confirmInfo() {
        this.getGoodslist();
    }
  }
};
</script>

<style scoped lang='less'>

.container {
    text-align: left;
    padding-top:85px;
}

.mask {
    top:85px;
    height:calc(100% - 85px);
}

/* 菜单栏 */
.menu {
	height:40px;
	line-height: 40px;
	border-bottom: 1px solid #f2f3f6;
    display: flex;
    position: fixed;
    top:45px;
    width:100%;
    background:#fff;
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

/* 服务器下拉 */
.server {
    background:#fff;
    animation:slideDown 0.2s linear;
    display: flex;
    height:360px;
}

.server-left {
    width:120px;
    
}

.server-left-area {
    display: block;
    background:#f7f7f7;
    text-indent: 18px;    
    height:36px;
    line-height: 36px;
    border-bottom:1rpx solid #fff;
    color:#666;
    font-size: 13px;
}

.active-area {
    background:#fff;
}

.server-right {
    flex:1;
    padding:10px 12px 0;
    color:#666;
}

.server-right-search {
    height:32px;
    border:1px solid #f2f3f6;
    line-height: 30px;
    margin-bottom:10px;
    border-radius:3px;
    display: flex;
    position: relative;
}

.server-right-search-icon {
    position: absolute;
    top:10px;
    left:6px;
    width:10px;
    height:10px;
    vertical-align: middle;
}

.server-right-search-input {
    flex:1;
    font-size: 12px;
    padding-left:23px;
    vertical-align: middle;
    height:100%;
}

.server-right-search-btn {
    width:60px;
    line-height: 30px;
    text-align: center;
    border-radius: 0 3px 3px 0;
    background:#f7f7f7;
    font-size: 12px;
}

.server-right-client {
    height:310px;
    position: relative;
}

.server-right-client-name {
    height:36px;
    line-height: 36px;
    display: flex;
}

.server-right-client-name-text {
    flex:1;
    font-size: 13px;
}

.server-right-client-pic {
    position: absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    width:210px;
    height:155px;
}

/* 排序下拉 */
.sort {
    background:#fff;
    animation: slideDown 0.2s linear; 
}


.sort-item {
    height:40px;
    line-height: 40px;
    padding-left: 30px;
}

.activeSort {
    color:red;
}

.sort-item-name {
    font-size: 14px;
}

/* 筛选框 */
/* 筛选下拉 */
.info {
    width:90%;
    height:100%;
    background:#fff;
    animation:slideLeft 0.2s linear;
    position: absolute;
    top:0;
    right:0;    
}

.info-top {
    color:#666;
    padding:10px 20px;
    font-size: 12px;
    height:calc(100% - 70px);
}

.info-top-tip {
    margin-bottom:12px;
}

.info-top-title {
    font-size: 15px;
    height:20px;
    line-height: 20px;
}   

.info-top-content {
    margin:12px 12px 0 0;
    display: flex;
    flex-wrap: wrap;
}

.info-top-content-items {
    width:33.33%;
    text-align: center;
    margin-bottom:12px;
    display: flex;
}

.info-top-content-items-text {
    width:80px;
    height:30px;
    line-height: 30px;
    border:1px solid #666;
    border-radius: 3px;
}

.active-info {
    border-color:#F74B3D;
    color:#F74B3D;
}

.info-bottom {
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height:45px;
    line-height: 45px;
    display: flex;
    border-top:1rpx solid #f2f3f6;
}

.info-bottom-button {
    flex:1;
    font-size: 14px;
    text-align: center;
}

.info-bottom-button:nth-of-type(1) {
    background:#fff;
    color:#333;
    
}

.info-bottom-button:nth-of-type(2) {
    background: #F74B3D;
    color:#fff;

}
</style>
