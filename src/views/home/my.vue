<template>
  <div class="about">
    <h1>{{vuexMsg}}</h1>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onUnmounted, computed } from '@vue/composition-api'
import tabbar from '@/components/tabbar.vue'


export default {
  components: {
    tabbar
  },
  setup (props, { root }) {
    const state = reactive({
      vuexMsg: computed(()=> root.$store.getters.showMsg)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
