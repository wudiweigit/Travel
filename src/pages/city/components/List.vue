<template>

    <!-- 帮助我们获取 DOM 【 ref 】 -->
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <!-- 1像素边框  【 border-topbottom】 -->
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.currentCity }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                    <!-- 1像素边框  【 border-topbottom】 -->
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <!-- 给每一个内容绑定事件 -->
                        <div class="button-wrapper" v-for="item of hot" 
                        :key="item.id" @click="handleCityClick( item.name )"
                        >
                            <div class="button">{{item.name}}</div>
                        </div>
                        
                    </div>
                </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" 
                    :key="innerItem.id"
                    @click="handleCityClick( innerItem.name )"
                    >
                    {{ innerItem.name }}
                </div>
                    
                </div>
               
            </div>
        </div>
    </div>

</template>
    
<script>
// 引入滚动组件
import Bscroll from 'better-scroll'

import { mapState, mapMutations } from 'vuex'    //vuex 提供了个高级API


export default{
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String   // 7. 在 props 中子组件接收 父组件接收过来的 参数
    },
    computed: {
        //展开运算符
        ...mapState({
            currentCity: 'city'   //我想把Vuex中 city 这个公共的数据映射到我这个组件的计算属性（computed）里映射过来的名字叫 currentCity
        })    
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)   //页面挂载完毕创建 滚动实例

    },
    watch: { // 8. 对letter 参数进行监听
        letter(){
            // console.log(this.letter)
            if(this.letter){
                // const element = this.$refs[ this.letter ]   // 这样获取的是个数组

                // 9. 通过 $refs 获取这个字母对应的 class="area" 的区域
                const element = this.$refs[ this.letter ][0]  
                this.scroll.scrollToElement(element)  // 插件 betterscroll 提供的方法
            }
        }
    },
    methods: {
        handleCityClick (city){
            // alert(city)
            // 改变 city 调用dispatch方法 【 异步操作】
            // this.$store.dispatch('changeCity', city)  //派发一个 changeCity的 actions 进行 异步操作
            //  【 同步操作】
            // this.$store.commit('ChangeCity', city)
            this.ChangeCity(city)
            this.$router.push('/') //进行跳转
        },
        ...mapMutations([ 'ChangeCity' ]) //我们有个mutations叫做 ChangeCity 然后我把mutations映射到我这个组件里面一个名字叫做ChangeCity的方法里
    },


}

</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl'   /* 在 build 的 webpack.base.conf.js配置自定义别名简化引用路径*/

.border-topbottom    //设置.border-topbottom这个类的before/after 这个伪元素的颜色
    &::before
        border-color: #ccc
    &::after
        border-color: #ccc
.border-bottom    //设置.border-bottom这个类的before/after 这个伪元素的颜色
    &::before
        border-color: #ccc
    &::after
        border-color: #ccc

.list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        color: #666
        font-size: .26rem
    .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
            float: left 
            width: 33.33%
            .button
                text-align: center
                margin: .1rem
                border: .02rem solid #ccc
                padding: .1rem 0
                border-radius: .06rem
    .item-list
        .item
            line-height: .76rem
            padding-left: .2rem
</style>