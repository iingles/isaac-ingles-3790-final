<template>
    <v-container>
        <v-row class="unselectable">
            <h1 class="workspace-link" :class="{active: isActive=='content'}" @click="activeView='content', isActive = 'content'">Content</h1>
            <h1 class="workspace-link" :class="{active: isActive=='design'}" @click="activeView='design', isActive= 'design'">Design</h1>
            <h1 class="workspace-link" :class="{active: isActive=='admin'}" @click="activeView='admin', isActive = 'admin'">Admin</h1>
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
            activeView: '',
            isActive: 'content', //1 by default
        }
    },
    watch: {
        activeView() {
            this.$emit('changemode', this.activeView)
        },
        view() {
            this.activeView = this.view
            this.isActive = this.view
        }
    },
    created() {        
        this.activeView = this.view
        this.isActive = this.view
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

