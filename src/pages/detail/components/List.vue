<template>
    <div>
        <div class="item" v-for="(item, index) of  list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon">{{ item.title }}</span>
            </div>
               <!-- 递归组件 -->
<!-- 如果item 有children 这项说明它是多级的菜单我呢就把children当做list再传给我自己做个递归的循环 -->
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}

</script>


<style lang="stylus" scoped>
.item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem
.item-title 
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
.item-children
    padding: 0 .6rem
</style>