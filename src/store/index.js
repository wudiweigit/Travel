import Vue from 'vue'

// 引入 vuex 
import Vuex from 'vuex'

Vue.use(Vuex)


    //    【 异步操作  】
// export default new Vuex.Store({
//     state: { // 存放公共数据
//         city: '上海'
//     },
//     actions: {  // 接收到传递过来的城市
//               // 上下文  传递过的参数   
//         changeCity(ctx, city){
//             // console.log(city)
//             ctx.commit ('ChangeCity', city)  // 通过 commit 方法使actions 调用 mutations 来改变共用的数据
//         }
//     },
//     mutations: {  
//         ChangeCity (state, city){
//             state.city = city
//         }
//     }
// })



//  //    【 1. 同步操作  】
// export default new Vuex.Store({
//     state: { // 存放公共数据
//         city: localStorage.city || '上海'    //优先从localStorange如果娶不到在采用默认的
//     },
//     mutations: {  
//         ChangeCity (state, city){
//             state.city = city
//             localStorage.city = city   //本地存储
//         }
//     }
// })






//  //    【 2. 同步操作  】
//  // 问题： 应为在某些浏览器用户关闭本地存储功能或者隐身模式 localStorange 会导致浏览器爆出异常
//  // 解决： try{}catch(){}

// let defaultCity = '上海'
// try{
//     if( localStorage.city ){
//         defaultCity = localStorage.city 
//     }
// }catch(e){}

//  export default new Vuex.Store({
//     state: { 
//         city: defaultCity  
//     },
//     mutations: {  
//         ChangeCity (state, city){
//             state.city = city
//             try{
//                 localStorage.city = city 
//             }catch( e ){}
              
//         }
//     }
// })




 //    【 2. 同步操作  】==>>{  由于代码开始变多要进行优化了   }
 // 创建  state.js   mutations.js

 
 import state from './state'
 import mutations from './mutations'
 
  export default new Vuex.Store({
    // 由于传过来的参数一样使用ES6语法
    // state: state,
    // mutations:  mutations
    state,
    mutations,
    // getters: {  //getters类似于组件中 computed 当我们需要根据 state 中的数据算出新的数据时我们就可以借助 getters这样的工具来提供新的数据这样的话可以避免数据的冗余
    //     doubleCity( state ){
    //         return state.city + '' + state.city
    //     }
    // }

 })


