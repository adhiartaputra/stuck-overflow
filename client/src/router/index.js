import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import QuestionDetail from '@/components/QuestionDetail'
import PostForm from '@/components/PostForm'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }, {
      path: '/post',
      name: 'postForm',
      component: PostForm
    }, {
      path: '/:id',
      name: 'QuestionDetail',
      component: QuestionDetail
    }
  ]
})
