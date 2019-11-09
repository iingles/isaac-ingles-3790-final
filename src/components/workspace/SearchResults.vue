<template>
  <div>
    <v-data-table
      :v-model="selected"
      :headers="getTableHeaders(this.$route.params.workview)"
      :items="getTableItems(this.$route.params.workview)"
      :items-per-page="5"
      class="elevation-1"
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

export default {
 data () {
    return {
      // theView: this.$route.params.workview,
      selected: [],
      moduleHeaders: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
        { text: 'Internal Name', value: 'internalName' },
        { text: 'Template', value: 'template' },
        { text: 'Created', value: 'created' },
        { text: 'Version', value: 'version' },
        { text: 'Actions', value: 'action', sortable: false },      
      ],
      templateHeaders: [
        {
          text: 'ID',
          align: 'left',
          sortable: false,
          value: 'id',
        },
        {text: 'Name', value: "name"},
        {text: 'Version', value: "version"},
        {text: 'modified', value: "modified"},
        {text: 'Actions', value: 'action', sortable: false },
      ],
      templates: designTemplates,
      modules: contentModules,
    }
    
  },
  methods: {
    editItem (item) {
        this.$router.push('/workspace/' + this.$route.params.viewmode + '/' + this.$route.params.workview + '/editor/' + item.internalName ).catch(err => {})
      },
    deleteItem (item) {
        console.log('delete ' + item.id)
      },
    getTableHeaders(theView) {
      let vm = this
      if(theView == 'modules') {
        return vm.moduleHeaders
      }
      if(theView == 'templates') {
        return vm.templateHeaders
      }
    },
    getTableItems(theView) {
      let vm = this
      if(theView == 'modules') {
        return vm.modules
      }
      if(theView == 'templates') {
        return vm.templates
      }
    }
  },
}
</script>

<style scoped>
  .flip-enter-active {
    animation: flipin 1.5s ease-out forwards; 
  }
  .flip-leave-active {
    animation: flipout 1.5s ease-out forwards;
  }

  @keyframes flipin {
    from {transform: rotateY(0deg);}
    to {transform: rotateY(180deg); }
  }

   @keyframes flipout {
    from {transform: rotateY(180deg);}
    to {transform: rotateY(0deg); }
  }

</style>
