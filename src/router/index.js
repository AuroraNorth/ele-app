import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../pages/home/Home.vue'
import Detail from '../pages/home/Detail.vue'
import Discover from '../pages/discover/Discover.vue'
import Order from '../pages/order/Order.vue'
import Mine from '../pages/mine/Mine.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      alias:'/',//别名
      component: Home,
      children:[
        {
          path:'detail',
          component:Detail
        }
      ]
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path:'**',//容错,输入任意字符都进入首页
      redirect:'/home'
    }
  ]
})
