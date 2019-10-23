import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'Dashboard',
      path: '/',      
      component: Dashboard
    },
  ]

})
