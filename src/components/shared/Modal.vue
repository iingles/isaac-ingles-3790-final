<template>
    <v-dialog 
    v-model="this.$store.getters.modalWindow.showModal"
    persistent
    max-width="600px"
    >        
        <v-card>
            <v-card-title>
                <h1>{{ this.$store.getters.modalWindow.modalTitle }}</h1>
            </v-card-title>
            <v-card-text>
                {{ this.$store.getters.modalWindow.modalMessage }}
            </v-card-text>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="red darken-1" text @click="modal('no')">No</v-btn>
                <v-btn color="green darken-1" text @click="modal('yes')">Yes</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>    
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            
        }
    },
    methods: {
        modal: function(choice) {
            if(choice == 'no') {
                this.$store.dispatch('modalOption','no')
            } 
            if(choice == 'yes') {
                this.$store.dispatch('modalOption', 'yes')
            }
        },
    }
}
</script>