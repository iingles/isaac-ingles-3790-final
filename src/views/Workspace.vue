<template>
     <v-container>
        <v-row>
            <v-col>
                <WorkSpaceNav />
            </v-col>
        </v-row>
        <v-row>
            <SideBar />
        </v-row>
    </v-container>
</template>

<script>
import WorkSpaceNav from './compoonents/workspace/menus/WorkspaceNav.vue'
import SideBar from './components/workspace/menus/Sidebar.vue'

export default {
    components: {
        WorkSpaceNav,
        SideBar,
    }
}
</script>

<style scoped>

</style>
