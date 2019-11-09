<template>
    <v-container>
        <h1>Contact the Help Desk</h1>
        <v-card class="ma-10 pb-5 pl-5 pr-5 pt-5">
            <v-card-title class="blue lighten-1 white--text mb-5">Fill out the form below.</v-card-title>
            <v-form>
                <v-row>
                    <v-col lg="12" md="12" sm="12" xs="12">
                        <v-text-field
                        v-model.lazy="userData.firstname"
                        id="firstname"
                        label="First Name"
                        :rules="nameRules"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col md="12" sm="12" xs="12">
                        <!-- .lazy doesn't read until after the next event; 
                        instead of on every keystroke -->
                        <v-text-field
                        v-model.lazy="userData.lastname"
                        id="lastname"
                        label="Last Name"
                        :rules="nameRules"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col md="12" sm="12" xs="12">
                        <v-text-field
                        v-model="userData.email"
                        id="email"
                        label="Email"
                        :rules="emailRules"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col md="12" sm="12" xs="12">
                        <h3>Check all that apply:</h3>
                        <!-- Normally, the v-model goes on the actual HTML input element -->
                        <v-checkbox
                            v-model="issues"
                            label="Server"
                            value="Server"
                        >
                        </v-checkbox>
                        <v-checkbox
                            v-model="issues"
                            label="Interface"
                            value="Interface"
                        >
                        </v-checkbox>
                        <v-checkbox
                            v-model="issues"
                            label="Analytics"
                            value="Analytics"
                        >
                        <!--
                            Behind the scenes, v-model binds to the "value" with v-bind (or :value)
                            v-model also uses the @input listener; or @change if we use the "lazy"
                            modifier.
                        -->
                        </v-checkbox>
                        <v-radio-group v-model="response" :mandatory="false">
                            <h3>Would you like a response?</h3>
                            <v-radio label="Yes" value="Yes"></v-radio>
                            <v-radio label="No" value="No"></v-radio>
                        </v-radio-group>
                        <v-textarea
                        label="Please describe your issue"
                        v-model="message"
                        id="message"
                        >
                        </v-textarea>
                    </v-col>
                </v-row>
                <!-- use prevent modifier to use Vue to handle the form -->
                <v-btn 
                color="blue" 
                dark
                @click.prevent="submitted"
                >Submit</v-btn>
            </v-form>
        </v-card>        
    </v-container>    
</template>

<script>
export default {
    data() {
        return {
            userData: {
                firstname: '',
                lastname: '',
                email:'',
            },
            message: '',
            //keep our issues in an array
            issues: [],
            response: '',
            isSubmitted: false,
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters.'
            ],
            emailRules: [
                v => !!v || 'Email is required',
            ],
        }
    },
    methods: {
        submitted() {
            //Do form validation before submission
            this.isSubmitted = true
        }
    },
}
</script>

<style scoped>

</style>