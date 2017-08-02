import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PopularMusic from '@/components/PopularMusic'
import NewMusic from '@/components/NewMusic'
import DiscoverMusic from '@/components/DiscoverMusic'
import RecentlyPlayed from '@/components/RecentlyPlayed'
import MusicVideos from '@/components/MusicVideos'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/popular-music', name: 'PopularMusic', component: PopularMusic},
    {path: '/new-music', name: 'NewMusic', component: NewMusic},
    {path: '/discover-music', name: 'DiscoverMusic', component: DiscoverMusic},
    {path: '/recently-played', name: 'RecentlyPlayed', component: RecentlyPlayed},
    {path: '/music-videos', name: 'MusicVideos', component: MusicVideos}
  ]
})
