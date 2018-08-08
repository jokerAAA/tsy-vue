<template>
    <div class="container">
        <Header title="商品详情"></Header>
        <!-- 轮播图 -->
        <Swiper :data="piclist" v-if="piclist.length > 0"></Swiper>
        <!-- 商品标题 -->
        <Goodstitle :item="trade"></Goodstitle>
        <!-- tab栏 -->
        <div class="tab">
            <div class="tab-item" :class="{'active-tab':activeTab == 0}" @click="changeTab(0)">
                商品信息
            </div>
            <div class="tab-item" :class="{'active-tab':activeTab == 1}" @click="changeTab(1)">
                购买流程
            </div>
        </div>
        <!-- 商品信息 -->
        <Info :game="game" :trade="trade" :goodsname="goodsname" :extensionAttr="extensionAttr" :isShow=" activeTab == 0 "></Info>
        <!-- 购买流程 -->
        <Process :isShow=" activeTab ==  1 "></Process>
        <!-- 推荐商品 -->
        <Rec :hotTrades="hotTrades" v-if="hotTrades.length > 0"></Rec>

        <!-- 底部提示 -->
        <div class="bottom">
            <div class="bottom-tips">
                已经到底了
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/common/header'
    import Goodstitle from '../common/goodstitle';
    import Swiper from '@/components/ui/swiper';
    import Process from './children/process';
    import Info from './children/info';
    import Rec from './children/rec'
    import axios from '@/utils/axios';

    export default {
        data:function() {
            return {
                goodsname:'',
                trade:{}, //商品相关
                game:{}, //商品相关
                extensionAttr:[], //配置属性
                piclist:[], //轮播图
                activeTab:0,
                system:'', //操作系统
                hotTrades:[], //推荐商品
            }
        },

        components:{
            Header,
            Goodstitle,
            Swiper,
            Process,
            Info,
            Rec
        },

        created() {
            this.init();
        },

        methods:{
            init() {
                const id = this.$route.query.id;
                console.log(id);
                this.getData(id);
            },

            getData(id) {
                let that = this ;
                axios.get('/api/trades/list/info',{
                    params:{
                        id:id
                    }
                })
                .then(function(res) {
                    let data = res.data.data;
                    console.log(data);
                    that.trade = data.trade;
                    that.game = data.game;
                    that.piclist = data.piclist;
                    that.extensionAttr = data.extensionAttr;
                    that.gamename = data.gamename;
                    that.system = data.mobilesystem;
                    that.hotTrades = data.hotTrades; 
                })
            },

            changeTab(index) {
                this.activeTab = index ;
            }
        }
    }
</script>

<style scoped lang='less'>

/* tab栏 */
.tab {
    display: flex;
    height: 40px;
    border-bottom: 1px solid #f2f3f6;
    background: #fff;
    position: relative;
}

.tab::before {
    content:"";
    position: absolute;
    left:187px;
    top:10px;
    width:2px;
    height:20px;
    background:#f2f3f6;  
}

.tab-item {
    font-size: 14px;
    color: #333;
    text-align: center;
    width: 80px;
    margin: 0 auto;
    line-height: 40px;
    position: relative;
}

.active-tab {
    color: #ff3434;
    border-bottom: 1px solid #ff3434;
}

/* 底部提示 */
.bottom {
    height: 44px;
    padding-top: 15px;

    &-tips {
        width: 130px;
        margin: 0 auto;
        height: 14px;
        color: #999;
        position: relative;
        font-size: 12px;
        text-align: center;

        &::before,&::after {
            content: "";
            width: 30px;
            height: 2px;
            position: absolute;
            top: 6px;
            background: #999;
        }
        &::before {
            left: 0;
        }
        &::after {
            right: 0;
        }
    }
}
</style>
