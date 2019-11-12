<template>
    <v-container>
        <v-row>
            <h1 v-emphasized>Results</h1>
        </v-row>
        <v-row>
            <transition name="slide" mode="out-in">
                <!-- <h2 class="search-type-title">{{ this.$route.params.workview | upper}}</h2> -->
            </transition>
            {{ this.searchString }}
                <!-- <ul>
                    <li v-for="fruit in searchFilter" :key="fruit">
                        {{ fruit }}
                    </li>
                </ul> -->
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
    props: {
        searchString: String,
    },
    data: () => {
        return {
            search: true,
            editor: false,
            fruits: ['Apple', 'Bananna', 'Mango', 'Melon'],
        }
    },
    // watch: {
    //     searchString() {
    //         return this.searchString
    //         // return this.fruits.filter(element => {
    //         //     return element.match(this.searchString)
    //         // })
    //     }
    // }

}
</script>

<style scoped>


</style>