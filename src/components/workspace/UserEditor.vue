<template>
    <v-card>
        <v-card-title class="mb-10 pa-0 editor-title red--text">Editing {{ user.name + ' ' + user.surname }}</v-card-title>
    </v-card>
</template>

<script>
import editorModal from '../../mixins/editorModal.js'
import editorLoadInfo from '../../mixins/editorLoadInfo.js'

export default {
    mixins: {
        editorLoadInfo,
        editorModal,
    },
    data: ()=> {
        return {
            user: {},
        }
    },
    created() {
        let vm = this
        let rtId = this.$route.params.id
        let users = this.$store.getters.registeredUsers

        /* 
            loop through the users, find the one that matches 
            the route
        */
        for(let i = 0; i < users.length; i++) {
            if(users[i].email.split('@')[0] === rtId) {
                //The module "name" is the same as the route ID
                vm.user = users[i]
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