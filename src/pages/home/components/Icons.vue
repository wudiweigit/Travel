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
        <swiper>
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
        data: function(){
            return {
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: '景点门票景点门票'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                        desc: '水上乐园'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        desc: '游乐场'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                        desc: '海洋馆'
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        desc: '动植物乐园'
                    },
                    {
                        id: '0006',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                        desc: '玩转长隆'
                    },
                    {
                        id: '0007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                        desc: '城市观光'
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc: '一日游'
                    },
                    {
                        id: '0009',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
                        desc: '汽车票'
                    },
                    {
                        id: '00010',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                        desc: '全部玩乐'
                    }
                ]
            }
        },
        computed: {
            pages (){
                const pages = []
                this.iconList.forEach( (item, index) => {
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