import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import ReviewList from '@/components/ReviewList.vue'


const routes = [
  {
    path: '/Home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
