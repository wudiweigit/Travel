// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入重置样式
// import './assets/styles/reset.css'
import 'styles/reset.css'                       //引入自定义的别名

// 手机端 1 像素边框问题 
// import './assets/styles/border.css
import 'styles/border.css'                        //引入自定义的别名

//移动端 300毫秒点击延迟【在某些机型上/某些浏览器上当你使用 click事件时300毫秒然后才执行 】
import fastClick from 'fastclick'
fastClick.attach(document.body)

//引入iconfont 
// import './assets/styles/iconfont.css'
import 'styles/iconfont.css'                    //引入自定义的别名





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
