<template>
  <div class="detail">
    <a class="goback" @click="goBack()">返回</a>
    <img v-for="(v,i) in banner" :key="i" :src="v" v-show="n==i">
    <div class="detail-circle">
      {{id}}
    </div>
  </div>
</template>

<script>

import { reactive,toRefs, onMounted} from '@vue/composition-api'
export default {
  setup(props,{root}){
    const state = reactive({
      id: '',
      banner: []
    })
    let goBack = ()=>{
      root.$router.go(-1)
    }
    onMounted(()=>{
      state.id = root.$route.params.id
      console.log(root.$route.params.id)
    })

    return {
      ...toRefs(state),
      goBack
    }
  }
}

</script>
<style lang='scss' scoped>
.detail{
    .goback{
      width: 40px;
      height: 40px;
      position: fixed;
      top: 10px;
      left: 10px;
      border-radius: 50%;
      color: #fff;
      background-color: #aaa;
      text-align: center;
      vertical-align: center;
      line-height: 40px;
    }
  }
</style>
