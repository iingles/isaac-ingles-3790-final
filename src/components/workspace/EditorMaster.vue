<template>
    <v-col>
        <v-container>
            <!-- Dynamic component -->
            <compnent :is="selectEditor($route.params.viewmode, $route.params.workview)" />
        </v-container>
    </v-col>
</template>

<script>
import ModuleEditor from './ModuleEditor.vue'
import UserEditor from './UserEditor.vue'


export default {
    components: {
        ModuleEditor,
        UserEditor,
    },
    data: ()=> {
        return {
            activeEditor: ''
        }
    },
    methods: {
        selectEditor(mode,view) {
            let vm = this
            if(mode == 'modules') {
                vm.activeEditor = ModuleEditor
                
            }
            if(mode == 'admin') {
                if(view == 'Users') {
                    vm.activeEditor = UserEditor
                }
            } 
            else {
                //default to ModuleEditor for now
                vm.activeEditor = ModuleEditor
            }
            return vm.activeEditor
        },
    }
}
</script>

<style scoped>

</style>