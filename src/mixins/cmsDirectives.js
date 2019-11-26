import { VMenu } from "vuetify/lib"

export const cmsDirective = {
    data: () => {
        return {
            foundDirectives: []
        }
    },
    methods: {
        parseDirectives(inHTML) {
            //parse out the HTML and return an array of the directives from the template
            this.foundDirectives = inHTML.replace(/<[^>]*>?/gm, '').split('!')
        },
        includeDirectives(foundDirectives) {
            
            let vm = this

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
                    return cmsParagraph
                }
                if(vm.foundDirectives[i]) === 'cmsArticle') {
                    return cmsArticle
                }
            }
            
            
        }
    }
}

