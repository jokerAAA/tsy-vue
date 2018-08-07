<template>
    <div class="container">
        <!-- 轮播图 -->
        <div class="swiper">
            this is swiper!
        </div>
        <!-- tab -->
        <div class="tab">
            <div class="tab-items">
                <span class="tab-items-text">性价比推荐</span>
            </div>
            <div class="tab-items">
                <span class="tab-items-text">热门游戏</span>
            </div>
        </div>
        <!-- 性价比推荐 -->

        <!-- 热门游戏 -->
        <HotGame :list="hotGame"></HotGame>
    </div>
</template>

<script>
    import HotGame from './children/hotgame';
    import axios from 'axios';
    export default {
        data:function() {
            return {
                swiper:[],
                hotGame:[],
                hotGoods:[]
            }
        },

        components:{
            HotGame
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
            }

            

        }
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
</style>
