export default {
     data: () => {
        return {
            modules: contentModules,
            templateNames: [],
            templates: designTemplates,
            selectedTemplateName: '',
            selectedTemplateHtml: '',
            mod: {},
            changeInternalName: false,
            changeModName: false,
            confirmLeave: false,
            nextRoute: '',
            editorSubComponent: EditorDirectives
       }
    },
    created() {
        //load initial information for modules and templates
        //make sure confirmLeave is set to false
        this.confirmLeave = false
        let vm = this
        let rtId = this.$route.params.id

         /* 
            loop through the modules, find the one that matches 
            the route (there may be a better way of doing this; it could 
            potentially lock up if there are a lot, and won't work right
            if the routes somehow get messed up) 
        */
        for(let i = 0; i < vm.modules.length; i++) {
            if(vm.modules[i].internalName === rtId) {
                //The module "name" is the same as the route ID
                vm.mod = vm.modules[i]
                vm.selectedTemplateName = vm.modules[i].template
                break
            }
        }
        //Loop through the templates
        for(let i = 0; i < designTemplates.length; i++) {
            if(vm.selectedTemplateName === designTemplates[i].name) {
                vm.selectedTemplateHtml = designTemplates[i].html
            }
            vm.templateNames.push(designTemplates[i].name)
        }

        
        //watch the state of the selected modal option for the modal window
        this.$store.subscribe((mutation, state) => {
            //check to make sure the change came from the logout click button
            if(mutation.type === 'modalEditorConfirm'){
                
                let theAction = state.modalWindow.modalAction
                if(theAction == 'yes') {
                   //do save stuff (for later) 
                } 
                //if the answer is no, reset modal, do nothing, and just go to the next block
                //(for now, just close the modal regardless of the option until I can figure out the "save" feature)
                this.$store.dispatch('displayModal',{
                    id: 0,
                    title: '',
                    message: '',          
                })
            }
        })
        //watch the state of the selected modal option for the modal window
        this.$store.subscribe((mutation, state) => {
            let vm = this
            //check to make sure the change came from the logout click button
            if(mutation.type === 'modalRouteChangeConfirm'){
                
                let theAction = state.modalWindow.modalAction
                if(theAction == 'yes') {
                   this.confirmLeave = true 
                   this.$store.dispatch('displayModal',{
                        id: 0,
                        title: '',
                        message: '',          
                    })
                    //this may not be the best way to handle going to the selected route 
                    vm.$router.replace(this.nextRoute).catch(err=>{})
                } 
                //if the answer is no, reset modal, do nothing, and just go to the next block
                //(for now, just close the modal regardless of the option until I can figure out the "save" feature)
                this.$store.dispatch('displayModal',{
                    id: 0,
                    title: '',
                    message: '',          
                })
            }
        })
    },
    computed: mapGetters([
            'modal',
            'modalAction',
        ]),

    watch: {
        selectedTemplateName() {
            let vm = this
            //get the data from a newly selected template
            for(let i = 0; i < vm.templates.length; i++) {
                if(vm.templates[i].name === vm.selectedTemplateName) {
                    vm.selectedTemplateHtml = vm.templates[i].html
                }
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        //this may not be the best way to handle going to the selected route
        this.nextRoute = to
        //check to make sure the user wants to leave without saving
        if(this.confirmLeave) {
            //maybe get the route and pass it into where I handle the store stuff to navigate to the next route?
            next()
        } else {
                this.$store.dispatch('displayModal', {
                id: 3,
                title: 'Exit?',
                message: 'Are you sure you want to leave without saving?',
            })
            if(this.confirmLeave) {
                next()
            } else {
                next(false)
            }
        }
    },
    methods: {
        confirmCancel(moduleID) {
            this.$store.dispatch('displayModal', 
            {
                id: 2,
                title: 'Cancel?',
                message: 'Cancel edit without saving?'
            })
            // this.$store.dispatch('modalSelectedOption', 'cancel')
        },
        confirmSave(moduleID) {
            this.$store.dispatch('displayModal', {
                id: 2,
                title: 'Save?',
                message: 'Are you sure you want to save changes?'            
            })
            // this.$store.dispatch('modalSelectedOption', 'save')
        },
        parseDirectives(inHTML) {
            let foundDirectives = inHTML.replace(/<[^>]*>?/gm, '').split('!')
            return foundDirectives
        },
        
    }
}
