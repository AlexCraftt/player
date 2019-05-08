import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Playlist from '@/components/Playlist'
import Playlists from '@/views/Playlists'
import MyMusic from '@/views/MyMusic'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import Profile from '@/views/Profile'
import Tracks from '@/views/Tracks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: Playlist
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: Playlists
    },
    {
      path: '/tracks',
      name: 'tracks',
      component: Tracks
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
