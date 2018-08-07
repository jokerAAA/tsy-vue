<template>  
    <div class="hot">
        <router-link class="hot-item" v-for="item in list" :key="item.id" :to="{path:'/goods/list',query:{gameid:item.id,goodsid:1}}">
            <div class="hot-item-img">
                <img :src="item.pic" alt="">
            </div>
            <p class="hot-item-text">{{item.name}}</p>
        </router-link>
        <router-link class="more" to="/game/list">查看更多游戏</router-link>
    </div>
</template>

<script>
    export default {
        data:function() {  
            return {

            }
        },
        props:[
            'list'
        ]
    }
</script>

<style scoped lang='less'>

    .hot {
        display: flex;
        flex-wrap: wrap;
        padding:5px;

        &-item {
            border-radius: 12px;
            width:50%;
            padding:5px;
            margin-bottom:5px;
            background:#f2f3f6;

            &-img {
                height:86px;
                background: #fff;
            }
            &-text {
                height:32px;
                line-height: 32px;
                font-size: 14px;
                color:#333;
            }
        }
    }

    .more {
        height:44px;
        line-height: 44px;
        background:#fff;
        color:#666;
        font-size: 14px;
        width:100%;
    }
</style>
