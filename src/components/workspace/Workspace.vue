<template>
     <v-container>
        <v-row>
            <SideBar />
            workspace
        </v-row>
    </v-container>
</template>

<script>
import SideBar from './menus/Sidebar.vue'

export default {
    components: {
        SideBar,
    }
}
</script>

<style scoped>

</style>
