<template>
    <v-card class="pa-10">
        <v-card-title>Welcome to your Content Management System</v-card-title>
        <v-form @submit.prevent="onSubmit">
            <v-text-field
                v-model.lazy="userName"
                label="Username"
            >
            </v-text-field>
            <v-text-field
                v-model.lazy="password"
                label="Password"
                type="password"
            >
            </v-text-field>
            <v-btn 
            @click="onSubmit" 
            rounded
            color="blue"
            dark
            >Submit</v-btn>
        </v-form>
    </v-card>
</template>
<script>
import users from '../../src/assets/users.js'

export default {
    data: () => {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                userName: this.userName,
                password: this.password,
            }
            this.$store.dispatch('userLoggedIn', {
                userName: this.userName,
                password: this.password,
            })
        }
    }
}
</script>



<style scoped>
    .login-card {
        margin: 0 auto;
    }
</style>