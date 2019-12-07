<template>
    <v-container>
        <v-row class="unselectable">
            <h1 class="workspace-link" :class="{active: isActive=='content'}" @click="clickView='content', isActive = 'content'">Content</h1>
            <h1 class="workspace-link" :class="{active: isActive=='design'}" @click="clickView='design', isActive= 'design'">Design</h1>
            <h1 class="workspace-link" :class="{active: isActive=='admin'}" @click="clickView='admin', isActive = 'admin'">Admin</h1>
        </v-row>
    </v-container>    
</template>

<script>

export default {
    props: {
        view: String,
    },
    data: ()=> {
        return {
            clickView: '',
            activeView: '',
            isActive: '', //1 by default
        }
    },
    watch: {
        clickView() {
            this.$emit('changemode', this.clickView) 
        },
        view() {
            //Watch for changes in the route so the class changes when you press the 'back' button or something;
            this.isActive = this.view
        }
    },
    created() {        
        let theView = this.$route.params.viewmode
        let theWork = this.$route.params.workview
        let vm = this

        //If we're coming from an outside link, set the active view accordingly
        //Else, just stick with the view param
        if(theView != undefined) {
            vm.isActive = this.$route.params.viewmode
        } else {
            vm.isActive = vm.view
        }
    },
}
</script>

<style scoped>
    .workspace-link {
        margin: 0 10px;
        cursor: pointer;
        color: #ccc;
    }

    .active {
        border-bottom: 3px solid red;
        color: #000;
    }
</style>

