<template>
    <div>
        <div class="search">
            <input v-model="keyworld" class="search-input" type="text" placeholder="输入城市名或拼音"">
        </div>
        <div class="search-content" ref="search" v-show="keyworld">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{ item.name }}</li>
                <!-- <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li> -->
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>
        
<script>

// 引入滚动组件
import Bscroll from 'better-scroll'
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