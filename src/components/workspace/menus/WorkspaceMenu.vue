<template>
    <v-container>
        <v-row>
            <h1 class="workspace-link" :class="{active: isActive==1}" @click="activeView='content', isActive = 1">Content</h1>
            <h1 class="workspace-link" :class="{active: isActive==2}" @click="activeView='design', isActive= 2">Design</h1>
            <h1 class="workspace-link" :class="{active: isActive==3}" @click="activeView='admin', isActive = 3">Admin</h1>
        </v-row>
    </v-container>    
</template>

<script>

export default {
    data: ()=> {
        return {
            activeView: '',
            isActive: 1, //1 by default
        }
    },
    watch: {
        activeView() {
            this.$emit('changemode', this.activeView)
        }
    }
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

