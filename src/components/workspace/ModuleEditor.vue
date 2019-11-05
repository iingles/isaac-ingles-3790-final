<template>
    <v-container>        
         <v-card class="pa-10">
            <v-card-title class="mb-10 pa-0 editor-title red--text">Editing {{ this.$route.params.id }}</v-card-title>          
            <div>
                <p>id: {{ mod.id }}</p>
                <p>Internal Name: {{ mod.internalName }}</p>
                <p>Name: {{ mod.name }}</p>
                <p>Created: {{ mod.created }}</p>
                <p>Version: {{ mod.version }}</p>
            </div>
        </v-card>
    </v-container>
</template>

<script>
import contentModules from '../../assets/modules.js'

export default {
    data: () => {
        return {
            modules: contentModules,
            mod: 'test',
        }
    },
    created() {
       let vm = this

       for(let i = 0; i < vm.modules.length; i++) {
            if(vm.modules[i].internalName == this.$route.params.id) {
                vm.mod = vm.modules[i]
                break
            }
       }
    }
}
</script>

<style scoped>
    .editor-title {
        /* color: red; */
        border-bottom: 1px dotted #ccc
    }
</style>
