import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'main',
      meta: {
        // 添加该字段，表示进入这个路由是需要登录的
         requireAuth: true,  
        }, 
      component: main
    }
  ]
})
