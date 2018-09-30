merge: origin - not something we can merge
<template>
        <div>
            <div class="title">周末去哪</div>
            <ul>
                <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
        data(){
            return {
                recommendList: [{
                    id: '0001',
                    imgUrl: '//img1.qunarzz.com/sight/source/1505/f3/d51669250308cc.jpg_r_640x214_7a127cd0.jpg',
                    title: '南京珍珠泉水上世界',
                    desc: '高品质天然泉水水上乐园'
                },{
                    id: '0002',
                    imgUrl: '//img1.qunarzz.com/sight/source/1505/f1/ae9d4299b8aaea.jpg_r_640x214_0c555905.jpg',
                    title: '南京珍珠泉水上世界',
                    desc: '高品质天然泉水水上乐园'
                },{
                    id: '0003',
                    imgUrl: '//img1.qunarzz.com/sight/source/1505/e1/cdbf56d837da59.jpg_r_640x214_105fc3f2.jpg',
                    title: '南京珍珠泉水上世界',
                    desc: '高品质天然泉水水上乐园'
                },{
                    id: '0004',
                    imgUrl: '//img1.qunarzz.com/sight/source/1505/ed/8bce72632c9136.jpg_r_640x214_221c04c6.jpg',
                    title: '南京珍珠泉水上世界',
                    desc: '高品质天然泉水水上乐园'
                }]
            }
        }
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
    .item-img-wrapper
        height: 0
        overflow: hidden
        padding-bottom: 33.9%
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