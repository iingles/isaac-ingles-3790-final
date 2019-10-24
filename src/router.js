import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Workspace from './views/Workspace.vue'
//lazy load these when I get the chance
import Help from './views/Help.vue'
import About from './views/About.vue'
import Settings from './views/Settings.vue'
import Logs from './views/Logs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'root',
      path: '*',
    },
    {
      name: 'Dashboard',
      path: '/',      
      component: Dashboard,
    },
    {
      name: 'Workspace',
      path: '/workspace',      
      component: Workspace,
    },
    {
      name: 'Settings',
      path: '/settings',      
      component: Settings,
    },
    {
      name: 'Help',
      path: '/help',      
      component: Help,
    },
    {
      name: 'About',
      path: '/about',      
      component: About,
    },
    {
      name: 'Logs',
      path: '/logs',
      component: Logs,
    }
  ]

})
