<template>
  <div>
    <!-- <div v-for="result in searchFilter" :key='result.id'>
      {{ result }}
    </div> -->
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
    </v-data-table>
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
        {text: 'Name', value: "name"},
        {text: 'Created', value: 'created' },
        {text: 'Version', value: "version"},
        {text: 'modified', value: "modified"},
        {text: 'Actions', value: 'action', sortable: false },
      ],
      templates: designTemplates,
      modules: contentModules,
      userHeaders: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        {text: 'Last Name', value: "surname"},
        {text: 'First Name', value: "name"},
        {text: 'Actions', value: 'action', sortable: false },
      ],
    }
  },
  computed: {
    // searchFilter() {
    //   let vm = this
    //   if(vm.filtertext != '') {
    //     return vm.searchResults.filter(element => {
    //       vm.searchResults = element.name.match(vm.filterText)
    //       return vm.searchResults
    //     })
    //   }      
    // }
  },
  methods: {
    getPeople() {
      //might kill the browser if you ask for a ton of data at once
      //for a ton of data, use pagination stuffs
      axios.get('https://uinames.com/api/?amount=25&region=United States')
      .then(response => {
          this.people = response.data
      })
      .catch(error => console.error(error))
      .finally(() => {
          // console.log(this.courses)
      })
    },
    editItem (item) {
        this.$router.push('/workspace/' + this.$route.params.viewmode + '/' + this.$route.params.workview + '/editor/' + item.internalName ).catch(err => {})
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
        // vm.searchResults = vm.people
        return vm.getPeople()        
      }
    },
  },
    
}
</script>

<style scoped>
  
</style>
