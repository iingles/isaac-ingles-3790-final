<template>
    <v-container>
        <template v-if="paragraph">
            <v-textarea 
                v-for="(para, index) in paragraphs"
                :key="para.name"
                v-model="pText[index].text"                
                :label="para.name"
                >
            </v-textarea>
       </template>
    </v-container>
</template>

<script>
export default {
    props: {
        foundDirectives: Array,
    },
    data: ()=> {
        return {
            paragraph: false,
            paragraphs: [],
            pText: [],
        }
    },
    created() {
        let vm = this
        
        
        const cmsParagraph = {
            name: "paragraph",
            props: {text: 'paragraph text'},
            template: '<v-textarea>{{ text }}</v-textarea>'
        }
        const cmsArticle = {
            name: "article",
            props: {text: 'this is the article text'},
            template: '<v-textarea>{{text}}</v-textarea>'
        }
        
        for(let i = 0; i < vm.foundDirectives.length; i++) {
            if(vm.foundDirectives[i] === '$cmsParagraph') {
                vm.paragraph = true
                vm.pText.push(cmsParagraph.props)
                vm.paragraphs.push( cmsParagraph )
                
            }
            if(vm.foundDirectives[i] === '$cmsArticle') {
                vm.paragraph = true
                vm.pText.push(cmsArticle.props)
                vm.paragraphs.push( cmsArticle )
            }
        }

    }
}
</script>