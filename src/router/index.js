import Vue from 'vue'
import VueRouter from 'vue-router'
import ChallansRecieved from '@/pages/challans/ChallansRecieved'
import MakeChallans from '@/pages/challans/MakeChallans'
import EnterpriseDetail from '@/pages/enterprises/EnterpriseDetail'
import EnterpriseRegistration from '@/pages/enterprises/EnterpriseRegisteration'
import EnterpriseList from '@/pages/enterprises/EnterpriseList'
import NotFound from '@/pages/NotFound'

Vue.use(VueRouter)

const routes = [
  
  { path: '/', redirect: '/enterprises' },
  { path: '/enterprises', component: EnterpriseList },
  { path: '/enterprises/:id', component: EnterpriseDetail, props: true, children: [
    { path: 'make-challans', component: MakeChallans }
  ]},
  { path: '/register', component: EnterpriseRegistration },
  { path: '/challans', component: ChallansRecieved },
  { path: '/:notFound(.*)', component: NotFound },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
