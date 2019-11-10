<template>
    <v-container>
        <v-row>
            <h1 v-emphasized> Viewing {{this.$route.params.viewmode}}</h1>
        </v-row>
        <v-row>
            <!-- <h2>{{this.$route.params.workview | upper}}</h2> -->
        </v-row>
        <v-row>
            <template v-if="search">
                <SearchResults />
            </template>            
            <template v-if="editor">
                <ModuleEditor />
            </template>
        </v-row>
    </v-container>
</template>

<script>
import SearchResults from "./SearchResults.vue"
import ModuleEditor from "./ModuleEditor.vue"
import UserManagement from "./UserManagement.vue"

export default {
    components: {
        SearchResults,
        ModuleEditor,
        UserManagement
    },
    data: () => {
        return {
            search: true,
            editor: false,
        }
    }
}
</script>

<style scoped>

</style>