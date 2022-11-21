import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import News from '../views/News.vue'
import Publication from '../views/Publication.vue'
import Research from '../views/Research.vue'
import Contact from '../views/Contact.vue'

// ページを追加する際にはここに記述する
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/publication',
    name: 'publication',
    component: Publication
  },
  {
    path: '/research',
    name: 'research',
    component: Research
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
