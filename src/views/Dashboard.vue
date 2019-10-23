<template>
    <v-container>
        <v-row>
            <WorkspaceMenu />
        </v-row>
        <v-row>
            <Workspace />
        </v-row>
    </v-container>
</template>

<script>
import WorkspaceMenu from '../components/workspace/menus/WorkspaceMenu.vue'
import Workspace from '../components/workspace/Workspace.vue'

export default {
    components: {
        WorkspaceMenu,
        Workspace,
    }
}
</script>

<style scoped>

</style>