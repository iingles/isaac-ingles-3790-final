<template>
     <v-container>
        <WorkspaceMenu 
        @changemode="change($event)"
        />
        <v-row>
            <v-col xs="12" md="3"> 
                <SideBar />
            </v-col>
            <v-col xs="12" md="9">
                <ModuleEditor />
                <!-- <router-view></router-view> -->
                <!-- <ul>
                    <router-link
                        class="module-link"
                        tag="li"  
                        v-for="module in modules" 
                        :key="module.id" 
                        :to="'/workspace/' + module.name"
                        style="cursor: pointer"
                    >
                        Module {{ module.id }} {{ module.name}}
                    </router-link>
                </ul> -->
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SideBar from '../components/workspace/menus/Sidebar.vue'
import WorkspaceMenu from '../components/workspace/menus/WorkspaceMenu.vue'
//do this here for now
import ModuleEditor from  '../components/workspace/ModuleEditor.vue'
import contentModules from '../assets/modules.js'

export default {
    components: {
        SideBar,
        WorkspaceMenu,
        ModuleEditor,
    },
    data: () => {
        return {
            //default to content view
            viewMode: 'content',
            modules: contentModules,
        }
    },
    methods: {
        change(theEvent) {
            //change workspace view to content, design, or admin
            this.viewMode = theEvent
        }
    }
}
</script>

<style scoped>

</style>
