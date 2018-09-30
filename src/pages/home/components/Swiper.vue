<template>
    <div class="wrapper">
            <!-- 解决为什么默认选中最后一个轮播 ==》  v-if="list.length"    -->
        <!-- <swiper :options="swiperOption" v-if="list.length"> -->
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
        
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>    
    </div>
    
</template>

<script>

export default{
    name: 'HomeSwiper',
    props: {
        list: Array     //接收 home 传过来的值且内容类型为 arry
    },
    data(){
        return{
            swiperOption: {
                // 标记页码         哪个对象
                pagination: '.swiper-pagination',
                loop: true //支持循环轮播
            },
            // swiperList: [{
            //     id: '0001',
            //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/d5/fe8867e329175202.jpg_750x200_98799354.jpg'
            // },{
            //     id: '0002',
            //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/29/6a13907ab0f9bf02.jpg_750x200_452cfebe.jpg'
            // }]
        }
        
    },
    computed: {
        //问题：由于页面刚被加载时轮播图显示最后一张
        showSwiper(){ 
            return this.list.length   //通过绑定v-if来判断【如果list是空数组时swiper元素不会被创建只有为list.length才会被创建】
        }
    }
}

</script>


<style lang="stylus" scoped>
/*由于 scoped 样式只修饰当前组件中的class名字不会对其他组件进行任何影响
然而标记页码和当前不是同一个组件所以要通过穿透【>>>】强制使其它组件复用当前组件的样式
这样 scoped 就失效了*/
 .wrapper >>> .swiper-pagination-bullet-active  /*只要 .wrapper 下所有子组件中出现特定属性就让其显示相关样式来覆盖原有属性 */
    background: #fff
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.66%
    background: #eee   /*图片没显示出来时先显示一个灰色背景*/
    .swiper-img
        width: 100%
</style>