<template>
    <v-container>
        <v-row>
            <h1 v-emphasized>Results</h1>
        </v-row>
        <v-row>
            <transition name="slide" mode="out-in">
                <h2 class="search-type-title">{{this.$route.params.workview | upper}}</h2>
            </transition>
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