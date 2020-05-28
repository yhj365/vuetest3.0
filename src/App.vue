<template>
  <div id="app">
    <router-view/>
    <tabbar ></tabbar>
  </div>
</template>
<script>
// @ is an alias to /src
import tabbar from '@/components/tabbar.vue'

export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>
<style>

</style>
