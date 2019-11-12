<template>
    <div class="card-row">
        <h1>Logs</h1>
        <v-row>
            <!-- I can set these up to get the data from elsewhere -->
            <v-col lg="12" md="12" sm="12" xs="12">
                <v-card class="v-card blue lighten-1">
                    <v-card-title class="card-title">Statistics</v-card-title>
                    <v-container fluid>
                        <v-sparkline
                            :key="25"
                            :smooth="16"
                            :color="'black'"
                            :line-width="1"
                            :value=[12,2,15,77,35,4,55,25,43,55,34,10,1,22,1,0,24,5,4,1,23]
                            width="100"
                            height="10"
                            auto-draw
                            stroke-linecap="round"
                            
                        >
                        </v-sparkline>
                        <v-divider></v-divider>
                        <v-sparkline
                            :key="20"
                            :smooth="16"
                            :color="'#0000ff'"
                            :line-width="1"
                            :value=[1,5,4,1,11,10,1,22,1,0,25,1,15,1,10,1,25,14,20,10,22,12]
                            width="100"
                            height='10'
                            auto-draw
                            stroke-linecap="round"
                        >
                        </v-sparkline>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <!-- 
            Eventually I could pull all of these dynamically, maybe even
            make them their own components -- depending on how complicated they get
             -->
            <v-col>
                <v-card class="v-card red lighten-1">
                    <v-card-title>Alerts</v-card-title>
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
                <v-card class="v-card blue lighten-1">
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
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .v-card {
        border-radius: 30px 30px 0 0!important;
    }
    .card-row {
        width: 100%;
    }

</style>