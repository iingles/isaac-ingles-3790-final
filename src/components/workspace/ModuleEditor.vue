<template>
    <v-container>        
         <v-card class="pa-10">
            <v-card-title class="mb-10 pa-0 editor-title">Editing</v-card-title>          
            <ul>
            <router-link
                    class="module-link"
                    tag="li"  
                    v-for="module in modules" 
                    :key="module.id" 
                    :to="'/workspace/moduleeditor/' + module.name"
                    style="cursor: pointer"
                >
                    Module {{ module.id }} {{ module.name}}
                </router-link>
            </ul>
            <!-- <router-view></router-view> -->
        </v-card>
    </v-container>
</template>

<script>
import contentModules from '../../assets/modules.js'

export default {
    data: () => {
        return {
            modules: contentModules,
        }
    },    
}
</script>

<style scoped>
    .editor-title {
        color: red;
        border-bottom: 1px dotted #ccc
    }
</style>
