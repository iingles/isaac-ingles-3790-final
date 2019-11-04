<template>
    <v-container>
        <!-- Remote DB access example -->
        <!-- Could use vue-resource, but using axios instead -->
        <h1>Remote DB example</h1>
        <v-spacer></v-spacer>
        <v-btn @click="getCourses">Get Courses</v-btn>
    </v-container>
</template>

<script>
// axios installed!
import axios from 'axios'

export default {
    data() {
        return {
            courses: [],
        }
    },
    methods: {
        getCourses() {
            //might kill the browser if you ask for a ton of data at once
            axios.get('https://sweltering-fire-2420.firebaseio.com/')
            .then(response => {
                console.log(response)
            })
            .catch(error => console.error(error))

        }
    }
}
</script>

<style scoped>

</style>
