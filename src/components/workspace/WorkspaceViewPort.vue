<template>
    <v-container>
        <v-row>
            <h1 v-emphasized>Results</h1>
        </v-row>
        <v-row>
            <h2 class="search-type-title">{{this.$route.params.workview | upper}}</h2>
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

export default {
    components: {
        SearchResults,
        ModuleEditor,
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
    .search-type-title {
        
    }

</style>