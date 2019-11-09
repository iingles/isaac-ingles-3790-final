<template>
    <v-container>
        <!-- Remote DB access example -->
        <!-- Could use vue-resource, but using axios instead -->
        <h1>Remote DB example</h1>
        <v-spacer></v-spacer>
        <v-btn @click="getPeople">Get People</v-btn>
        <v-spacer></v-spacer>
        <ul>
            <li v-for="(person,index) in people" :key='index'>
               <p> {{ person.name }} </p>
               <p> {{ person.gender }}</p>
               <p> {{index}} </p>
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
            people: [],
        }
    },
    methods: {
        getPeople() {
            //might kill the browser if you ask for a ton of data at once
            //for a ton of data, use pagination stuffs
            axios.get('https://uinames.com/api/?amount=25&region=United States')
            .then(response => {
                // console.log(response.data)
                // const allCoursesObj = response.data 
                //"e" means entry
               
               //this is unique to firebase
                // const objectsToArray = Object.entries(allCoursesObj).map(e => 
                // Object.assign(e[1], {key: e[0]}))
                //Don't normally need to do this if your server returns normal JSON
                // console.log(objectsToArray)
                this.people = response.data
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
