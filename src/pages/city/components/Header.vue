<template>
    <div class="header">城市选择
        <router-link to="/">
            <div class="iconfont header-back" >&#xe624;</div>
        </router-link>
        
    </div>
</template>
    
<script>
export default{
    name: 'CityHeader'
}

</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl'   /* 在 build 的 webpack.base.conf.js配置自定义别名简化引用路径*/
.header
    position: relative
    overflow: hidden    /*共用颜色样式*/
    height: $headerHeight          /*共用高度*/
    line-height: $headerHeight     /*共用高度*/
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>