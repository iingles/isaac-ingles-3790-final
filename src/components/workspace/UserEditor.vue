<template>
    <v-card>
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
                    v-model="user.email"
                    label="Change ID"
                >  
            </v-col>
        </v-row>
        <v-row>
            <v-col cols='12'>
                <v-checkbox
                v-model="user.name"
                label="Change First Name"
                >                    
            </v-checkbox>
            <v-text-field
                :value="user.name"
                label="First Name"
                :disabled="!changeUserFirstName"
            ></v-text-field>
            <v-checkbox
                v-model="user.surname"
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
            @click="confirmCancel(user.id)"
            >Cancel</v-btn>
            <v-btn 
            color="green"
            light @click="confirmSave(mod.id)">Save</v-btn>  
        </v-row>
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
            changeUserFirstName: false,
            changeUserSurname: false,
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