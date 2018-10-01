<template>
    <!-- 帮助我们获取 DOM 【 ref 】 -->
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <!-- 1像素边框  【 border-topbottom】 -->
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">南京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                    <!-- 1像素边框  【 border-topbottom】 -->
                    <div class="title border-topbottom">热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper" v-for="item of hot" :key="item.id">
                            <div class="button">{{item.name}}</div>
                        </div>
                        
                    </div>
                </div>
            <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{ key }}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{ innerItem.name }}</div>
                    
                </div>
               
            </div>
        </div>
    </div>

</template>
    
<script>
// 引入滚动组件
import Bscroll from 'better-scroll'


export default{
    name: 'CityList',
    props: {
        hot: Array,
        cities: Object,
        letter: String   // 7. 在 props 中子组件接收 父组件接收过来的 参数
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
    }
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