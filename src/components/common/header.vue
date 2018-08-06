<template>
    <div>
        <div class="header">
            <div class="header-left icon">

            </div>
            <div class="header-center">
                {{title}}
            </div>
            <div class="header-right icon">

            </div>
        </div>
        <div style="height:45px;"></div>
    </div>
</template>

<script>
    export default {
        data:function() {
            return {

            }
        },

        methods:{
            goBack() {

            },
            goHome() {

            }
        },

        props:[
            'title'
        ]
    }
</script>

<style lang="less" scoped>
    .header {
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:45px;
        line-height: 45px;
        display: flex;
        padding:0 12px;
        background:#f74b3d;
        color:#fff;

        .icon {
            width:20px;
            height:18px;
            margin-top: 14px;
        }

        &-left {
            background:url('../../image/back.png') no-repeat;
            background-size: contain;
        }

        &-center {
            flex:1;  
            font-size: 18px;
            text-align: center;
        }
        &-right {
            background:url('../../image/home.png') no-repeat;
            background-size: contain;
        }
    }
</style>
