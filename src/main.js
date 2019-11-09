import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

//Custom directive 

Vue.directive('emphasized', {
  inserted: el => {
    el.style.color="green"
    el.style.boxshadow="5px 5px 5px #ccc"
    el.style.opacity="50%"
    el.style.borderradius="10px"
    el.style.padding="10px"
    el.style.fontstyle="italic"
  }
})

//global mixin
Vue.mixin({
  created: function () {
    
  }
})

//global filter
Vue.filter('upper', (value) => {
  return value.toUpperCase()
})



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
