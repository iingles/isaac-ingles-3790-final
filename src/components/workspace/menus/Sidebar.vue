<template>
    <v-container>
        <v-card class="pa-3">
            <v-card-title class="sidebar-title mb-4">Search</v-card-title>
            <v-form>
                <v-text-field
                    v-model="searchInput"
                    label="search"
                >
                </v-text-field>
            </v-form>
            <div class="overline mb-4">History</div>
            <div class="sidebar-history">
                No History
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            searchInput: ''
        }
    }
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