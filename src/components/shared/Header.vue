<template>
  <div>
    <v-app-bar 
      app
      fixed
      color="indigo darken-4"
      dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ this.$route.name }}<span v-if="this.$route.params.id">&nbsp;{{ this.$route.params.id }}</span></v-toolbar-title>

      <div class="flex-grow-1"></div>
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
        <TopRightMenu />
      </v-menu>
    </v-app-bar>
     <v-navigation-drawer 
        app
        fixed
        v-model="drawer"
        >
        <v-btn block to="/">Dashboard</v-btn>
        <v-btn block to="/workspace">Workspace</v-btn>
        <v-btn block to="/users">Users</v-btn>
        <v-card class="pd-10 ma-5 text-center">
          <p>Logged in as</p> 
          {{ userName }}
          <v-btn color="blue" dark rounded @click="logout">Logout</v-btn>
        </v-card>
        
    </v-navigation-drawer>
  </div>
</template>

<script>
import TopRightMenu from "./TopRightMenu.vue"

export default {
  components: {
    TopRightMenu
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    userName() {
      console.log(this.$store.getters.user)
      return this.$store.getters.user.userName
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('userLoggedOut', {
          userName: '',
          password: '',
      })
    }
  },
}
</script>

<style scoped>
  .header {
    padding: 10px 25px;
  }
</style>
