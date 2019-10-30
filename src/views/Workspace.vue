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
            workMode: 'none',
            viewPort: {
                name: 'Search Results', 
                params: { 
                    //id: this.$route.params.id
                },
                query: { 
                   search: 'hi',
                },
                //also pass hash fragment; here it will 
                //go to the #data section of the edit page
                //hash: '#data',
            },
        }
    },
    computed: {
        
    },
    methods: {
        change(theEvent) {
            //change workspace view to content, design, or admin
            this.viewMode = theEvent
            this.$router.push('/workspace/' + this.viewMode)
        },
        loadWorkspace(workView) {
            this.$router.push('/workspace/' + this.viewMode + '/' + workView)
            this.workMode = workView
        },
    },
}
</script>

<style scoped>

</style>
