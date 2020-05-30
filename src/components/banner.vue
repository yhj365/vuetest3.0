<template>
  <div class="banner">
    <img v-for="(v,i) in banner" :key="i" :src="v" v-show="n==i">
    <div class="banner-circle">
      <ul>
        <li v-for="(v,i) in banner" :key="i" :class="n==i?'select-circle':''"></li>
      </ul>
    </div>
  </div>
</template>

<script>
// inject接收provide传输的数据
import { reactive,toRefs, onMounted,onUnmounted,inject} from '@vue/composition-api'
export default {
  setup(props){
    // inject的变量写法
    const banner = inject('banner')
    const state = reactive({
      n: 0,
      interval: null
      // inject的第二种写法
      // banner: inject('banner')
    })
    const autoPlay=()=>{
      state.interval = setInterval(play,2000)
    }
    const play=()=>{
      state.n++
      if(state.n>=banner.length){
        state.n=0
      }
    }
    onMounted(()=>{
      autoPlay()
    })
    onUnmounted(()=>{
      clearInterval(state.interval)
    })
    return {
      ...toRefs(state),
      // inject的变量写法,需要return
      banner
    }
  }


  
}

</script>
<style lang='scss' scoped>
.banner{
    height: 180px;
    width: 100%;
    position: relative;
    img{
      height: 100%;
      width: 100%;
    }
    .banner-circle{
      display: flex;
      justify-content: center;
      width: 100%;
      position: absolute;
      bottom: 10px;
      ul{
        display: flex;
        li{
          border-radius: 50%;
          background-color: #ccc;
          opacity: 0.5;
          height: 12px;
          width: 12px;
          margin: 0 4px;
        }
        .select-circle{
            background-color: red;
          }
      }
    }
  }
</style>
