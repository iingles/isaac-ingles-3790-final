import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

//Custom directive 

Vue.directive('floater', {
  inserted: el => {
    el.style.position="fixed"
    el.style.right="10%"
    el.style.top="50%"
    el.style.textcolor="white"
    el.style.background="gray"
    el.style.opacity="50%"
    el.style.borderradius="10px"
    el.style.padding="10px"
  }
})

//global mixin
Vue.mixin({
  created: function () {
    
  }
})



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
