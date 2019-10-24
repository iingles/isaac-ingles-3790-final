<template>
     <v-container>
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


export default {
    components: {
        SideBar,
    }
}
</script>

<style scoped>

</style>
