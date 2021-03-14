import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Userinfo from '../views/userinfo.vue'
import Edit from '../views/edit.vue'
import Home from '../views/Home.vue'
import Article from '../views/article.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userinfo',
    component: Userinfo,
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    component: Edit,
    meta: {
      istoken: true
    }
  },
  {
    path: '/',
    component: Home,
    meta: {
      keepalive: true
    }
  },
  {
    path: '/article/:id',
    component: Article
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken === true) {
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})
export default router
