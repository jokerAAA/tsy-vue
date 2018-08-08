
<template>
    <div class="rec">
        <div class="rec-title">
            相关推荐
        </div>
        <router-link v-for="item in hotTrades" :key="item.id" :to="{path:'/goods/detail',query:{id:item.id}}">
            <div class="rec-list" >
            <div class="rec-list-item">
                <div class="rec-list-item-title">
                    {{item.name}}
                </div>
                <div class="rec-list-item-price red">
                    ￥{{item.price}}
                </div>
            </div>
        </div>
        </router-link>
    </div>

</template>

<script>
    export default {
        data:function() {
            return {

            }
        },

        props:[
            'hotTrades'
        ]
    }
</script>

<style scoped lang='less'>
    /* 推荐列表 */

.rec {
    background: #fff;
    margin-top: 20rpx;
    color: #333;
    font-size: 14px;
}

.rec-title {
    height: 72rpx;
    line-height: 72rpx;
    padding-left: 24rpx;
    font-size: 16px;
}

.rec-list {
}

.rec-list-item {
    padding: 22rpx 24rpx;
    border-bottom: 1rpx solid #f2f3f6;
    display: flex;
    height:90rpx;
}

.rec-lsit-item:nth-last-of-type(1) {
    border: none;
}

.rec-list-item-title {
    flex: 1;
    margin-right: 12rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.rec-list-item-price {
    width: 160rpx;
}
</style>
