<template>
    <v-container>
        <v-textarea v-if="paragraph"  :value="inText" v-model="newText" :label="pLabel">


        </v-textarea>
       <p>text: {{newText}}</p>
    </v-container>
</template>

<script>
export default {
    props: {
        inText: String,
        foundDirectives: Array,
    },
    data: ()=> {
        return {
            paragraph: true,
            pText: '',
            newText: '',
            pLabel: '',
        }
    },
    created() {
        let vm = this
        let included = []

        this.newText = this.inText

        const cmsParagraph = {
            props: ['text'],
            template: '<v-textarea>{{ text }}</v-textarea>'
        }
        const cmsArticle = {
            props: ['text'],
            template: '<v-textarea>{{text}}</v-textarea>'
        }

        for(let i = 0; i < vm.foundDirectives.length; i++) {
            if(vm.foundDirectives[i] === 'cmsParagraph') {
                included.push( cmsParagraph )
            }
            if(vm.foundDirectives[i] === 'cmsArticle') {
                included.push( cmsArticle )
            }
        }

    }
}
</script>