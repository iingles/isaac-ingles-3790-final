# Isaac Ingles 
# DGM3790 Final
# Fall 2019


1. ### Conditional logic and JavaScript array methods to render large lists:
    * In the SearchResults.vue component: src/components/workspace/SearchResults.vue, I
    1.  Pull data from two data files, src/data/modules.js and src/data/templates.js and render them in the v-data-table.
    1.  Take the data from the uinames API, put it in the local store, and then render them in the v-data-table.
        [workspace>admin>users](https://iingles-3790-final.netlify.com/workspace/admin/Users)
        These individual items may be clicked and edited.

1. ### Encapsulate your code as VueJS single-file components:
   * The main component is App.vue, found in /src/App.vue
   * The non-dynamic route view components are found in /src/views
   * The rest of the components are found in /src/components

1. ### Work with the Vue-CLI to create and manage your project within a real development toolset:

1. ### Properly use Git for your source version control:
   * [My Github Profile](https://github.com/iingles) and [Github project page](https://github.com/iingles/isaac-ingles-3790-final/) should show my commit history.

1. ### Communication between components using 

    1. #### Props: 
        * /src/views/Workspace.vue --> /src/components/workspace/menus/Sidebar.vue
        * /src/views/Workspace.vue --> /src/components/workspace/menus/WorkspaceMenu.vue
        * /src/components/workspace/ModuleEditor.vue --> /src/components/workspace/editor/EditorDirectives.vue
        * 
    1. #### Custom events: 

    1. #### Local Store:
      
1. ### Present a form for user input that provides useful form validation and feedback:
   1. [Login Page](https://iingles-3790-final.netlify.com/login), source located at /src/views/Login.vue 
   * **This will only display if the user's login state is false, right now the default is set to "true" so you don't have to login every time.  You must "logout" if you can't see the form.**
   2. [Help Page](https://iingles-3790-final.netlify.com/Help), source located at /src/views/Help.vue

1. ### Custom directive used on at least one component:

1. ### Use a mix of animations and transitions to enhance some aspects of your project.
   * I use animations any time the main route is changed.  Source is in /src/App.vue
   * There are also animations on transitions that happen in the Workspace view, source is at /src/views/Workspace.vue

1. ### Filters:

1. ### Mixins:
    global mixin folder: /src/mixins
    __Note: I am currently working on a mixin for a search filter; as of yet **searchMixin.js** is unused.__

    1. /src/components/workspace/UserEditor.vue :
        * __editorLoadInfo.js__
        * __editorModal.js__
    1. /src/components/workspace/ModuleEditor.vue :
        * __cmsDirectives.js__

1. ### Connect to a server using HTTP and display retrieved data (using Axios):
    * I currently request 25 items from the uinames api, and populate a v-data-table located 
    in the SearchResults.vue component
    * Source is at src/components/workspace/SearchResults.vue
    * Netlify Link: [workspace>admin>users](https://iingles-3790-final.netlify.com/workspace/admin/Users)
    * Those results are then stored in the local store: /src/store.js.

1. ### Provide at least 3 different routes with navigation between them using vue-router:
   * Main router file is in /src/router.js
   * Main route components are fount in /src/views
   * Links to routes are: 
    1. [Dashboard](https://iingles-3790-final.netlify.com/)
    1. [Workspace](https://iingles-3790-final.netlify.com/workspace)
        1. [Content](https://iingles-3790-final.netlify.com/workspace/content)
        1. [Design](https://iingles-3790-final.netlify.com/workspace/design)
        1. [Admin](https://iingles-3790-final.netlify.com/workspace/admin)
         * *Each of the child routes of Workspace have dynamic child routes mapped to the specific items that are selected.*
    1. [Settings](https://iingles-3790-final.netlify.com/settings)
    1. [Logs](https://iingles-3790-final.netlify.com/logs)
    1. [Help](https://iingles-3790-final.netlify.com/help)
    1. [About](https://iingles-3790-final.netlify.com/about)
1. ### State Management using Vuex:
   * I am in the process of converting my store into individual files; but the functional store is still located at /src/store.js
   * I use global state management for:
   1. Keeping track of the current user's status (login/logout)
   1. The state of the modal windows (display/don't display, get messages from calling component)
   1. The API data downloaded from uinames.com
   * Apart from the main store file, the logic for state management is spread through much of the application.
   
1. ### Structure, document, and deploy your final project code according to common industry practices:

1. ### Github and Netlify URLs
