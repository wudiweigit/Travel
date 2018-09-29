// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入重置样式
import './assets/styles/reset.css'

// 手机端 1 像素边框问题 
import './assets/styles/border.css'

//移动端 300毫秒点击延迟【在某些机型上/某些浏览器上当你使用 click事件时300毫秒然后才执行 】
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
