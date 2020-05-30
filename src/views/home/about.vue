<template>
  <div class="about">
    <h1>{{$store.state.vuexMsg}}</h1>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onUnmounted } from '@vue/composition-api'
import tabbar from '@/components/tabbar.vue'


export default {
  components: {
    tabbar
  },
  setup (props, { root }) {
    const state = reactive({
    })
    onMounted(() => {
      root.$store.dispatch('ADDMSG')
    })
    // onUnmounted用于销毁的生命周期
    onUnmounted(()=>{
      root.$store.dispatch('DELMSG')
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
