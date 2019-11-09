<template>
    <v-container>
        <v-row>
            <h1> Viewing {{this.$route.params.viewmode}}</h1>
        </v-row>
        <v-row>
            <h2>{{this.$route.params.workview}}</h2>
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

</style>