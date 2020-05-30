<template>
  <div class="home">
    <h1>{{title}}---{{msg}}</h1>
    <h2>{{age}}</h2>
		<h3>{{num}}</h3>
    <button @click="play">按钮</button>
  </div>
</template>

<script>
// 使用toRefs才能响应式数据双向绑定
import { reactive,toRefs, computed } from '@vue/composition-api'

export default {
  name: 'Home',
  setup () {
    const state = reactive({
      title: 'hello home',
      msg: 'hello msg',
			age: 0,
			// 计算属性使用
			num: computed(()=>100)
    })
    let play = () => {
      state.age++
    }
    return {
      ...toRefs(state),
      play
    }
  }
}
</script>

