import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import News from '../views/News.vue'
import Publication from '../views/Publication.vue'
import Research from '../views/Research.vue'
import SummerSchool from '../views/News/2022/SummerSchool.vue'

// ページを追加する際にはここに記述する
const routes: Array<RouteRecordRaw> = [
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/Member',
    component: Member
  },
  {
    path: '/News',
    component: News
  },
  {
    path: '/Publication',
    component: Publication
  },
  {
    path: '/Research',
    component: Research
  },
  {
    path: '/news/2022/SummerSchool',
    component: SummerSchool
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
