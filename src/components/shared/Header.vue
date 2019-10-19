<template>
  <div>
    <v-app-bar 
      app
      fixed
      color="indigo darken-4"
      dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>

        <div class="flex-grow-1"></div>
        <!-- <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        dark
        color="white"
      ></v-text-field> -->
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn
            dark
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <!-- <HeaderMenu  /> -->
      </v-menu>
    </v-app-bar>
    <!-- <v-navigation-drawer 
      app
      fixed
      v-model="drawer"
    > -->
      <!-- <CurrentUserDrawer />
      <v-btn block to="/">Dashboard</v-btn>
      <v-btn block to="/servermanagement">Server Management</v-btn>
      <v-btn block to="/system">System</v-btn>
      <v-btn block to="/logs">Logs</v-btn>
      <v-btn block to="/services">Services</v-btn>
      <v-btn block to="/accounts">Accounts</v-btn>
      <v-btn block to="/diagnostics">Diagnostics</v-btn>
      <v-btn block to="/terminal">Terminal</v-btn> 

        >System
        >Logs
        >Services
        >Accounts
        >Diagnostics
        >Terminal
     
    </v-navigation-drawer>  -->
  </div>
</template>

<script>
// import HeaderMenu from "./HeaderMenu"

export default {
  components: {
    // HeaderMenu
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }
</style>
