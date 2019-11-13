<template>
  <v-app> 
    <template v-if="this.$store.state.user.loggedIn">
    <Header  />
      <v-content>
        <transition name="fade" mode="out-in">
           <router-view></router-view>
        </transition>
      </v-content>
      <Footer />
    </template>
    <template v-else>
      <Login />
    </template>
    <Modal 
        :showModal="this.$store.getters.modal.showModal"
    />
  </v-app>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Login from './views/Login.vue'
import Modal from './components/shared/Modal';
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login,
    Modal,
  },
  data: () => ({
    
  }),   
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
