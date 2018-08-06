<template>
    <div class="container">
        <Goodstitle :item="trade"></Goodstitle>
    </div>
</template>

<script>
    import axios from '@/utils/axios';
    import Goodstitle from '../common/goodstitle'

    export default {
        data:function() {
            return {
                trade:{}, //商品相关
            }
        },

        components:{
            Goodstitle
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
                const that = this ;
                axios.get('/api/trades/list/info',{
                    params:{
                        id:id
                    }
                })
                .then(function(res) {
                    let data = res.data.data;
                    console.log(data);
                    that.trade = data.trade;
                })
            }
        }
    }
</script>

<style scoped lang='less'>

</style>
