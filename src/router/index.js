import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

// 引入 City 组件
import City from '@/pages/city/City'

// 引入 Detail 组件
import Detail from '@/pages/detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{                  //配置城市选择路由
      path: '/city',
      name: 'City',
      component: City
    },{                  //配置详情页选择路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }

  ]
})
