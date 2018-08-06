<template>
    <div class="info" v-show="isShow">
        <div class="info-item">
            <span class="info-item-left">商品id</span>
            <span class="info-item-right">{{trade.id}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">商品类型</span> 
            <span class="info-item-right">{{goodsname}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">所属游戏</span>
            <span class="info-item-right">{{game.name}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">适用系统</span>
            <span class="info-item-right">{{system}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">客户端</span>
            <span class="info-item-right">{{trade.clientname}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">服务器</span>
            <span class="info-item-right">{{trade.areaname}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">绑定邮箱</span>
            <span class="info-item-right">{{trade.isbindemail == 0 ? "未绑定" : "已绑定"}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">绑定手机</span>
            <span class="info-item-right">{{trade.isbindmobile == 0 ? "未绑定" : "已绑定"}}</span>
        </div>
        <div class="info-item">
            <span class="info-item-left">绑定身份证</span>
            <span class="info-item-right">{{trade.isbindcertificate == 0 ? "未绑定" : "已绑定"}}</span>
        </div>
        <div class="info-tips red">提示: 绑定身份证商品,存在账号被找回的风险,请买家谨慎购买！</div>

        <!-- 可配置项 -->
        <!-- <block wx:for="{{extensionAttr}}" wx:if="{{extensionAttr.length>0}}" wx:key="{{index}}">
            <div class="info-item info-attr">
                <span class="info-item-left">{{item.name}}</span>
                <span class="info-item-right">{{item.val}}</span>
            </div>
        </block> -->

        <!-- 视频 -->
        <!-- <div class="info-item video-title" wx:if="{{trade.videourl}}">
            <span class="info-item-left">视频介绍</span>
        </div>
        <div class="video" wx:if="{{trade.videourl}}">
            <video class="video-player" id="myVideo" src="{{trade.videourl}}" controls></video>
        </div> -->
    </div>
</template>

<script>
    export default {
        data:function() {
            return {

            }
        },

        props:[
            'game',
            'trade',
            'extensionAttr',
            'goodsname',
            'isShow',
            'system'
        ]
    }
</script>

<style scoped>

.info {
    background: #fff;
    padding: 15px 12px;
    animation: slideInRight 0.1s linear;
    text-align: left;
}

.info-item {
    display: flex;
    margin-bottom: 9px;
    line-height: 20px;
}

.info-item-left {
    width: 22%;
    margin-right: 3%;
    color: #666;
    font-size: 14px;
}

.info-item-right {
    flex: 1;
    color: #222;
    font-size: 14px;
}

.info-tips {
    line-height: 17px;
    font-size: 12px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f2f3f6;
    margin-bottom: 15px;
}

/* 商品可配置属性 */
.info-attr {
    margin:0;
}

.info-attr:last-of-type {
    
}

.info-attr-last {
    margin:0;
    padding-bottom:15px;
    border-bottom:1px solid #f2f3f6;
}
</style>

