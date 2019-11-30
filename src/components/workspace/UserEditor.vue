<template>
    <v-card class="pa-10 xs-12 sm-12" v-if="user">
        <v-card-title class="mb-10 pa-0 editor-title red--text">Editing {{ user.name + ' ' + user.surname }}</v-card-title>
       <v-row>
           <v-col cols='6'>
               <v-img 
                :src="user.photo"
                max-height=500
                max-width=300
                > 
                </v-img>
            </v-col>
            <v-col cols='6'>
                <p>Created: 11/27/2019 (static)</p>
                <p>ID: {{ user.email.split('@')[0] }} </p>
                <v-checkbox
                    v-model="changeUserId"
                    label="Change ID"
                >  </v-checkbox>
                <v-text-field
                :value=" user.email.split('@')[0]"
                label="UserId"
                :disabled="!changeUserId"
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols='12'>
                <v-checkbox
                v-model="changeUserFirstName"
                label="Change First Name"
                >                    
            </v-checkbox>
            <v-text-field
                :value="user.name"
                label="First Name"
                :disabled="!changeUserFirstName"
            ></v-text-field>
            <v-checkbox
                v-model="changeUserSurname"
                label="Change User Surname"
            >                    
            </v-checkbox>
            <v-text-field
                :value="user.surname"
                label="Last Name"
                :disabled="!changeUserSurname"
            ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-btn 
            color="red" 
            light
            @click="confirmCancel(userId)"
            class="ma-1"
            >Cancel</v-btn>
            <v-btn 
            color="green"
            light @click="confirmSave(userId)"
            class="ma-1"
            >Save</v-btn>  
        </v-row>
    </v-card>
    <v-card v-else>
        loading
    </v-card>
</template>

<script>
import editorModal from '../../mixins/editorModal.js'
import editorLoadInfo from '../../mixins/editorLoadInfo.js'

export default {
    mixins: [
        editorLoadInfo,
        editorModal,
    ],
    data: ()=> {
        return {
            user: {},
            changeUserFirstName: false,
            changeUserSurname: false,
            changeUserId: false, 
            userId: '',
            post: null,
            error: null,
            confirmLeave: false,
            nextRoute: '',
        }
    },
    //load the data before navigating to route
    beforeRouteEnter (to, from, next) {
        if(this.$store.getters.registeredUsers) {
            next()
        }
    },
   beforeMount() {
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
                vm.userID = vm.user.email.split('@')[0]
                break
            }
        }
    },
}
</script>

<style scoped>
    .editor-title {
        /* color: red; */
        border-bottom: 1px dotted #ccc
    }
</style>