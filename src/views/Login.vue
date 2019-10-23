<template>
    <v-card class="pa-10">
        <v-card-title>Welcome to your Content Management System</v-card-title>
        <v-form>
            <v-text-field
                v-model="userName"
                label="Username"
            >
            </v-text-field>
            <v-text-field
                v-model="Password"
                label="Password"
            >
            </v-text-field>
        </v-form>
    </v-card>
</template>
<script>
export default {
    data: ()=> {
        return {
            userName: '',
            password: ''
        }
    }
}
</script>



<style scoped>
    .login-card {
        margin: 0 auto;
    }
</style>