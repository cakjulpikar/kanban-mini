import Vue from 'vue'
import Router from 'vue-router'
import Kanban from '@/components/Kanban'
import AddBackLog from '@/components/AddBackLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Kanban',
      component: Kanban
    }, {
      path: '/add',
      name: 'AddBackLog',
      component: AddBackLog
    }
  ]
})
