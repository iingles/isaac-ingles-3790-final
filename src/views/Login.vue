<template>
    <v-container>
        <v-row class="xs-12 md-6 lg-8 xs-ma-0 lg-ma-10">
            <v-col cols="12">
            <v-card class="pa-10">
                <v-card-title>Welcome to your Content Management System</v-card-title>
                <v-form @submit.prevent="onSubmit" @keyup.enter="onSubmit" ref="loginForm">
                    <v-text-field
                        v-model.lazy="userName"
                        label="Username"
                        :rules="userNameRules"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model.lazy="password"
                        label="Password"
                        type="password"
                        :rules="passwordRules"
                    >
                    </v-text-field>
                    <v-btn 
                    @click="onSubmit"
                    type="submit"
                    rounded
                    color="blue"
                    dark
                    >Submit</v-btn>
                </v-form>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: () => {
        return {
            userName: '',
            password: '',
            userNameRules: [
                v => !!v || 'Name is required',
                v => /^[a-zA-Z]*$/.test(v) || 'Name can only contain letters',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 10 || 'Password must be 10 or more characters and contain at least one number',
                v => /[0-9]/.test(v) || 'Password must contain at least one number'
            ],
        }
    },
    methods: {
        onSubmit() {
            if(this.$refs.loginForm.validate()) {
               const formData = {
                    userName: this.userName,
                    password: this.password,
                }
                this.$store.dispatch('userLoggedIn', {
                    userName: this.userName,
                    password: this.password,
                    loggedIn: true,
                })
            } else{ /*handle invalid form error here*/ }
        }
    }
}
</script>



<style scoped>
    .login-card {
        margin: 0 auto;
    }
</style>