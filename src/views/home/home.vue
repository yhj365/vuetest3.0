<template>
  <div class="home">
     <!-- banner -->
     <Banner ></Banner>
    <!-- navbar -->
    <div class="index-category">
      <div class="category" v-for="(item,i) in categoryList" :key="i">
        <i class="iconfont" :class="item.icon"></i>
        <label >{{item.title}}</label>
      </div>
    </div>
    <!-- list -->
    <div class="index-list">
      <ul>
        <li class="list" v-for="(product,i) in productList" :key="i">
          <router-link :to="`/detail/${product.id}`">
            <img :src="product.src" alt="" srcset="">
            <span>{{product.title}}</span>
            <b>折扣价:{{product.price}}</b>
            <del>原价:{{product.oldPrice}}</del>
          </router-link>
        </li>
      </ul>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
// 使用toRefs才能响应式数据双向绑定
// provide用于组件数据传递
import { reactive,toRefs, computed, onMounted,provide } from '@vue/composition-api'
import Banner from '@/components/banner'
import tabbar from '@/components/tabbar.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    tabbar
  },
  setup (props,{root}) {
    const state = reactive({
      imgArray: [
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png'),
        require('@/assets/logo.png')
      ],
      categoryList: [
        {
          title: '礼品',
          icon: 'icon-lipin'
        },
        {
          title: '衣裙',
          icon: 'icon-yiqun'
        },
        {
          title: '彩妆',
          icon: 'icon-caizhuang'
        },
        {
          title: '体育',
          icon: 'icon-tiyuyongpin'
        },
      ],
      productList: [
        {
          id: 0,
          title: '礼品',
          src: require('@/assets/logo.png'),
          price: 300,
          oldPrice: 500
        },
        {
          id: 1,
          title: '衣裙',
          src: require('@/assets/logo.png'),
          price: 300,
          oldPrice: 500
        },
        {
          id: 2,
          title: '彩妆',
          src: require('@/assets/logo.png'),
          price: 300,
          oldPrice: 500
        },
        {
          id: 3,
          title: '体育',
          src: require('@/assets/logo.png'),
          price: 300,
          oldPrice: 500
        },
      ],
    })
    provide('banner',state.imgArray)
    onMounted(()=>{
      root.$msg('home request')
    })
    return {
      ...toRefs(state),

    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  margin-bottom: 50px;
  
  .index-category{
    display: flex;
    margin: 10px 0;
    .category{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25vw;
      i{
        font-size: 30px;
      }
    }
  }
  .index-list{
    ul{
      display: flex;
      flex-wrap: wrap;
      .list{
        width: 50vw;
        border: 8px solid #fff;
        box-sizing: border-box;
        img{
          width: 100%;
        }
        a{
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>

