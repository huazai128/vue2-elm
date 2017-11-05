import Vue from 'vue'
import Router from 'vue-router'
import Home from "../page/home/home.vue"
import City from "../page/city/city.vue"
import Msite from "../page/msite/msite.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path:"/city/:cityid",
      component:City
    },
    {
      path:"/msite",
      component:Msite,
      meta:{ keepAlive:true } // 缓存部分页面或者组件 和<keep-alive>配合使用
    }
  ]
})
