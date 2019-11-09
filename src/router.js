import Vue from 'vue'
import Router from 'vue-router'
//import { resolve } from 'path'

import Dashboard from './views/Dashboard.vue'

//lazy load these when I get the chance
//import Workspace from './views/Workspace.vue'
//import Help from './views/Help.vue'
//import About from './views/About.vue'
//import Settings from './views/Settings.vue'
//import Logs from './views/Logs.vue'
// import SearchResults from './components/workspace/SearchResults.vue'
// import ModuleEditor from './components/workspace/ModuleEditor.vue'
// import ModuleDetail from './components/workspace/ModuleDetail.vue'
//import WorkspaceViewPort from './components/workspace/WorkspaceViewPort.vue'
import UserManagement from './views/UserManagement.vue'

/* 
You can group lazy loading stuff using a third 
parameter, the groupName, which needs to be
passed into each routing function.  This makes the 
file bigger; but you may want to do this in certain 
situations rather than loading each route one at a time.
 */

//lazy loading with webpack:
const Workspace = resolve => {
  /*
  takes an array for the first arguement; inside the 
  array we set up the pathto the component we want to 
  load.

  The second arguement is another function that calls resolve again
  */
  require.ensure(
      ['./views/Workspace.vue'],
      () => {
          resolve(require('./views/Workspace.vue'))
      }
  )
}

const WorkspaceViewPort = resolve => {
  require.ensure(
     ['./components/workspace/WorkspaceViewPort.vue'],
     () => {
         resolve(require('./components/workspace/WorkspaceViewPort.vue'))
     }
 )
}

const Help = resolve => {
   require.ensure(
      ['./views/Help.vue'],
      () => {
          resolve(require('./views/Help.vue'))
      }
  )
}

const About = resolve => {
  require.ensure(
     ['./views/About.vue'],
     () => {
         resolve(require('./views/About.vue'))
     }
 )
}

const Settings = resolve => {
  require.ensure(
     ['./views/Settings.vue'],
     () => {
         resolve(require('./views/Settings.vue'))
     }
 )
}

const Logs = resolve => {
  require.ensure(
     ['./views/Logs.vue'],
     () => {
         resolve(require('./views/Logs.vue'))
     }
 )
}

const ModuleEditor = resolve => {
  require.ensure(
     ['./components/workspace/ModuleEditor.vue'],
     () => {
         resolve(require('./components/workspace/ModuleEditor.vue'))
     }
 )
}


Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      name: 'Dashboard',
      path: '*',
      component: Dashboard
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
      children: [
        {
          path:'/workspace/:viewmode',
          name:'Workspace View',
          component: WorkspaceViewPort,
        },
        {
          path: '/workspace/:viewmode/:workview',
          name: 'Workspace Detail',
          component: WorkspaceViewPort,
        },
        {
          path: '/workspace/:viewmode/:workview/editor/:id',
          name: 'Editing',
          component: ModuleEditor,
        },
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
    },
    {
      name: 'users',
      path: '/users',
      component: UserManagement,
    }
  ]

})
