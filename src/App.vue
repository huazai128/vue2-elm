<template>
  <div>
    <transition name="router-fade" mode="out-in">
      <!-- 缓存部分页面和组件 当路由配置meta: {keepAlive: true},减少性能的消耗 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
  import svgIcon from "./components/common/svg.vue"
  export default {
    components:{

    },
    mounted(){
      console.log(this.$route); // 获取路由信息
    },
    components:{
      svgIcon
    }
  }
</script>

<style lang="scss">
  @import './style/common';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
