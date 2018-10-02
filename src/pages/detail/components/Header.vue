<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back" >&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back" >&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
            
        }
    },
    methods: {
        handeScroll(){
            console.log('scroll')
            const top = document.documentElement.scrollTop
            if( top > 60 ){

                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            }else{
                this.showAbs = true
            }
            // console.log(document.documentElement.scrollTop)
        }
    },

    activated(){ //页面展示时会执行钩子
        window.addEventListener('scroll', this.handeScroll)     // 页面展示时去监听scroll事件 
    },
    deactivated() { // 页面即将被隐藏或者页面即将被替换成新的页面时执行
        window.removeEventListener('scroll', this.handeScroll)   // 页面被隐藏时去移除监听scroll事件
    },
}

</script>


<style lang="stylus" scoped>
@import '~styles/varibles.styl'   /* 在 build 的 webpack.base.conf.js配置自定义别名简化引用路径*/

.header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0, 0, 0 , .8)
    .header-abs-back
        color: #fff
        font-size: .4rem    
.header-fixed
    z-index: 2
    position: fixed
    top: 0
    right: 0
    left: 0
    height: $headerHeight          /*共用高度*/
    line-height: $headerHeight     /*共用高度*/
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff

</style>