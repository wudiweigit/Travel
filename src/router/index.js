import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

// 引入 City 组件
import City from '@/pages/city/City'

// 引入 Detail 组件
import Detail from '@/pages/detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [{
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
    }],
    // 问题：拖动多个页面会互相影响
    // 解决： 使用vue-router 自带的方法scrollBehavior
    scrollBehavior (to, from, savedPosition) {
      return {x: 0, y: 0}    // 每一次做路由切换时我都让先进入显示的页面回到最顶部【x轴初始位置为0,y轴初始位置为0】
    }
})
