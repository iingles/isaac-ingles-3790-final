export default {
     data: () => {
        return {
            confirmLeave: false,
            nextRoute: '',
        }
    },
    created() {
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
}
