<template>
    <v-container>
        <template>
            <h1>Contact the Help Desk</h1>
            <v-card class="ma-10 pb-5 pl-5 pr-5 pt-5">
                <v-card-title class="blue lighten-1 white--text mb-5">Fill out the form below.</v-card-title>
                <v-form ref="helpForm">
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
                            v-model.lazy="userData.email"
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
                                :rules="messageRules"
                            >
                            </v-textarea>
                            <p class="count"> characters remaining: <span :class="charCount">{{ 500 - message.length }} </span></p>
                        </v-col>
                    </v-row>
                    <!-- use prevent modifier to use Vue to handle the form -->
                    <v-btn 
                    color="blue"
                    dark
                    @click.prevent="submitted()"
                    >Submit</v-btn>
                </v-form>
            </v-card>
        </template>
    </v-container>
</template>

<script>

export default {
    data() {
        return {
            charCount: 'good',
            userData: {
                firstname: null,
                lastname: null,
                email: null,
            },
            message: '',
            //keep our issues in an array
            issues: [],
            response: '',
            errors: [],
            isSubmitted: false,
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => /^[a-zA-Z]*$/.test(v) || 'Name can only contain letters',
            ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /\S+@\S+\.\S+/.test(v) || 'Please enter a valid email (example: user@domain.com)',
            ],
            messageRules: [
                v => !!v || 'You must submit a message.',
                v => v.length >=10 || 'Your message must greater than 10 characters.',
                v => v.length <= 500 || 'Your message must be less than 500 characters',
            ]
        }
    },
    watch: {
        message() {
            let vm = this

            if(vm.message.length < 400) {
                vm.charCount = 'good'
            }
            if(vm.message.length >= 400  && vm.message.length < 500) {
                vm.charCount = 'count-warning'
            }
            if(vm.message.length > 500) {
                vm.charCount = 'over'
            }
        }
    },
    methods: {
        submitted() {
            let vm = this
            if(this.$refs.helpForm.validate()) {
               vm.valid = true
               this.$router.push('/help/help-confirmation').catch(err => {})
            } else{ /*handle invalid form error here*/ }
        },
        
    },
}
</script>

<style scoped>
    .count {
        font-size: 20px;
    } 

    .good {
        color: #00ff00;
    }

    .count-warning {
        color: #ffff00;
    }

    .over {
        color: #ff0000;
    }
</style>