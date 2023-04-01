import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Contact from '../views/Contact.vue'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import MemberTop from '../views/Member/Top.vue'
import Alumni from '../views/Member/Alumni/Alumni.vue'
import Oyama from '../views/Member/Staff/Oyama.vue'
import News from '../views/News.vue'
import NewsTop from '../views/News/Top.vue'
import InfraPlanManage from '../views/News/2022/InfraPlanManage.vue'
import SummerSchool from '../views/News/2022/SummerSchool.vue'
import Assignment from '../views/News/2023/Assignment.vue'
import Finalpresentation from '../views/News/2023/Finalpresentation.vue'
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
        path: 'Alumni/Alumni',
        component: Alumni
      },
      {
        path: 'Staff/Oyama',
        component: Oyama
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
        path: '2022/InfraPlanManage',
        component: InfraPlanManage
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
