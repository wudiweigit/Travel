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
        <li class="item" v-for="item of letters" :key="item" :ref="item" 
        @touchstart="handleTouchStart" 
        @touchmove="handleTouchMove" 
        @touchend="handleTouchEnd" 
        @click="handleLetterClick"
        >{{ item }}
        </li>
    </ul>  
</template>
    
<script>

export default{
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    data(){
        return {
            touchStatus: false // 定义标识位
        }
    },

    computed: {
        // 根据下标找到下标对应的字母
        letters () {
        const letters = []  // 存储字母列表 ['A','B','C']
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
  // 当我滑动右端字母时能在左边自动定位到相应字母位置
    // 思路 ==>>  获得A字母距离顶部的高度然后我滑动时看下当前手指置距离顶部的高度我做个差值在除以每个字母的高度就可以知道当前是第几个字母了
    methods: {
        // 2.定义刚才绑定的事件
        handleLetterClick (e){    //获取目标元素
            // console.log(e.target.innerText)
            this.$emit( 'change', e.target.innerText)    // 3. $emit 向外触发事件,并传值
        },

        handleTouchStart(){
            // 当手指触摸时
            this.touchStatus = true
        },
        handleTouchMove(e){
            //只有当this.touchStatus 位true 的情况下进行处理
            if(this.touchStatus){
                const startY = this.$refs['A'][0].offsetTop  // A 字母距离顶部的高度
                // 事件对象中会有个 touches 的数组
                const touchY = e.touches[0].clientY - 79     //字母距离最顶部的高度 [79是 城市选择加输入城市的高度]
                const index = Math.floor((touchY - startY) / 20) // 手指滑动时对应字母的下标  [20是字母的高度]
                // console.log(index)
                
                if( index >= 0 && index < this.letters.length ){
                    this.$emit('change', this.letters[index])
                }
            }

        },
        handleTouchEnd(){
            //当手指结束滑动时
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