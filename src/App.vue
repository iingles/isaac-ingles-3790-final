<template>
  <v-app> 
    <template v-if="login">
    <Header  />
      <v-content>
        <transition name="fade">
           <router-view></router-view>
        </transition>         
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

  },
};
</script>

<style>
  body {
    padding: 10px 15px;
  }
  .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
