
<template>
    <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in data" :key="index">
                <img :src="item.picurl" alt="" class="swiper-img">
            </mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default {
        data:function() {
            return {}
        },

        props:['data'],

    }
</script>

<style scoped lang='less'>
.swiper {

    &-img {
        width:100%;
        height:auto;
    }
}
</style>
