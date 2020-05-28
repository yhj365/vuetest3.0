<template>
  <div class="tabbar">
    <ul class="ul">
      <router-link tag="li" v-for="(item) in list" :key="item.id" :to="{path: item.url}">
        <i :class="item.icon"></i>
        <label>{{item.name}}</label>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      list: [{
        id: 0,
        icon: '',
        url: '/home',
        name: '首页'
      }, {
        id: 1,
        icon: '',
        url: '/about',
        name: '关于'
      }, {
        id: 2,
        icon: '',
        url: '/cart',
        name: '购物车'
      }, {
        id: 3,
        icon: '',
        url: '/my',
        name: '我的'
      }]
    }
  },
  mounted () { },
  methods: {}

}

</script>
<style lang='scss' scoped>
.tabbar {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  .ul{
    display: flex;
    justify-content: space-around;
    height: 100%;
    li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
    }
  }
}
</style>
