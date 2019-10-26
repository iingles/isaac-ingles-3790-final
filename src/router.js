import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Workspace from './views/Workspace.vue'
//lazy load these when I get the chance
import Help from './views/Help.vue'
import About from './views/About.vue'
import Settings from './views/Settings.vue'
import Logs from './views/Logs.vue'
import SearchResults from './components/workspace/SearchResults.vue'
import ModuleEditor from './components/workspace/ModuleEditor.vue'
import ModuleDetail from './components/workspace/ModuleDetail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    // {
    //   name: 'root',
    //   path: '*',
    // },
    {
      name: 'Dashboard',
      path: '/',      
      component: Dashboard,
    },
    {
      name: 'Workspace',
      path: '/workspace',      
      component: Workspace,
      children: [
        {
          path: '/workspace/searchresults',
          name: 'Search Results',
          component: SearchResults,
        },
        {
          path: '/workspace/content',
          name: 'Content Editor',
          component: ModuleEditor,
          children: [
            {
              path: '/workspace/content/:id',
              name: 'Module Detail',
              component: ModuleDetail,
            }
          ]
        }
      ],
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
