<template>
    
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon" >&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题

        </div>
        <router-link to="/city">
            <!-- <div class="header-right">
                {{this.$store.state.city}} -->
                    <!-- 【   映射   】 -->
                <div class="header-right">
                        {{this.city}}
                <!-- <div class="header-right">
                    {{this.doubleCity}} -->
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
            
    </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'    //vuex 提供了个高级API


export default {
        name: 'HomeHeader',
        props: {
            // city: String  //接收 home 传过来的值且内容类型为 string
        },
        computed: {
            //展开运算符
            ...mapState( ['city'] ),    //指把 vuex中的数据映射到到组件的 computed 的计算属性

            ...mapGetters([ 'doubleCity' ])
        }
    }

</script>


<style lang="stylus" scoped>
/*网站中很多地方重用一个颜色或者其它那我们就要把其共用的单独放到一个文件中,再去引入相关文件并调用其中变量*/
    /*【引用其 varibles.styl 中共用的样式】*/
    /* 在 CSS中引入其他样式的CSS需要加 ~ 符号 */
    /*@import '~@/assets/styles/varibles.styl'*/
/* @import '../../../asstes/styles/varibles.styl' */

@import '~styles/varibles.styl'  /* 在 build 的 webpack.base.conf.js配置自定义别名简化引用路径*/
.header
    line-height: $headerHeight
    display: flex
    background: $bgColor     /*共用颜色样式*/
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .4rem
    .header-input
        flex: 1
        background: #fff
        border-radius: .1rem
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        padding-left: .2rem
        color: #ccc
    .header-right
        min-width: 1.04rem
        float: right
        text-align: center
        color: #fff
        padding: 0 .1rem
        .arrow-icon
            font-size: .24rem
            margin-left: -.04rem
    
</style>