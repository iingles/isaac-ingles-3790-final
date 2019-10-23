<template>
  <v-app>
    <Header  />
    <v-content>
        <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data: () => ({
    
  }),
  
  methods: {

  }
};
</script>
