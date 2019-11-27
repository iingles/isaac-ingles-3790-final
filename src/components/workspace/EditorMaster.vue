<template>
    <v-col>
        <v-container>
            <!-- Dynamic component -->
            <compnent :is="activeEditor"> </component>
        </v-container>
    </v-col>
</template>

<script>

export default {
    components: {
        //Load components asynchronously (import returns a promise)
        'ModuleEditor': () => import('./ModuleEditor.vue'),
        'UserEditor': () => import('./UserEditor.vue')
    },
    data: ()=> {
        return {
            activeEditor: ''
        }
    }
}
</script>

<style scoped>

</style>