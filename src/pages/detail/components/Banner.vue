<template>
    <div>
        <!-- 通过点击事件来实现画廊的显示或隐藏 -->
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_600x330_d7e04f5c.jpg" alt="">
            <div class="banner-info">
                <div class="banner-tittle">夫子庙秦淮河游船</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    4
                </div>
            </div>
        </div>
        <!-- 使用变量【showGallary】控制画廊显示、隐藏 -->
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
// 引入画廊组件 CommonGallary
import CommonGallary from 'common/gallary/Gallary'       //在webpack.base.conf.js 配置别名

export default {
    name: 'Banner',
    components: {
        CommonGallary
    },
    data(){
        return {
            showGallary: false,
            imgs: [
                '//img1.qunarzz.com/sight/p0/1507/c5/c5bf379142fcd62c.img.jpg_r_800x800_1767618a.jpg',
                '//img1.qunarzz.com/sight/p0/1507/a3/a37ced8252b273c9.img.jpg_600x330_d7e04f5c.jpg'
            ]
        } 
    },
    methods: {
        handleBannerClick(){
            this.showGallary = true
        },
        //  点击画廊组件时自己关闭 
        handleGallaryClose(){   
            this.showGallary = false
        }
    }
}

</script>


<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-info
        display: flex
        position: absolute
        left: 0
        right: 0
        bottom: 0
        color: #fff
        line-height: .6rem
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-tittle
            flex: 1
            font-size: .32rem
            padding: 0 .2rem
        .banner-number
            margin-top: .14rem
            padding: 0 .4rem
            height: .32rem
            line-height: .32rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            .banner-icon
                font-size: .24rem



</style>