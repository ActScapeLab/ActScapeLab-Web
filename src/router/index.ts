import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import MemberTop from '../views/Member/Top.vue'
import Alumni from '../views/Member/Alumni.vue'
import News from '../views/News.vue'
import NewsTop from '../views/News/Top.vue'
import CPIJ from '../views/News/2022/CPIJ.vue'
import JSCE_fall from '../views/News/2022/JSCE_fall.vue'
import SummerSchool from '../views/News/2022/SummerSchool.vue'
import Assignment from '../views/News/2023/Assignment.vue'
import Finalpresentation from '../views/News/2023/Finalpresentation.vue'
import Izu from '../views/News/2023/Izu.vue'
import Publication from '../views/Publication.vue'
import Research from '../views/Research.vue'

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
    component: Member,
    children: [
      {
        path: '',
        component: MemberTop
      },
      {
        path: 'Alumni',
        component: Alumni
      },
    ]
  },
  {
    path: '/News',
    component: News,
    children: [
      {
        path: '',
        component: NewsTop
      },
      {
        path: '2022/CPIJ',
        component: CPIJ
      },
      {
        path: '2022/JSCE_fall',
        component: JSCE_fall
      },
      {
        path: '2022/SummerSchool',
        component: SummerSchool
      },
      {
        path: '2023/Assignment',
        component: Assignment
      },
      {
        path: '2023/Finalpresentation',
        component: Finalpresentation
      },
      {
        path: '2023/Izu',
        component: Izu
      },
    ]
  },
  {
    path: '/Publication',
    component: Publication
  },
  {
    path: '/Research',
    component: Research
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
