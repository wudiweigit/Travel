<template>
    <ul class="list">
        <!-- 兄弟/非父子组件的传值 【 1.为其绑定事件 】 -->
        <!-- <li class="item" v-for="(item, key) of cities" :key="key" 
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        >{{ key }}
        </li> -->

        
        <!-- 非父子/兄弟组件数据传递   1. 绑定个事件-->
        <li class="item" v-for="item of letters" :key="item" :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >{{ item }}</li>
    </ul>  
</template>
    
<script>
// export default{
//     name: 'CityAlphabet',
//     props: {
//         cities: Object
//     },
//     data(){
//         return {
//             touchStatus: false    // 定义标识类
//         }
//     },

//     computed: {
//         letters(){
//             const letters = []      //存储字母列表 ['A', 'B', 'C']
//             for(let i in this.cities){
//                 letters.push(i)
//             }
//             return letters
//         }
//     },
// // 当滑动右边字母时能让左边字母定位到指定位置
// // 思路 ===>>获得A字母距离顶部的高度然后我滑动时看下当前手指位置距离顶部的高度我做一个差值在除以每个字母的高度
//     methods: {
//         handleLetterClick(e){   //定义绑定的事件方法
//             // console.log(e.target.innerText)
//             this.$emit('change', e.target.innerText)
//         },

        
//         handleTouchStart(){
//             //当手指触摸时
//             this.touchStatus = true
//         },
//         // 当this.touchStatus = true 时才去出发该方法
//         handleTouchMove(e){
//             if(this.touchStatus){
//                 const startY = this.$refs['A'][0].offsetTop
//                 // console.log(startY)
//                 // 事件对象中有个 touches 数组
//                 const touchY = e.touches[0].clientY -79   // 79时城市选择和输入城市的高度
//                 // console.log(touchY)
//                 const index= Math.floor((touchY - startY) / 20)  //字母的下标 【20是字母的高度】

//                 if( index >=0 && index <this.letters.length )
//                     this.$emit('change', this.letters[index])
//             }
//         },
        
//         handleTouchEnd(){
//             //当结束滑动时
//             this.touchStatus = false
//         }
//     }
// }





export default{
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data(){
        return {
            touchStatus: false,   // 定义标识类
            startY: 0,
            timer: null
        }
    },

    computed: {
        letters(){
            const letters = []      //存储字母列表 ['A', 'B', 'C']
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },


    updated() {
        this.startY = this.$refs['A'][0].offsetTop
    },
// 当滑动右边字母时能让左边字母定位到指定位置
// 思路 ===>>获得A字母距离顶部的高度然后我滑动时看下当前手指位置距离顶部的高度我做一个差值在除以每个字母的高度
    methods: {
        handleLetterClick(e){   //定义绑定的事件方法
            // console.log(e.target.innerText)
            this.$emit('change', e.target.innerText)
        },

        
        handleTouchStart(){
            //当手指触摸时
            this.touchStatus = true
        },
        // 当this.touchStatus = true 时才去出发该方法
        handleTouchMove(e){
            if(this.touchStatus){
                // const startY = this.$refs['A'][0].offsetTop


                // 函数节流
                if( this.timer ){
                    clearTimeout( this.timer )
                }
                this.timer = setTimeout(  ( ) => {
                    // 事件对象中有个 touches 数组
                    const touchY = e.touches[0].clientY -79   
        
                    const index= Math.floor((touchY - this.startY) / 20) 

                    if( index >=0 && index <this.letters.length ){
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
                
            }
        },
        
        handleTouchEnd(){
            //当结束滑动时
            this.touchStatus = false
        }
    }
}


</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'   /* 在 build 的 webpack.base.conf.js配置自定义别名简化引用路径*/

 
.list
    display: flex
    flex-direction: column
    justify-content:center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
        line-height: .4rem
        text-align: center 
        color: $bgColor
</style>