<template>
    <div class="container">
        <h1>this is index !</h1>
    </div>
</template>

<script>
    import {getIndexData } from '../../service/getData';
    export default {
        data:function() {
            return {
                a:1,
                data:{}
            }
        },

        created() {
            this.initData()
        },

        methods:{

            async initData() {
               let data  = await getIndexData();
            },

            

        }
    }
</script>

<style scoped>

</style>
