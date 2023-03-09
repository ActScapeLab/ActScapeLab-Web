import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import News from '../views/News.vue'
import NewsTop from '../views/News/Top.vue'
import SummerSchool from '../views/News/2022/SummerSchool.vue'
import Publication from '../views/Publication.vue'
import Member from '../views/Member.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Research from '../views/Research.vue'
import Alumni from '../components/Member/Alumni/Alumni.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/News',
    component: News,
    children: [
      {
        path: '',
        component: NewsTop
      },
      {
        path: '2022/SummerSchool',
        component: SummerSchool
      },
    ]
  },
  {
    path: '/Publication',
    component: Publication
  },
  {
    path: '/Member',
    component: Member
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/Contact',
    component: Contact
  },
  {
    path: '/Research',
    component: Research
  },
  {
    path: '/Alumni',
    component: Alumni
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
