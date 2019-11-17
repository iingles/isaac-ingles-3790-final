<template>
  <div>
    <v-app-bar 
      app
      fixed
      color="#618E41"
      dark
      dense
      collapse-on-scroll
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
        <v-card class="pb-10 pt-10 pl-10 pr-10 ma-5 text-center">
          <p>Logged in as</p> 
          <p>{{ userName }}</p>
          <v-btn class="mt-5" color="blue" dark rounded @click="logout">Logout</v-btn>
        </v-card>
        
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopRightMenu from "./TopRightMenu.vue"

export default {
  components: {
    TopRightMenu
  },
  data: () => ({
    drawer: null,
    //set this to keep my mutation listener from triggering on every single dialog
  }),
  computed: {
    userName() {
      return this.$store.getters.user.userName
    },
    //ES6 destructuring!
    ...mapState(['modalWindow'])
  },
  created() {
    let vm = this
    //watch the state of the selected modal option for the modal window
    this.$store.subscribe((mutation, state) => {
    //check to make sure the change came from the logout click button
      if(mutation.type === 'modalSelectLogout') {
        let theAction = state.modalWindow.modalAction
        if(theAction == 'yes') {
          this.$store.dispatch('userLoggedOut', {
            userName: '',
            password: '',
            loggedIn: false,
          })
        } 
        this.$store.dispatch('displayModal',{
          title: '',
          message: '',
        })
      }
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('displayModal',{
        title: 'Logout',
        message: 'Are you sure you want to log out?'
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
