import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyMusic from '@/views/MyMusic'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import Profile from '@/views/Profile'
import MusicStore from '@/views/MusicStore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/music_store',
      name: 'music_store',
      component: MusicStore
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusic
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ],
  mode: 'history'
})
