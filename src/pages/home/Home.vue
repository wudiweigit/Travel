<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>
    </div>
    
</template>

<script>
// 引入hheader组件
import HomeHeader from './components/Header'

// 引入sSwiper组件
import HomeSwiper from './components/Swiper'

// 引入Icons组件
import HomeIcons from './components/Icons'

export default{
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}

</script>


<style>
</style>