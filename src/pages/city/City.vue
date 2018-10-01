<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="allcities" :hot="hotCities"></city-list>
        <city-alphabet :cities="allcities"></city-alphabet>
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
            hotCities: []
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
        }


    },

    mounted(){
        this.getCityInfo()
    }
}

</script>

<style lang="stylus" scoped>


</style>