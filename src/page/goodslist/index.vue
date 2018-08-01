<template>
    <section class="container">
        <h1>this is goodslist</h1>
    </section>

</template>

<script>
    import axios from '@/utils/axios';

    export default {
        data:function() {
            return {
                query:{
                    gameid:'',
                    goodsid:1
                }
            }
        },

        created() {
            this.query.gameid = this.$route.query.gameid;
            this.query.goodsid = this.$route.query.goodsid || 1 ;
            this.init();
        },

        mounted() {

        },

        methods: {
            init() {
                this.getData();
                this.getGoodslist();
            },

            getData() {
                const goodsid = this.query.goodsid;
                const gameid = this.query.gameid;
                axios.get('/api/trades/list/index',{
                    params:{
                        gameid:gameid,
                        goodsid:goodsid
                    }
                })
                .then(function(res) {
                    const data = res.data.data;
                    console.log(data);
                })
            },

            getGoodslist() {
                const query = this.query ;
                axios.get('/api/trades/list/indexpager',{
                    params:query
                })
                .then(function(res) {
                    const data = res.data.data;
                })
            }
        }
    }
</script>

<style scoped lang='less'>

</style>
