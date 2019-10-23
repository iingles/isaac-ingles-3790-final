<template>
     <v-container>
        <v-row>
            <v-col xs="12" md="3"> 
                <SideBar />
            </v-col>
            <v-col xs="12" md="9">
                <SearchResults />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SideBar from './menus/Sidebar.vue'
import SearchResults from './SearchResults.vue'

export default {
    components: {
        SideBar,
        SearchResults,
    }
}
</script>

<style scoped>

</style>
