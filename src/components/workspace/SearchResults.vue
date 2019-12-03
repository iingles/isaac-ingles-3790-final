<template>
  <div>
    <!-- 
      TODO:
      Add a search filter from the search input in the sidebar menu
      Display a progress meter/spinny circle while results are loading
     -->
    <!-- <div v-for="result in searchFilter" :key='result.id'>
      {{ result }}
    </div> -->
    <template v-if="resultsLoading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </template>
    <template v-else>
      <v-data-table
        :v-model="selected"
        :headers="getTableHeaders(this.$route.params.viewmode)"
        :items="getTableItems(this.$route.params.workview)"
        :items-per-page="5"
        class="elevation-1 xs-12 lg-12"
        >      
        <template v-slot:top>
          <v-toolbar>
            <v-toolbar-title>Select an item below</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip top> 
                <template v-slot:activator="{ on }">
                    <v-btn
                      dark
                      v-on="on"
                      color="blue"
                      :to="'/workspace/' + $route.params.viewmode + '/' + $route.params.workview + '/editor' + '/new'"
                    >New</v-btn>
                </template>
                <span>Lorem Ipsum Dolor sit amet</span>
            </v-tooltip> 
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
        <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-lead-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>

      <template v-if="this.$route.params.workview == 'Users'" v-slot:item.photo="{ item }">
          <v-img 
          :src="item.photo"
          max-height=60    
          max-width=60
          class="circular-thumb-frame"
          > 
          </v-img>
      </template>
      </v-data-table>
    </template>
  </div>   
</template>

<script>
import contentModules from '../../assets/modules.js'
import designTemplates from '../../assets/templates.js'
// axios installed!
import axios from 'axios'

export default {
  props: {
    filterText: String,
  },
 data () {
    return {
      headerKeys: [],
      resultsLoading: false,
      searchData: false,
      selected: [],
      searchResults: [],
      filteredResults: [],
      people: [],
      contentHeaders: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Internal Name', value: 'internalName' },
        { text: 'Template/Type', value: 'template' },
        { text: 'Created', value: 'created' },
        { text: 'Version', value: 'version' },
        { text: 'Actions', value: 'action', sortable: false },      
      ],
      designHeaders: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        {text: 'Name', value: 'name'},
        {text: 'Created', value: 'created' },
        {text: 'Version', value: 'version'},
        {text: 'modified', value: 'modified'},
        {text: 'Actions', value: 'action', sortable: false },
      ],
      templates: designTemplates,
      modules: contentModules,
      userHeaders: [
        {
          text: 'photo',
          align: 'left',
          sortable: false,
          value: 'photo',
        },
        {text: 'Last Name', value: 'surname'},
        {text: 'First Name', value: 'name'},
        {text: 'Email', value: 'email' },
        {text: 'Actions', value: 'action', sortable: false },
      ],
    }
  },
  computed: {
    getSearchResults() {
      return this.$store.state.searchResults
    }
  },
  methods: {
     getPeople() {
      //might kill the browser if you ask for a ton of data at once
      //for a ton of data, use pagination 
      let vm = this
      vm.resultsLoading = true
     axios.get('https://cors-anywhere.herokuapp.com/https://uinames.com/api/', {
        params: {
          amount: 25,
          region: 'United States',
          ext: 'photo',
        },
      })
      .then(async response => {
        await this.$store.dispatch('loadRegisteredUsers', response.data)
        this.resultsLoading = false
        return response.data
      })
      .catch(error => console.error(error))
      .finally(() => {
        
          //I want to use vm.resultsLoading for the progress indicator
          // vm.resultsLoading = true
          // console.log(vm.resultsLoading)
      })
    },
    editItem (item) {
      if(this.$route.params.workview == 'modules') {
        this.$router.push('/workspace/' + this.$route.params.viewmode + '/' + this.$route.params.workview + '/editor/' + item.internalName ).catch(err => {})
      }
      if(this.$route.params.workview == 'Users') {
        this.$router.push('/workspace/' + this.$route.params.viewmode + '/' + this.$route.params.workview + '/editor/' + item.email.split('@')[0] ).catch(err => {})
      }
     },
    deleteItem (item) {
        console.log('delete ' + item.id)
      },
    getTableHeaders(theView) {
      let vm = this
      if(theView == 'content') {
        return vm.contentHeaders
      }
      if(theView == 'design') {
        return vm.designHeaders
      }
      if(theView == 'admin') {
        return vm.userHeaders
      }
    },
    getTableItems(theView) {
      let vm = this
      if(theView == 'modules') {
        vm.searchResults = vm.modules
        return vm.modules
      }
      if(theView == 'templates') {
        vm.searchResults = vm.templates
        return vm.templates
      }
      if(theView == 'Users') {
        //If not done already, load the api call into the local store
        if(this.$store.getters.registeredUsers.length < 1) {
          let theUsers = vm.getPeople()
          vm.searchResults = this.$store.getters.registeredUsers
        } else {
          vm.searchResults = this.$store.getters.registeredUsers
        }
        return vm.searchResults
      }
    },
  },
}
</script>

<style scoped>
  .circular-thumb-frame {
    border-radius: 50%;
    margin: 5px 0;
  }
</style>
