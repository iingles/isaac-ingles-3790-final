<template>
    <v-card class="pa-10">
        <v-card-title>Welcome to your Content Management System</v-card-title>
        <v-form @submit.prevent="onSubmit" @keyup.enter="onSubmit">
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
</template>
<script>

export default {
    data: () => {
        return {
            userName: '',
            password: '',
            userNameRules: [
                v => !!v || 'Name is required',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
            ],
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