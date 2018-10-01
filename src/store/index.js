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



 //    【 同步操作  】
export default new Vuex.Store({
    state: { // 存放公共数据
        city: '上海'
    },
    mutations: {  
        ChangeCity (state, city){
            state.city = city
        }
    }
})