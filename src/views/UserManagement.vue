<template>
    <v-container>
        <!-- Remote DB access example -->
        <!-- Could use vue-resource, but using axios instead -->
        <h1>Remote DB example</h1>
        <v-spacer></v-spacer>
        <v-btn @click="getCourses">Get Courses</v-btn>
        <v-spacer></v-spacer>
        <ul>
            <li v-for="course in courses" :key='course.key'>
               <p> {{ course.title }} </p>
               <p> {{ course.prefix }} : {{ course.number }}</p>
            </li>
        </ul>
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
            axios.get('https://sweltering-fire-2420.firebaseio.com/courses.json')
            .then(response => {
                // console.log(response.data)
                const allCoursesObj = response.data 
                //"e" means entry
                const objectsToArray = Object.entries(allCoursesObj).map(e => 
                //this is unique to firebase
                Object.assign(e[1], {key: e[0]}))
                //Don't normally need to do this if your server returns normal JSON
                // console.log(objectsToArray)
                this.courses = objectsToArray
            })
            .catch(error => console.error(error))
            .finally(()=>{
                // console.log(this.courses)
            })
        }
    }
}
</script>

<style scoped>

</style>
