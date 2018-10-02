<template>
    <!-- 点击画廊组件时自己关闭 -->
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">

                <!-- 解决为什么默认选中最后一个轮播 ==》  v-if="list.length"    -->
            <!-- <swiper :options="swiperOption" v-if="list.length"> -->
            <swiper :options="swiperOptions">
                
                <swiper-slide v-for="(item, index ) in imgs" :key="index">
                    <img class="gallary-img" :src="item"> 
                </swiper-slide>
                
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>

        </div>
    </div>
</template>


<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default(){ //如果不传，使用默认的
                return []
            }
        }
    },
    data(){
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',       // 调用其变量让其呈现 1/2 效果
// 问题：一开始让CommonGallary处于隐藏状态再次把她显示出来时swiper计算宽度会有些问题导致轮播图无法正常滚动
                // 解决：在swiperOptions加两个参数【我这个swipper插件只要监听到observe或者父级元素(observeParents)发生DOM结构变化时我会自动刷新一次】
                observeParents: true,
                observer: true
            }
           
        }
    },
    methods: {
        handleGallaryClick(){
            this.$emit('close')
        }
    }
}


</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow: inherit
.container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
        height: 0
        width: 100%
        padding-bottom: 100%
        .gallary-img
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: -1rem


</style>