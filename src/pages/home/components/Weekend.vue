merge: origin - not something we can merge
<template>
        <div>
            <div class="title">周末去哪</div>
            <ul>
                <li class="item border-bottom" v-for="item of list" :key="item.id">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl" alt="">
                    </div>
                        
       
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </template>
    
    
    <script>
    
    export default{
        name: 'HomeWeekend',
        props: {
            list: Array 
        }
    }
    
    
    </script>
    
    <style lang="stylus" scoped>
    /*浏览器中当所需的文字多时我需要其显示 ... 的效果,并且很多地方使用时创建共用的文件 mixins 来存放样式*/
    @import '~styles/mixins.styl'
    
    .title

        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        height: 0
        overflow: hidden
        padding-bottom: 37.09%
    .item-img
        width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()       /*存放共用样式 ...效果*/
        .item-desc
            line-heigh: .4rem
            color: #ccc
            ellipsis()       /*存放共用样式 ...效果*/
    </style>