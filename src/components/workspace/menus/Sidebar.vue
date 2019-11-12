<template>
    <v-container>
        <v-card class="pa-3">
            <v-card-title class="mb-4">Menu</v-card-title>
             <v-tooltip left> 
                <template v-slot:activator="{ on }">
                    <v-icon v-on="on">mdi-help</v-icon>
                </template>
                <span>Lorem Ipsum Dolor sit amet</span>
            </v-tooltip>      
            <v-form>
                <v-text-field
                    v-model="searchInput"
                    label="search"
                    prepend-inner-icon="mdi-magnify"
                >                
                </v-text-field>
            </v-form>
            <template v-if="this.view == 'content'">
                <!-- Could I do this dynamically - like load/loop the workspaces from a data file? -->
                <v-btn block @click="loadThisWorkspace('modules')">Modules</v-btn>
                <v-btn block @click="loadThisWorkspace('articles')">Articles</v-btn>
                <v-btn block @click="loadThisWorkspace('content-images')">Images</v-btn>
                <v-btn block @click="loadThisWorkspace('videos')">Videos</v-btn>
                <v-btn block @click="loadThisWorkspace('audio')">Audio</v-btn>
                <v-btn block @click="loadThisWorkspace('feeds')">Feeds</v-btn>
            </template>
            <template v-if="this.view == 'design'">
                <v-btn block @click="loadThisWorkspace('templates')">Templates</v-btn>
                <v-btn block @click="loadThisWorkspace('styles')">Styles</v-btn>
                <v-btn block @click="loadThisWorkspace('themes')">Themes</v-btn>
                <v-btn block @click="loadThisWorkspace('scripts')">Scripts</v-btn>
                <v-btn block @click="loadThisWorkspace('design-images')">Design Images</v-btn>
            </template>
            <template v-if="this.view == 'admin'">
                <v-btn block @click="loadThisWorkspace('Users')">Users</v-btn>
                <v-btn block @click="loadThisWorkspace('Permissions')">Permissions</v-btn>
                <v-btn block @click="loadThisWorkspace('Keywords')">Keywords</v-btn>
                <v-btn block @click="loadThisWorkspace('Database')">Database</v-btn>
            </template>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: {
        view: String,
    },
    data: () => {
        return {
            searchInput: '',
        }
    },
    methods: {
        loadThisWorkspace(work) {
            this.$emit('work', work)
        },
    },
}
</script>

<style scoped>

    .v-card__title {
    background-color: #655B53;
    color: #fff;
    border-bottom: 1px solid #ccc;
    }

    .sidebar-history {
        padding: 10px;
    }
</style>