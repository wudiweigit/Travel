<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>
       <home-recommend></home-recommend>
       <home-weekend></home-weekend>
    </div>
    
</template>

<script>
// 引入hheader组件
import HomeHeader from './components/Header'

// 引入sSwiper组件
import HomeSwiper from './components/Swiper'

// 引入Icons组件
import HomeIcons from './components/Icons'

// 引入 Recommend组件
import HomeRecommend from './components/Recommend'

// 引入 Recommend组件
import HomeWeekend from './components/Weekend'

export default{
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}

</script>


<style>
</style>