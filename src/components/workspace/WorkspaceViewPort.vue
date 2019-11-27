<template>
    <v-container>
        <v-row>
            <h1 v-emphasized>Results</h1>
        </v-row>
        <v-row>
            <h2 class="search-type-title">{{ this.$route.params.workview }}</h2>
        </v-row>
        <v-row>
            <transition name="slide" mode="out-in">
                <template v-if="search">
                    <SearchResults 
                        :filterText="this.searchString"
                        
                    />
                </template>
            </transition>
            <transition name="slide" mode="out-in">         
                <template v-if="editor">
                  <EditorMaster />
                </template>
            </transition>
        </v-row>
    </v-container>
</template>

<script>
import SearchResults from "./SearchResults.vue"
import EditorMaster from "./EditorMaster.vue"

export default {
    components: {
        SearchResults,
        EditorMaster,
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
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }
    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }

</style>