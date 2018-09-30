  <!--使用 data 来存储数据的方式-->
<!--<template>
    <div class="icons">
        <swiper>
             <swiper-slide>
                <div class="icon" v-for="item of iconList" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
            
        </swiper>
    </div>
</template>-->

 <!--使用 computed 计算属性来存储数据的方式-->
 <template>
    <div class="icons">
        <swiper :options="swiperOption">
                <swiper-slide v-for="( page, index ) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
            
        </swiper>
    </div>
</template>
    
<script>
    export default {
        name: 'HomeIcons',
        props: {
            list: Array       //接收 home 传过来的值且内容类型为 arry
        },
        data(){
            return {
                swiperOption: {
                    autoplay: false     //使整个icons图标不要自动滚动
                }
            }
        },
        computed: {
            pages (){
                const pages = []
                // this.iconList.forEach( (item, index) => {
                this.list.forEach( (item, index) => {
                    const page = Math.floor(index / 8)  //计算页码【共几页】
                    if( !pages[page] ){
                        pages[page] = []
                    }
                    pages[page].push(item)
                } )
                return pages
            }
        }
    }
</script>
    
    
<style lang="stylus" scoped>
@import '~styles/varibles.styl'

/*浏览器中当所需的文字多时我需要其显示 ... 的效果,并且很多地方使用时创建共用的文件 mixins 来存放样式*/
@import '~styles/mixins.styl'


/*由于 scoped 样式只修饰当前组件中的class名字不会对其他组件进行任何影响
    然而标记页码和当前不是同一个组件所以要通过穿透【>>>】强制使其它组件复用当前组件的样式
    这样 scoped 就失效了*/
.icons >>> .swiper-container     /*应为swiper-container自带了overflow所以这里就去掉*/
    height: 0
    padding-bottom: 50%
/*.icons
    height: 0
    width: 100%
    padding-bottom: 50%
    overflow: hidden*/
.icons
    margin-top: .1rem
    .icon
        width: 25%
        padding-bottom: 25%
        float: left
        overflow: hidden
        position: relative
        height: 0
        .icon-img
            position: absolute
            left: 0
            top: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                height: 100%
                display: block
                margin: 0 auto 
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor   /*共用字体颜色样式*/
            ellipsis()    /*存放共用样式 ...效果*/
</style>