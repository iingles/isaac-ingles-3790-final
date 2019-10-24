<template>
    <v-container>
        <!-- <v-row>
            <WorkspaceMenu 
                @changemode="change($event)"
            />
        </v-row>
        <v-row>
            <Workspace />
        </v-row> -->
    </v-container>
</template>

<script>
// import WorkspaceMenu from '../components/workspace/menus/WorkspaceMenu.vue'
// import Workspace from '../components/workspace/Workspace.vue'

export default {
    components: {
        // WorkspaceMenu,
        // Workspace,
    },
    data: () => {
        return {
            viewMode: '',
        }
    },
    methods: {
        change(theEvent) {
            this.viewMode = theEvent
        }
    }
}
</script>

<style scoped>

</style>