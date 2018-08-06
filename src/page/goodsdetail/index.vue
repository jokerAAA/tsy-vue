<template>
    <div class="container">
        <Swiper :data="piclist" v-if="piclist.length > 0"></Swiper>
        <Goodstitle :item="trade"></Goodstitle>
    </div>
</template>

<script>
    import axios from '@/utils/axios';
    import Goodstitle from '../common/goodstitle';
    import Swiper from '@/components/ui/swiper';

    export default {
        data:function() {
            return {
                trade:{}, //商品相关
                piclist:[], //轮播图
            }
        },

        components:{
            Goodstitle,
            Swiper
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
                    that.piclist = data.piclist;
                })
            }
        }
    }
</script>

<style scoped lang='less'>

</style>
