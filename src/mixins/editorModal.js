export default {
    methods: {
        confirmCancel(id) {
            this.$store.dispatch('displayModal', 
            {
                id: 2,
                title: 'Cancel?',
                message: 'Cancel edit without saving?'
            })
            // this.$store.dispatch('modalSelectedOption', 'cancel')
        },
        confirmSave(id) {
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