<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
   
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>

export default{
    name: 'HomeRecommend',
    props: {
        list: Array      //接收 home 传过来的值且内容类型为 arry
    },
}


</script>

<style lang="stylus" scoped>
/*浏览器中当所需的文字多时我需要其显示 ... 的效果,并且很多地方使用时创建共用的文件 mixins 来存放样式*/
@import '~styles/mixins.styl'

.title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()       /*存放共用样式 ...效果*/
        .item-desc
            line-heigh: .4rem
            color: #ccc
            ellipsis()       /*存放共用样式 ...效果*/
        .item-button
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            margin-top: .16rem
            color: #fff
            line-height: .44rem

</style>