<template>
    <v-content>
        <v-textarea v-if="paragraph" :value="inText" :model="pText" :label="pLabel"></v-textarea>
    </v-content>
</template>

<script>
export default {
    props: {
        inText: String,
        label: String,
    },
    data: ()=> {
        return {
            paragraph: true,
            ptext: '',
            pLabel: '',
        }
    },
    created() {
        includeDirectives(found) {
            
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

            return found
        }
    }
}
</script>