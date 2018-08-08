
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
    margin-top: 10px;
    color: #333;
    font-size: 14px;

    &-title {
        height: 36px;
        line-height: 36px;
        padding-left: 12px;
        font-size: 16px;
    }   
    &-list {

        &-item {
            padding: 11px 12px;
            border-bottom: 1px solid #f2f3f6;
            display: flex;
            height:45px;
            &:nth-last-of-type(1) {
                border: none;
            }
            &-title {
                flex: 1;
                margin-right: 6px;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
                white-space: nowrap;
            }
            &-price {
                width: 80px;
            }
        }

    }
}
</style>
