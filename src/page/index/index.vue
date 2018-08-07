<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="swiper">
            this is swiper!
        </div>
        <!-- tab -->
        <div class="tab">
            <div class="tab-items" @click="changeTab(0)">
                <span class="tab-items-text" :class="{'active-tab':activeTab == 0}">性价比推荐</span>
            </div>
            <div class="tab-items" @click="changeTab(1)">
                <span class="tab-items-text" :class="{'active-tab':activeTab == 1}">热门游戏</span>
            </div>
        </div>
        <!-- 性价比推荐 -->
        <HotGoods :list="hotGoods" v-show="activeTab == 0"></HotGoods>
        <!-- 热门游戏 -->
        <HotGame :list="hotGame" v-show="activeTab == 1"></HotGame>
    </div>
</template>

<script>
    import HotGame from './children/hotgame';
    import HotGoods from './children/hotgoods';
    import axios from 'axios';
    export default {
        data:function() {
            return {
                swiper:[],
                hotGame:[],
                hotGoods:[],
                activeTab:1
            }
        },

        components:{
            HotGame,
            HotGoods
        },


        created() {
            this.initData()
        },

        methods:{
            initData() {
                axios.get('/api/indexpage/index/index')
                .then((res) => {
                    const data = res.data.data;
                    console.log(data);
                    this.swiper = data.bannerList;
                    this.hotGame = data.hotGameList;
                    this.hotGoods = data.highQualityTradeList;
                })
            },

            changeTab(index) {
                this.activeTab = index ;
            }
        },

        
    }
</script>

<style scoped lang='less'>

.swiper {
    height:125px;
    line-height: 125px;
    background:#fff;
    margin-bottom:10px;
}

.tab {
    background:#fff;
    height:50px;
    line-height: 50px;
    display: flex;
    &-items {
        width:50%;
        text-align: center;
        &-text {
            display: inline-block;
            height:100%;
            font-size: 16px;
        }
    }
}

.active-tab {
    color:#FF4800;
    border-bottom:1px solid #FF4800;
}
</style>
