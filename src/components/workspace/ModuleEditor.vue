<template>
    <v-container>        
         <v-card class="pa-10">
            <v-card-title class="mb-10 pa-0 editor-title red--text">Editing {{ this.$route.params.id }}</v-card-title>          
            <div>
                <p>Created: {{ mod.created }}</p>
                <p>Version: {{ mod.version }}</p>
                <p>ID: {{ mod.id }} </p>
                <v-checkbox
                    v-model="changeInternalName"
                    label="Change Internal Name"
                >                    
                </v-checkbox>
                <v-text-field
                    :value="mod.internalName"
                    label="Internal (system) Name"
                    :disabled="!changeInternalName"
                    readonly=""
                ></v-text-field>
                <v-checkbox
                    v-model="changeModName"
                    label="Change Module Name"
                >                    
                </v-checkbox>
                <v-text-field
                    :value="mod.name"
                    label="Module Name"
                    :disabled="!changeModName"
                    readonly=""
                ></v-text-field>
                <v-textarea
                label="Content Area 1"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                >
                </v-textarea>
            </div>
            <v-btn color="red" light>Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" light>Save</v-btn>            
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
            changeInternalName: false,
            changeModName: false,
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
