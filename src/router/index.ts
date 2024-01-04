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
import baseball2023 from '../views/News/2023/baseball2023.vue'
import Baseseminar from '../views/News/2023/Baseseminar.vue'
import BTR from '../views/News/2023/BTR.vue'
import Cupum from '../views/News/2023/Cupum.vue'
import Finalpresentation from '../views/News/2023/Finalpresentation.vue'
import hEART from '../views/News/2023/hEART.vue'
import huyugassyuku from '../views/News/2023/huyugassyuku.vue'
import Ibaraki from '../views/News/2023/Ibaraki.vue'
import Izu from '../views/News/2023/Izu.vue'
import JSCE_autumn2023 from '../views/News/2023/JSCE_autumn2023.vue'
import JSCE_spring from '../views/News/2023/JSCE_spring.vue'
import MasterPresentation from '../views/News/2023/MasterPresentation.vue'
import Murakamisama from '../views/News/2023/Murakamisama.vue'
import SummerSchool2023 from '../views/News/2023/SummerSchool2023.vue'
import SunadaSurvey from '../views/News/2023/SunadaSurvey.vue'
import Tabletennis from '../views/News/2023/Tabletennis.vue'
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
        path: '2023/baseball2023',
        component: baseball2023
      },
      {
        path: '2023/Baseseminar',
        component: Baseseminar
      },
      {
        path: '2023/BTR',
        component: BTR
      },
      {
        path: '2023/Cupum',
        component: Cupum
      },
      {
        path: '2023/Finalpresentation',
        component: Finalpresentation
      },
      {
        path: '2023/hEART',
        component: hEART
      },
      {
        path: '2023/huyugassyuku',
        component: huyugassyuku
      },
      {
        path: '2023/Ibaraki',
        component: Ibaraki
      },
      {
        path: '2023/Izu',
        component: Izu
      },
      {
        path: '2023/JSCE_autumn2023',
        component: JSCE_autumn2023
      },
      {
        path: '2023/JSCE_spring',
        component: JSCE_spring
      },
      {
        path: '2023/MasterPresentation',
        component: MasterPresentation
      },
      {
        path: '2023/Murakamisama',
        component: Murakamisama
      },
      {
        path: '2023/SummerSchool2023',
        component: SummerSchool2023
      },
      {
        path: '2023/SunadaSurvey',
        component: SunadaSurvey
      },
      {
        path: '2023/Tabletennis',
        component: Tabletennis
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
