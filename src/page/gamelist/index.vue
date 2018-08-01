<template>
    <div class="container">
        <section class="search" ref="search">
            
        </section>

        <section class="list" v-bind:style="{height:scrollHeight}">
            <aside class="letter">
                <div :class="activeLetter == item ? 'active-letter letter-items' : 'letter-items'" v-for="item in letterArr" v-bind:key="item" @click='changeLetter(item)'>
                    {{item == 'hot' ? '热' : item}}
                </div>
            </aside>

            <main class="game">
                <div class="game-items" v-for="item in gameArr" :key="item.id">
                    <img :src="item.pic" alt="" class="game-items-img">
                    <p class="game-items-text">{{item.name}}</p>
                </div>
            </main>
        </section>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data:function() {
            return {
               letter:'hot',
               gamename:'',
               letterArr:[],
               gameArr:[],
               activeLetter:'hot' ,
               scrollHeight:44 ,
            }
        },
        created() {
            this.init()
        },

        mounted() {
            this.setHeight();
        },

        methods:{
            init() {
                const letter = this.letter ;
                this.getGamelist(letter);
            },
            getGamelist(letter) {
                const that = this ;
                axios.get(`api/games/list/index?letter=${letter}`)
                .then((res)=> {
                    const data = res.data.data;
                    this.renderData(data);
                })
            },
            renderData(data) {
                let letterArr = data.firstLetterList ;
                let gameArr = data.gameList;
                this.letterArr = letterArr;
                this.gameArr = gameArr ;

            },
            setHeight() {
                let height = this.$refs.search.clientHeight;
                this.scrollHeight = window.screen.height - height ;
            },
            changeLetter(letter) {
                this.activeLetter = letter ;
                this.getGamelist(letter);
            }
        }
    }
    
</script>

<style scoped lang='less'>
// @import '../../common/var.less' ;
@red:#ff3434;
.container {
    background:#f5f5f5;
    font-size: 14px;
}

.search {
    height:44px;
    line-height: 44px;
    text-align: center;
}

.list {
    display: flex;
    height:calc(100vh - 44px);
    text-align: center;
    background:#fff;
    color:#333;
}

.letter {
    width:54px;
    overflow-x:hidden;
    overflow-y:auto;
}

.letter::-webkit-scrollbar {
    display: none;
}

.letter-items {
    height:40px;
    line-height: 40px;
    background:#f2f3f6;
    text-align: center;
}

.active-letter {
    background:#fff;
    color:@red;
}

.game {
    flex:1;
    overflow-x:hidden;
    overflow-y:auto;
    text-align: left;
}

.game::-webkit-scrollbar {
    display: none;
}

.game-items {
    height:60px;
    line-height: 60px;
    display: flex;
    padding:7px 12px;
    &-img {
        height:44px;
        width:44px;
        border-radius: 6px;
        margin-right:10px;
    }

    &-text {
        font-size: 15px;
        overflow:hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        line-height: 46px;
    }
}

</style>