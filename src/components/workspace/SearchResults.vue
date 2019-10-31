<template>
  <div>
    <v-data-table
      :v-model="selected"
      :headers="headers"
      :items="modules"
      :items-per-page="5"
      class="elevation-1"
      >
      <template v-slot:top>
        <v-toolbar>
          <v-toolbar-title>Select a module</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn>New Module</v-btn>
        </v-toolbar>
      </template>
    </v-data-table>
  </div>   
</template>

<script>
import contentModules from '../../assets/modules.js'

export default {
 data () {
    return {
      selected: [], 
      headers: [
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
      ],
      modules: contentModules,
    }
  },
  created() {
    // for(let i = 0; i < contentModules.length; i++){
    //   this.modules.push(contentModules[i])
    // }
    
  }
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
