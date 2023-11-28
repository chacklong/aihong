import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/AiHome.vue'
import AiAbout from '@/views/AiAbout.vue'
import AiNews from '@/views/AiNews.vue'
import AiNotFound from '@/views/AiNotFound.vue'
import AiContact from '@/views/AiContact.vue'
import AiVillage from '@/views/villagecommittee/AiVillage.vue'
import AiDevloping from '@/views/AiDevloping.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: AiAbout
    },
    {
      path: '/news',
      name: 'news',
      component: AiNews
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: AiNotFound
    },
    {
      path: '/contact',
      name: 'contact',
      component: AiContact
    },
    {
      path: '/village',
      name: 'village',
      component: AiVillage
    },    
    {
      path: '/dev',
      name: 'dev',
      component: AiDevloping
    }
  ]
})

export default router
