<template>
    <v-navigation-drawer 
        app
        fixed
        v-model="drawer"
        >
        <v-btn block to="/">Dashboard</v-btn>
        <v-btn block to="/servermanagement">Server Management</v-btn>
        <v-btn block to="/system">System</v-btn>
        <v-btn block to="/logs">Logs</v-btn>
        <v-btn block to="/services">Services</v-btn>
        <v-btn block to="/accounts">Accounts</v-btn>
        <v-btn block to="/diagnostics">Diagnostics</v-btn>
        <v-btn block to="/terminal">Terminal</v-btn>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
    
    },
    data: ()=>({
        drawer: null,
    }),
}
</script>

<style scoped>

</style>
