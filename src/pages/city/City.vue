<template>
    <div>
        <city-header></city-header>
        <city-search :cities="allcities"></city-search>
        <!-- 6.在父组件中命相关属性 :letter="letter" -->
        <city-list :cities="allcities" :hot="hotCities" :letter="letter"></city-list>
        <!-- 兄弟/非父子组件的传值 【 3.监听 $emit 传过来的事件（change） 】-->
        <city-alphabet :cities="allcities" @change="hadleLetterChange"></city-alphabet>
    </div>
    

</template>

<script>

import CityHeader from './components/Header'

import CitySearch from './components/Search'

import CityList from './components/List'

import CityAlphabet from './components/Alphabet'

// 引入 axios 组件 才能进行 ajax 请求
import axios from 'axios'
export default{
    name: 'City',
    data(){
        return {
            allcities: {},
            hotCities: [],
            letter: ''      // 5. 初始化接收参数数据 
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },

    methods: {
        getCityInfo(){
            axios.get('/api/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            // console.log(res)\
            res = res.data
            if( res.ret && res.data ){
                this.allcities = res.data.cities
                this.hotCities = res.data.hotCities
            }
        },
        // 4. 定义个事件监听的方法 ，并接受参数
        hadleLetterChange ( letter ){
            // console.log(letter)
            this.letter = letter
        }


    },

    mounted(){
        this.getCityInfo()
    }
}

</script>

<style lang="stylus" scoped>


</style>