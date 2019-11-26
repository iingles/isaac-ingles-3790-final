<template>
    <v-container>
        <v-textarea v-if="paragraph" :model="pText" :label="pLabel">


        </v-textarea>
    </v-container>
</template>

<script>
export default {
    props: {
        inText: String,
    },
    data: ()=> {
        return {
            paragraph: true,
            pText: '',
            pLabel: '',
        }
    },
    created() {
        let vm = this
        let included = []

        const cmsParagraph = {
            props: ['text'],
            template: '<v-textarea>{{ text }}</v-textarea>'
        }
        const cmsArticle = {
            props: ['text'],
            template: '<v-textarea>{{text}}</v-textarea>'
        }

        for(let i = 0; i < foundDirectives.length; i++) {
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