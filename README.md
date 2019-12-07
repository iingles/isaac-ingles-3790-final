# Isaac Ingles 
# DGM3790 Final
# Fall 2019


1. ### Conditional logic and JavaScript array methods to render large lists:
    * In the SearchResults.vue component: src/components/workspace/SearchResults.vue, I
    1.  Pull data from two data files, src/data/modules.js and src/data/templates.js and render them in the v-data-table:
        * [workspace>content>modules](https://iingles-3790-final.netlify.com/workspace/content/modules)
        * [workspace>design>templates](https://iingles-3790-final.netlify.com/workspace/design/templates)
    1.  Take the data from the uinames API, put it in the local store, and then render them in the v-data-table.
        * [workspace>admin>users](https://iingles-3790-final.netlify.com/workspace/admin/Users)
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
        * I also pass params via vue-router from /src/views/Help.vue to /src/components/HelpConfirmation.vue
        
    1. #### Custom events: 

        These menus use events to trigger navigation or changes in class:
        1. /src/components/workspace/menus/Sidebar.vue
        2. /src/components/workspace/menus/WorkspaceMenu.vue

        The SearchResults component uses events to trigger a change in route; passing information along the way
        1. /src/components/workspace/SearchResults.vue

    1. #### Local Store:
        Current store file is located at /src/store.js.  
        * __Note:__ *The folder "store" is a work in progress; I am splitting the store into individual files and have not implemented it yet. The active store file is still at /src/store.js.*
        I use the local store throughout the application; most notably for
        1. State of the active user; right now only the "loggedIn" property is used and changed when the "Logout" button is clicked or when the user logs back in.  The username and password properties also update when the user logs in and the username can be seen above the "login" button in the left slideout menu.  Source for that logic is in /src/components/shared/Header.vue and in /src/views/Login.vue.
        1. Modal windows, which are triggered
            * When a user attempts to logout
            * When a user clicks "save" or "cancel" in the editor views
            * When a user attempts to navigate away from an editor view without saving __Note:__*I broke this somehow but the code is still there*

            Source for the modal windows is located in 
            * src/components/shared/Modal.vue
            * src/components/shared/Header.vue
            * the editor components located in /src/components/workspace
            * /src/mixins/editorModal.js
            
      
1. ### Present a form for user input that provides useful form validation and feedback:
   1. [Login Page](https://iingles-3790-final.netlify.com/login), source located at /src/views/Login.vue 
   * **This will only display if the user's login state is false, right now the default is set to "true" so you don't have to login every time.  You must "logout" if you can't see the form.**
   2. [Help Page](https://iingles-3790-final.netlify.com/Help), source located at /src/views/Help.vue

1. ### Custom directive used on at least one component:
    * There is a global directive called "emphasized" declared in /src/main.js
    * This directive is used in the [Workspace View Port](https://iingles-3790-final.netlify.com/workspace/content/modules) to change the color and various other styles of the "results" text.
    * source located at /src/main.js and /src/components/workspace/WorkspaceViewPort.vue
    
1. ### Use a mix of animations and transitions to enhance some aspects of your project.
   * I use animations any time the main route is changed.  Source is in /src/App.vue
   * There are also animations on transitions that happen in the Workspace view, source is at /src/views/Workspace.vue

1. ### Filters:
    global filter folder: /src/filters
    * __Note:__ *I am currently working on a filter for the search function; as of yet __searchFilter.js__ is unused.*
    * The "Help Confirmation" page uses a filter to capitalize the first letter of a person's first and last names.  First you need to fill out and submit the form on the [Help Page](https://iingles-3790-final.netlify.com/Help) .  Source is at src/components/HelpConfirmation.vue.

1. ### Mixins:
    global mixin folder: /src/mixins    

    1. /src/components/workspace/UserEditor.vue :
        * __editorLoadInfo.js__
        * __editorModal.js__
    1. /src/components/workspace/ModuleEditor.vue :
        * __cmsDirectives.js__

1. ### Connect to a server using HTTP and display retrieved data (using Axios):
    * I request 25 items from the uinames api, and populate a v-data-table located 
    in the SearchResults.vue component
    * Source is at src/components/workspace/SearchResults.vue
    * Netlify Link: [workspace>admin>users](https://iingles-3790-final.netlify.com/workspace/admin/Users)
    * Those results are then stored in the local store: /src/store.js.

1. ### Provide at least 3 different routes with navigation between them using vue-router:
   * Main router file is in /src/router.js
   * Main route components are found in /src/views
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
   * I am in the process of converting my store into individual files; so the folder at /src/store/ doesn't do anything yet - __the functional store is still located at /src/store.js__
   * I use global state management for:
   1. Keeping track of the current user's status (login/logout)
   1. The state of the modal windows (display/don't display, get messages from calling component)
   1. The API data downloaded from uinames.com
   * Apart from the main store file, the logic for state management is spread through much of the application.
   
1. ### Structure, document, and deploy your final project code according to common industry practices.
    * I'd appreciate any feedback you have after you review this part.
1. ### Github and Netlify URLs
    * [Github](https://github.com/iingles/isaac-ingles-3790-final)
    * [Netlify](https://iingles-3790-final.netlify.com/)
