<template>
  <div class="home">
		<h1>{{title}}---{{msg}}</h1>
		<h2>{{num}}</h2>
		<button @click="play">按钮</button>
  </div>
</template>

<script>
import {reactive} from '@vue/composition-api'

export default {
  name: 'Home',
  setup(){
		const state = reactive({
			title: 'hello home',
			msg: 'hello msg',
			num: 0
		})
		let play = ()=>{
			state.num += 1
		}
		return {...state,play}
	}
}
</script>

