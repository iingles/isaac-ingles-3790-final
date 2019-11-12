<template>
     <v-container>
        <WorkspaceMenu 
        @changemode="change($event)"
        />
        <v-row>
            <v-col xs="12" md="3"> 
                <SideBar 
                    :view="this.viewMode"
                    @work="loadWorkspace($event)"
                />
            </v-col>
            <v-col xs="12" md="9">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>        
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
            viewMode: 'content',
            query: '',
         }
    },
    computed: {
        
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
