<template>
    <v-card class="pa-10">
        <!-- Make sure that there are params in the object before displaying the confirmation info -->
        <template v-if="Object.keys(msg).length === 0 && msg.constructor === Object">
            <v-card-title class="blue lighten-1 white--text mb-5">Error</v-card-title>
            <h2>No data recieved!</h2>
            <p>You're seeing this page because you navigated here by mistake, because you refreshed the page after your initial confirmation, or because you submitted a form that didn't send any data.</p>
        </template>
        <template v-else>
            <v-card-title class="blue lighten-1 white--text mb-5">Confirmation</v-card-title>
            <h2>Your message has been sent.</h2>
            <h3>Message Contents:</h3>
            <p>First Name: {{ msg.firstname }}</p>
            <p>Last Name: {{ msg.lastname }}</p>
            <p>email: {{ msg.email }}</p>
            <p>Issues: <span v-for="issue in msg.issues" :key="issue.key"><p>{{ issue }}</p></span></p>
            <p>Response Required: {{ msg.resreq }}</p>
            <p>Message: {{ msg.message }}</p>
        </template>
    </v-card>
</template>

<script>
export default {
    data: ()=> {
        return {
            msg: {}
        }
    },
    created() {
        this.msg = this.$route.params
    }
}
</script>

<style scoped>

</style>