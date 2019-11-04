<template>
    <v-container>
        <h1>Dashboard</h1>
        <h2>Use the lefthand slideout menu to navigate.</h2>
        <v-data-table
        :v-model="selected"
        :headers="headers"
        :items="modules"
        :items-per-page="5"
        class="elevation-1"
        >
            <template v-slot:top>
                <v-toolbar class="green lighten-1 white--text">
                    <v-toolbar-title>Recently Edited</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </template>
        </v-data-table>
        <v-row>
            <!-- 
            Eventually I could pull all of these dynamically, maybe even
            make them their own components -- depending on how complicated they get
             -->
            <v-col>
                <v-card class="card-title">
                    <v-card-title class="light-blue darken-1 white--text" >Alerts</v-card-title>
                    <v-list>
                        <v-list-item>Lorem Ipsum: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-list-item>
                        <v-list-item>Excepteur sint: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </v-list-item>
                        <v-list-item>Lorem Ipsum: velit esse cillum dolore eu fugiat nulla pariatur. </v-list-item>
                        <v-list-item>Ut enim ad minim: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card class="card-title">
                    <v-card-title class="light-blue darken-1 white--text">Logs</v-card-title>
                    <v-list>
                        <v-list-item>Lorem Ipsum: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-list-item>
                        <v-list-item>Excepteur sint: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </v-list-item>
                        <v-list-item>Lorem Ipsum: velit esse cillum dolore eu fugiat nulla pariatur. </v-list-item>
                        <v-list-item>Ut enim ad minim: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    components: {
        
    },
    data: () => {
        return {
             selected: [], 
        headers: [
            {
                text: 'ID',
                align: 'left',
                sortable: false,
                value: 'id',
            },
            { text: 'Name', value: 'name' },
            { text: 'Internal Name', value: 'internalName' },
            { text: 'Template', value: 'template' },
            { text: 'Created', value: 'created' },
            { text: 'Version', value: 'version' },
        ],
        }       
    },
}
</script>

<style scoped>

</style>