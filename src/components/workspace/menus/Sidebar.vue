<template>
    <v-container>
        <v-card class="pa-3">
            <v-card-title class="sidebar-title mb-4">Search</v-card-title>
            <v-form>
                <v-text-field
                    v-model="searchInput"
                    label="search"
                    prepend-inner-icon="mdi-magnify"
                >                
                </v-text-field>
            </v-form>
            <template v-if="this.view == 'content'">
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
                <v-btn block @click="loadThisWorkspace('users')">Users</v-btn>
                <v-btn block @click="loadThisWorkspace('permissions')">Permissions</v-btn>
            </template>
                
            <!-- <div class="overline mb-4"><v-icon>mdi-history</v-icon>History</div>
            <div class="sidebar-history">
                No History
            </div> -->
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
    .sidebar-title {
        border-bottom: 1px solid #ccc;
    }
    
    .sidebar-history {
        padding: 10px;
    }
</style>