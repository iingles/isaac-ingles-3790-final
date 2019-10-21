<template>
  <div>
    <v-app-bar 
      app
      fixed
      color="indigo darken-4"
      dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ this.$route.name }}(title goes here)</v-toolbar-title>

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
      </v-menu>
    </v-app-bar>
    <LeftDrawer />
  </div>
</template>

<script>
import LeftDrawer from "./LeftDrawer"

export default {
  components: {
    LeftDrawer
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
