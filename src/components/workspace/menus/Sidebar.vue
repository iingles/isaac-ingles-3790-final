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
                <v-btn block to="">Modules</v-btn>
                <v-btn block to="">Articles</v-btn>
                <v-btn block to="">Images</v-btn>
                <v-btn block to="">Videos</v-btn>
                <v-btn block to="">Audio</v-btn>
                <v-btn block to="">Feeds</v-btn>
            </template>
            <template v-if="this.view == 'design'">
                <v-btn block to="">Templates</v-btn>
                <v-btn block to="">Styles</v-btn>
                <v-btn block to="">Themes</v-btn>
                <v-btn block to="">Scripts</v-btn>
                <v-btn block to="">Design Images</v-btn>
            </template>
            <template v-if="this.view == 'admin'">
                <v-btn block to="">Users</v-btn>
                <v-btn block to="">Permissions</v-btn>
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