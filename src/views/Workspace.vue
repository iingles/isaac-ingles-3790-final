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
            viewMode: '',
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
