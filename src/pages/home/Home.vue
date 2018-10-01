<template>
    <div>
       <home-header></home-header>
       <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekend :list="weekendList"></home-weekend>
    </div>
    
</template>
o
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

// 引入 axios 组件 才能进行 ajax 请求
import axios from 'axios'

export default{
    name: 'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {  //创建方法获取ajax数据

        getHomeInfo(){
            axios.get('/api/index.json')  //请求的 url
                .then( this.getHomeInfoSucc )   //请求成功调用的方法
        },

        getHomeInfoSucc( res ){
            console.log(res)
            res = res.data   //获取数据的内容
                if( res.ret && res.data ){  // "ret": true,  代表服务器正确响应了你的请求
                  
                    this.swiperList = res.data.swiperList,
                    this.iconList = res.data.iconList,
                    this.recommendList = res.data.recommendList,
                    this.weekendList = res.data.weekendList
                }
        }

    },
    mounted(){ //通过生命周期的钩子函数进行 ajax 数据的获取
        this.getHomeInfo()    //页面挂载好之后调用该方法
    }
}

</script>


<style>
</style>