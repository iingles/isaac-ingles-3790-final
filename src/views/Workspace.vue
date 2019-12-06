<template>
     <v-container>
        <WorkspaceMenu 
        @changemode="change($event)"
        :view="this.viewMode"
        />
        <v-row>
            <v-col xs="12" sm="12" md="4" lg="3" cols='12'> 
                <SideBar 
                    :view="this.viewMode"
                    @work="loadWorkspace($event)"
                    @searchEvent="getSearchString($event)"
                />                
            </v-col>
            <v-col xs="12" sm="12" md="8" cols='12'>
                <template v-if="this.$route.params.workview != null && this.$route.params.workview != '' && this.$route.params.workview != 'undefined'">                    
                    <transition name="slide" mode="out-in">                    
                        <router-view
                        :searchString="this.searchString"
                        :key="$route.params.workview"
                        ></router-view>
                    </transition>
                </template>
                <template v-else>
                    <v-card>
                        <p>
                            Sorry, there was an error!
                        </p>
                    </v-card>
                </template>   
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SideBar from '../components/workspace/menus/Sidebar.vue'
import WorkspaceMenu from '../components/workspace/menus/WorkspaceMenu.vue'

export default {
    components: {
        SideBar,
        WorkspaceMenu,
    },
    data: () => {
        return {
            //default to content view
            viewMode:'content',
            query: '',
            searchString: '',
         }
    },
    methods: {
        change(theEvent) {
            //change workspace view to content, design, or admin; catch the error
            //(was getting an error when the same button was clicked for the same route the client was on)
            this.viewMode = theEvent
            this.$router.push('/workspace/' + this.viewMode).catch(err => {})
        },
        loadWorkspace(workView) {
            this.query=workView
            this.$router.push('/workspace/' + this.viewMode + '/' + workView).catch(err => {})
        },
        getSearchString(evt) {
            this.searchString = evt
        }
    },
    watch: {
        '$route'() {
            this.viewMode = this.$route.params.viewmode
        }
    },
    beforeMount() {
        let vm = this
        if(this.$route.params.viewmode) {
            vm.viewMode = this.$route.params.viewmode
        }
    }
    
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
