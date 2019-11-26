<template>
    <v-content>
        <v-textarea v-if="paragraph" :value="pText" :model="pText" :label="pLabel"></v-textarea>
    </v-content>
</template>

<script>
export default {
    data: ()=> {
        return {
            ptext: '',
            pLabel: ''
        }
    }
}
</script>