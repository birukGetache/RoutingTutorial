import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetail.vue'
import NotFound from '@/views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  {  path:'/jobs',
    name:"Jobs",
    component: Jobs
  },
  {

    path:"/jobs/:id",
    name:"JobDetails",
    component:JobDetails,
    props:true
  }

  //redirect 
  ,
  {
    path:"/all-jobs",
    redirect:'/jobs',
    name:"jobs",
    component:Jobs,
    props:true
  }
  // catch all 404
  
  ,
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component :NotFound
  }
  ]
})

export default router
