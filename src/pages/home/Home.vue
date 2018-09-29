<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
    </div>
    
</template>

<script>
// 引入hheader组件
import HomeHeader from './components/Header'

// 引入sSwiper组件
import HomeSwiper from './components/Swiper'

export default{
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper
    }
}

</script>


<style>
</style>