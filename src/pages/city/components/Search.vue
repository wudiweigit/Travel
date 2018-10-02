<template>
    <div>
        <div class="search">
            <input v-model="keyworld" class="search-input" type="text" placeholder="输入城市名或拼音"">
        </div>
        <div class="search-content" ref="search" v-show="keyworld">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item of list" :key="item.id"
                @click="handleCityClick( item.name )"
                >
                {{ item.name }}
            </li>
                <!-- <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li> -->
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
        
<script>

// 引入滚动组件
import Bscroll from 'better-scroll'

import { mapState, mapMutations } from 'vuex'    //vuex 提供了个高级API
export default{

    name: 'CitySearch',
    props: {
        cities: Object
    },
    data(){
        return {
            keyworld: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData(){
            return !this.list.length
        }
    },
    watch: {
        keyworld (){
            // 节流函数
            if( this.timer ){
                clearTimeout(this.timer)
            }

            if( !this.keyworld ){
                this.list = []
                return
            }
            this.timer = setTimeout( () => {
                const result = []
                for( let i in this.cities ){
                    this.cities[i].forEach( (value) => {
                        if(value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1){
                            result.push(value)
                        }
                    } )
                }
                this.list = result
            },100 )
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    },
    methods: {
        handleCityClick (city){
            // alert(city)
            // 改变 city 调用dispatch方法 【 异步操作】
            // this.$store.dispatch('changeCity', city)  //派发一个 changeCity的 actions 进行 异步操作
            //  【 同步操作】
            // this.$store.commit('ChangeCity', city)
            this.$router.push('/') //进行跳转
            this.ChangeCity(city)
            this.$router.push('/') //进行跳转
        },
        ...mapMutations([ 'ChangeCity' ]) //我们有个mutations叫做 changeCity 然后我把mutations映射到我这个组件里面一个名字叫做changeCity的方法里

    },
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
        width: 100%
        height: .62rem
        line-height: .62rem
        text-align: center
        vorder-radius: .06rem
        color: #666
        padding: 0 .1rem
        box-sizing: border-box
.search-content
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    z-index: 1
    .search-item
        line-height: .62rem
        padding-left: .2rem
        color: #666
        background: #fff



</style>