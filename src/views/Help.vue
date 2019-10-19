<template>
    <v-container>
        <h1>Contact the Help Desk</h1>
        <v-form>
            <v-row>
                <v-col md="12" sm="12" xs="12">
                    <v-text-field
                    v-model.lazy="userData.firstname"
                    id="firstname"
                    label="First Name"
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
                    >
                    </v-text-field>
                </v-col>
                <v-col md="12" sm="12" xs="12">
                    <v-text-field
                    v-model="userData.email"
                    id="email"
                    label="Email"
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
            isSubmitted: false
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