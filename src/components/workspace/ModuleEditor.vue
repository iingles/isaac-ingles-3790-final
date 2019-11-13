<template>
    <v-container>
        <!-- 
            TODO: 
            Add a warning to the route to ask if the user really wants to leave 
            without saving if they hit the "back" button

            Add modal windows when save/cancel buttons are pushed to verify
            save or cancel

            Pull information from templates to only display what the templates have 
            (i.e. text fields, content areas, image areas, etc.)            
         -->
         <v-card class="pa-10 xs-12 sm-12">
            <v-card-title class="mb-10 pa-0 editor-title red--text">Editing {{ this.$route.params.id }}</v-card-title>          
            <div>
                <p>Created: {{ mod.created }}</p>
                <p>Version: {{ mod.version }}</p>
                <p>ID: {{ mod.id }} </p>
                <v-combobox
                    :items="desTemplates"
                    :value="mod.template"
                    label="Template"
                ></v-combobox>
                <v-checkbox
                    v-model="changeInternalName"
                    label="Change Internal Name"
                >                    
                </v-checkbox>
                <v-text-field
                    :value="mod.internalName"
                    label="Internal (system) Name"
                    :disabled="!changeInternalName"
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
                ></v-text-field>
                <!-- <CKEditor :editor="editor" /> -->
                <v-textarea
                label="Content Area 1"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                >
                </v-textarea>
            </div>
            <v-btn color="red" light @click="confirmCancel(this.$route.params.id)">Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" light @click="confirmSave(this.$route.params.id)">Save</v-btn>            
        </v-card>
    </v-container>
</template>

<script>
import contentModules from '../../assets/modules.js'
import designTemplates from '../../assets/templates.js'
//Use CKEditor for the wsiwyg editor
// import CKEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    // components: {
    //     CKEditor,
    // },
    data: () => {
        return {
            modules: contentModules,
            desTemplates: [],
            mod: 'test',
            changeInternalName: false,
            changeModName: false,
            // editor: ClassicEditor,
            // editorData: '<p>Content of the editor.</p>',
            // editorConfig: {
                // The configuration of the editor.
            // }
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
       for(let i = 0; i < designTemplates.length; i++) {
            vm.desTemplates[i] = designTemplates[i].name
       }
    },
    computed: {
        confirmCancel(moduleID) {
            return this.$store.getters.modal
        },
        confirmSave(moduleID) {
            return this.$store.getters.modal
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
