<template>
    <v-card class="pa-10">
        <v-card-title>Welcome to your Content Management System</v-card-title>
        <v-form @submit.prevent="onSubmit">
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
            <v-btn 
            @click="onSubmit" 
            round 
            color="blue"
            dark
            >Submit</v-btn>
        </v-form>
    </v-card>
</template>
<script>
import users from '../../src/assets/users.js'

export default {
    data: ()=> {
        return {

        }
    },
    methods: {
        onSubmit() {
            const formData = {
                userName: this.userName,
                password: this.password,
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