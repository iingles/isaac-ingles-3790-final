<template>
  <v-app>
    <template v-if="login">
    <Header  />
      <v-content>
          <router-view></router-view>
      </v-content>
      <Footer />
    </template>
    <template v-else>
      <Login />
    </template>
  </v-app>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Login from './views/Login.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login
  },
  data: () => ({
    login: false,
  }),
  
  methods: {

  }
};
</script>

<style>
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
