<template>
    <v-container>
        <v-row>
            <h1 v-emphasized>Results</h1>
        </v-row>
        <v-row>
            <h2 class="search-type-title">{{ this.$route.params.workview }}</h2>
        </v-row>
        <v-row>
            <template v-if="search">
                <SearchResults 
                    :filterText="this.searchString"
                />
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
    props: {
        searchString: String,
    },
    data: () => {
        return {
            search: true,
            editor: false,
        }
    },

}
</script>

<style scoped>


</style>