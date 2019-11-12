<template>
    <v-container>
        <v-spacer></v-spacer>
        <v-data-table
            :v-model="selected"
            :headers="headers"
            :items-per-page="5"
            class="elevation-1 v-card"
            >
            <template v-slot:top>
                <v-toolbar class="white--text">
                    <v-toolbar-title>Recently Edited</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
            </template>
        </v-data-table>
        <v-spacer></v-spacer>
        <v-row>
            <!-- 
            Eventually I could pull all of these dynamically, maybe even
            make them their own components -- depending on how complicated they get
             -->
            <v-col>
                <v-card class="rounded-card" to="/logs">
                    <v-card-title class="alert" >Alerts</v-card-title>
                    <v-list>
                        <v-list-item>Lorem Ipsum: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-list-item>
                        <v-list-item>Excepteur sint: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </v-list-item>
                        <v-list-item>Lorem Ipsum: velit esse cillum dolore eu fugiat nulla pariatur. </v-list-item>
                        <v-list-item>Ut enim ad minim: consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
            <v-col>
                <v-card class="rounded-card" to="/logs">
                    <v-card-title>Logs</v-card-title>
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
.v-toolbar {
    background-color: #655B53;
}

.v-card__title {
    background-color: #655B53;
    color: #fff;
}

.v-card__title.alert {
    background-color: #8D6657;
}

.v-card {
    border-radius: 30px 30px 0 0!important;
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