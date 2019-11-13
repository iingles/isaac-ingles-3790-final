<template>
    <v-dialog 
    v-model="showModal"
    persistent
    max-width="600px"
    >        
        <v-card>
            <v-card-title>
                <h1>{{ modalTitle }}</h1>
            </v-card-title>
            <v-card-text>
                {{ modalMessage }}
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
export default {
    props: {
        showModal: Boolean,
        modalMessage: String,
        modalTitle: String
    },
    methods: {
        modal: function(choice) {
            if(choice == 'no') {
                this.$store.dispatch('displayModal', {
                    modalAction: 'no'
                })
            } 
            if(choice == 'yes') {
                this.$store.dispatch('displayModal', {
                    modalAction: 'yes'
                })
            }
        },
    }
}
</script>