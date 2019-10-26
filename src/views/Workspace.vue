<template>
     <v-container>
        <WorkspaceMenu 
        @changemode="change($event)"
        />
        <v-row>
            <v-col xs="12" md="3"> 
                <SideBar 
                    :view="this.viewMode"
                    @work="loadWorkspace($event)"
                />
            </v-col>
            <v-col xs="12" md="9">
                <router-view></router-view>            
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SideBar from '../components/workspace/menus/Sidebar.vue'
import WorkspaceMenu from '../components/workspace/menus/WorkspaceMenu.vue'

export default {
    components: {
        SideBar,
        WorkspaceMenu,
    },
    data: () => {
        return {
            //default to content view
            viewMode: 'content',
        }
    },
    computed: {
        
    },
    methods: {
        change(theEvent) {
            //change workspace view to content, design, or admin
            this.viewMode = theEvent
            this.$router.push(this.$route.path + '/' + this.viewMode)
        },
        loadWorkspace(workView) {
            this.$router.push(this.$route.path + '/' + workView)
        },
    },
}
</script>

<style scoped>

</style>
