<template>
    <v-card class="pa-10">
        <v-card-title>Welcome to your Content Management System</v-card-title>
        <v-form onSubmit="checkAuth()">
            <v-text-field
                v-model="userName"
                label="Username"
            >
            </v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
            >
            </v-text-field>
        </v-form>
    </v-card>
</template>
<script>
import users from '../../src/assets/users.js'

export default {
    data: ()=> {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        checkAuth() {
            let vm = this

            for(let i = 0; i < users.length; i++) {
                if(vm.userName == users[i].username) {
                    if(users[i].password == vm.password) {
                        
                    } else { console.log('incorrect password')}
                    break
                }
            }
        }
    }
}
</script>



<style scoped>
    .login-card {
        margin: 0 auto;
    }
</style>