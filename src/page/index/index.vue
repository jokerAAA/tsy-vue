<template>
    <div class="container">
        <h1>this is index !</h1>
    </div>
</template>

<script>
    // import {getIndexData } from '../../service/getData';
    // import axios from "@/uitls/axios";
    import axios from 'axios';
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

            // async initData() {
            //    let data  = await getIndexData();
            // },
            initData() {
                axios.get('/api/indexpage/index/index')
                .then(function(res) {
                    console.log(res);
                })
            }

            

        }
    }
</script>

<style scoped>

</style>
